const asyncHandler = require('express-async-handler');
const moment = require('moment-timezone');
const Imap = require('imap');
const { simpleParser } = require('mailparser');

const User = require('../models/userModel.cjs');
const iRedMail_Credential = require('../models/iredmailModel.cjs')

// Function to fetch full message
function fetchMessage(msg) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let message = '';

        msg.on('body', (stream, info) => {
            stream.on('data', (chunk) => {
                chunks.push(chunk.toString('utf8'));
            });
            stream.once('end', () => {
                message = chunks.join('');
            });
        });

        msg.once('attributes', (attrs) => {
            simpleParser(message, (err, parsed) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(parsed);
                }
            });
        });
    }).catch((error) => {
        console.error('Error fetching and parsing email:', error);
        throw error; // Re-throw the error to be caught in the parent function
    });
}


const fetchEmails = asyncHandler(async (req, res) => {
    const inbox = "pankaj@mailmort.club";
    try {
        // Configure IMAP connection
        // const inboxes = req.user.inboxes;
        const credentials = await iRedMail_Credential.findOne({ "email": inbox, "user_id": req.user._id });
        if(!credentials){
            console.error(credentials, sender.email, mail.user_id);
            return res.json({ error: "Contact Admin" });
        }
        
        const imap = new Imap({
            user: credentials.email,
            password: credentials.password,
            host: 'mail.mailmort.club',
            port: 993,
            tls: true
        });

        imap.connect();

        imap.once('ready', () => {
            imap.openBox('INBOX', true, (err, mailbox) => {
                if (err) {
                    console.error('Error opening INBOX:', err);
                    res.status(500).json({ error: 'Error opening INBOX' });
                    imap.end();
                    return;
                }

                // Search for the latest emails
                imap.search(['ALL'], (searchErr, results) => {
                    if (searchErr) {
                        console.error('Error searching for emails:', searchErr);
                        res.status(500).json({ error: 'Error searching for emails' });
                        imap.end();
                        return;
                    }

                    console.log('Search results:', results);

                    // Check if there are any messages to fetch
                    if (results.length === 0) {
                        console.log('No emails to fetch');
                        res.status(200).json([]);
                        imap.end();
                        return;
                    }

                    // Fetch the bodies of the latest emails
                    const fetch = imap.fetch(results, { bodies: '' });
                    const emails = [];

                    // Keep track of the number of emails processed
                    let processedEmails = 0;

                    // Promise to resolve when all emails are processed
                    const allEmailsProcessed = new Promise((resolve) => {
                        fetch.on('message', async (msg, seqno) => {
                            console.log('Fetching message:', seqno);

                            // Fetch message attributes and push the resolved email object to the emails array
                            const email = await fetchMessage(msg);
                            emails.push(email);

                            // Check if all emails are processed
                            processedEmails++;
                            if (processedEmails === results.length) {
                                resolve();
                            }
                        });
                    });

                    fetch.once('error', (fetchErr) => {
                        console.error('Error fetching emails:', fetchErr);
                        res.status(500).json({ error: 'Error fetching emails' });
                        imap.end();
                    });

                    allEmailsProcessed.then(() => {
                        imap.end();
                        res.status(200).json(emails);
                    });
                });
            });
        });

        imap.once('error', (err) => {
            console.error('IMAP error:', err);
            res.status(500).json({ error: 'IMAP error' });
        });

        imap.once('end', () => {
            console.log('IMAP connection ended');
        });
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = { fetchEmails };