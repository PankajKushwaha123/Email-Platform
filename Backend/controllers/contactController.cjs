const ContactBook = require('../models/contactBookModel.cjs');
const User = require('../models/userModel.cjs');
const asyncHandler = require('express-async-handler');


const addContacts = asyncHandler(async (req, res) => {
    
  const { first_name, last_name, email, phone, mailing_lists, Notes, street, city, state, country, postal_code } = req.body;
  const { contact_book } = req.user;
  
  try {
    const newContact = {
      "first_name": first_name,
      "last_name": last_name,
      "email": email.toLowerCase(),
      "phone": phone,
      "mailing_lists": mailing_lists,
      "Notes": Notes,
      "history": [],
      "address": {
        "street": street,
        "city": city,
        "state": state,
        "country": country,
        "postal_code": postal_code
      }
    };
    
    const contactBook = await ContactBook.findById(contact_book);
    
    if (contact_book == "" || !contactBook) { // Contact book does not exist
      const contact_book = await ContactBook.create({ user_id: req.user._id, contacts: [newContact] });
      
      if(contact_book){
        await User.findByIdAndUpdate(
            req.user._id,
            { $set: { contact_book: contact_book._id } }
        );
        res.json({ message: 'Contact added successfully' });
      }
    } else { // Contact Book exists
        const contactIndex = contactBook.contacts.findIndex(contact => contact.email == email);
        if (contactIndex != -1) {
            return res.status(400).json({ message: 'Contact already exists' });
        }
    
        contactBook.contacts.push(newContact);
        await contactBook.save();
        
        res.json({ message: 'Contact added successfully' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const getContacts = asyncHandler(async (req, res) => {
  const { contact_book } = req.user;
  try {
    if (contact_book == "") {
        return res.status(404).json({ message: 'No contacts found' });
    }
    const contactBook = await ContactBook.findById(req.user.contact_book);
    res.json(contactBook);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const deleteContacts = asyncHandler(async (req, res) => {
  const { emails } = req.body;
  const { contact_book } = req.user;
  try {
    const contactBook = await ContactBook.findById(req.user.contact_book);
    if (contact_book=="" || !contactBook) {
      return res.status(404).json({ message: 'Contact book not found' });
    }

    contactBook.contacts = contactBook.contacts.filter(contact =>
      !emails.includes(contact.email)
    );
    
    await contactBook.save();

    res.json({ message : "Contacts deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const createList = asyncHandler(async (req, res) => {
  const { list_name, emails } = req.body;
  const { contact_book, mailing_lists } = req.user;
  try {
    const contactBook = await ContactBook.findById(contact_book);
    if (contact_book=="" || !contactBook) {
        return res.status(404).json({ message: 'Contact book not found' });
    }
    
    contactBook.contacts.forEach(contact => {
      if (emails.includes(contact.email)) if (!contact.mailing_lists.includes(list_name)) contact.mailing_lists.push(list_name);
    });
    await contactBook.save();
    
    mailing_lists.push(list_name);
    await User.findByIdAndUpdate(
        req.user._id,
        { $set: { mailing_lists: mailing_lists } }
    );
    res.json({ message: "Mailing list created successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const getLists = asyncHandler(async (req, res) => {
  try {
    const mailing_lists = {"mailing_lists": req.user.mailing_lists};
    res.json(mailing_lists);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
    
});


const getListContacts = asyncHandler(async (req, res) => {
  try {
    const { list_id } = req.body;
    if (!req.user.mailing_lists.includes(list_id)){
        return res.status(401).json({ message: 'List not found' });
    }
    const contactBook = await ContactBook.findById(req.user.contact_book);
    if (!contactBook){
        return res.status(404).json({ message: 'Contact Book not found' });
    }
    const contactsWithMailingList = contactBook.contacts.filter(
        contact => contact.mailing_lists.includes(list_id)
    );

    res.json({ contacts : contactsWithMailingList });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const deleteMailingList = asyncHandler(async (req, res) => {
  const { list_name } = req.body;
  const { contact_book } = req.user;
  
  try {
    if (!req.user.mailing_lists.includes(list_name)){
        return res.status(401).json({ message: 'Mailing List not found' });
    }
    const contactBook = await ContactBook.findById(contact_book);
    
    if (contact_book=="" || !contactBook) {
      return res.status(404).json({ error: 'Contact book not found' });
    }

    contactBook.contacts.forEach(contact => {
      const index = contact.mailing_lists.indexOf(list_name);
      if (index != -1) {
        contact.mailing_lists.splice(index, 1);
      }
    });
    await contactBook.save();
    
    const user = await User.findById(req.user._id);
    const listIndex = user.mailing_lists.indexOf(list_name);
    if (listIndex === -1) {
        res.status(404).json({ error: 'Mailing list not found' });
    }
    user.mailing_lists.splice(listIndex, 1);
    await user.save();

    res.json({ message : "Mailing List deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = { addContacts, getContacts, deleteContacts, createList, getLists, getListContacts, deleteMailingList };