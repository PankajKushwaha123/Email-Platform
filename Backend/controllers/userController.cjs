const nodemailer = require('nodemailer');
const User = require('../models/userModel.cjs');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken.cjs');


/* User Authentication Controllers */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    if (!user.isVerified){
        return res.json({ message: "Please check your email for verification link" });
    } else{
        res.json({
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
    }
  } else {
    res.status(401);
    throw new Error('Invalid email or Password');
  }
});


const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).json({ error: 'User already exists'});
  }

  const user = await User.create({ name, email, password, isVerified: false });
  
  const smtpTransporter = nodemailer.createTransport({
    host: 'mail.mailmort.club',
    port: 587,
    secure: false,
    auth: {
      user: "noreply@mailmort.club",
      pass: "F68L[UmQw5"
    },
    tls: {
        rejectUnauthorized: false
    }
  });
  
  await smtpTransporter.sendMail({
    from: "Security <noreply@mailmort.club>",
    to: email,
    subject: "Account Verification Email",
    text: "Email Verification for Account Registration",
    html: "<body>Hi " + name + "!<br><p>You recently tried to create an account with MailMort.</p><p>Please click the below link to verify your account:</p><p><a href='https://apis.mailmort.co/track/verify/" + user._id +"' target=_blank>Verify Email</a></body>"
  }, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.error(info);
    }
  });

  if (user) {
    res.status(200).json({ message: "Check your email for verification link" });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});


/* Admin User Management Controllers */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});


const updatePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { password, new_password } = req.body;

  if (user) {
    if (await user.matchPassword(password)) {
        user.password = req.body.new_password;
        const updatedUser = await user.save();
        if (updatedUser) {
            return res.status(200).json({ message: "Password Changed Successfully" });
        } else {
            return res.json({ error: "Password could not be changed" });
        }
    } else {
        return res.json({ error: "Wrong current password" })
    }
  } else {
    return res.status(404);
    throw new Error('User not Found');
  }
});


/* User Sender Profiles Controllers */
const addSender = asyncHandler(async (req, res) => {
  const newSender = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    user.senders.push(newSender);
    await user.save();
    res.json({ message: 'Sender added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const senders = asyncHandler(async (req, res) => {
  try {
    res.json({'senders' : req.user.senders});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const deleteSenders = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }

    const senderIndex = user.senders.findIndex(sender => sender.sender_email == email);
    if (senderIndex === -1) {
      res.status(404).json({ message: 'Sender not found' });
    }
    user.senders.splice(senderIndex, 1);
    await user.save();
    const user1 = await User.findById(req.user._id);
    const sendersList = user1.sender;
    res.json({ 'senders' : sendersList });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/* User Domain Controllers */
const addDomains = asyncHandler(async (req, res) => {
  const { domain_name } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    const newDomain = { 
        "domain_name": domain_name,
        "status": "Verification Pending",
        "date": (new Date()).toLocaleDateString()
    };
    user.domains.push(newDomain);
    await user.save();
    res.json({ message: 'Domain added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const domains = asyncHandler(async (req, res) => {
  try {
    res.json({'domains' : req.user.domains});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const deleteDomains = asyncHandler(async (req, res) => {
  const { domain_name } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    
    const domainIndex = user.domains.findIndex(domains => domains.domain_name == domain_name);
    if (domainIndex === -1) {
        res.status(404).json({ message: 'Domain not found' });
    }
    user.domains.splice(domainIndex, 1);
    await user.save();
    res.json({ message: 'Domain deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/* User Inbox Controllers */
const addInbox = asyncHandler(async (req, res) => {
  const { username, domain } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    
    const domainIndex = user.domains.findIndex(domains => domains.domain_name == domain);
    if (domainIndex === -1) {
        res.status(404).json({ message: 'Domain not found' });
    }
    if (user.domains[domainIndex].status=="Verification Pending"){
        res.json({ error: 'Domain not verified' });
    }
    
    const newInbox = { 
        "username": username,
        "domain": domain,
        "status": "Pending Approval",
        "date": (new Date()).toLocaleDateString()
    };
    user.inboxes.push(newInbox);
    await user.save();
    res.json({ message: 'Inbox added successfully' });
  } catch (error) {
      console.error(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const inboxes = asyncHandler(async (req, res) => {
  try {
    res.json({'inboxes' : req.user.inboxes});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const deleteInbox = asyncHandler(async (req, res) => {
  const { username, domain } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    
    const inboxIndex = user.inboxes.findIndex(inboxes => (inboxes.username == username && inboxes.domain == domain));
    if (inboxIndex === -1) {
        res.status(404).json({ message: 'Inbox not found' });
    }
    user.inboxes.splice(inboxIndex, 1);
    await user.save();
    res.json({ message: 'Inbox deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = { login, register, getUsers, updatePassword, addSender, senders, deleteSenders, addDomains, domains, deleteDomains, addInbox, inboxes, deleteInbox };
