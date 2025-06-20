const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./db.cjs');
const cors = require('cors');
dotenv.config();

const userRoutes = require('./routes/userRoutes.cjs');
const inboxRoutes = require('./routes/inboxRoutes.cjs');
const contactRoutes = require('./routes/contactRoutes.cjs');
const campaignRoutes = require('./routes/campaignRoutes.cjs');
const transactionalRoutes = require('./routes/transactionalRoutes.cjs');
const trackRoutes = require('./routes/trackRoutes.cjs');
const cronRoutes = require('./routes/cronRoutes.cjs');

connectDb();

app.use(express.json({limit: '50mb'}));
app.use(morgan('dev'));
app.use(cors());

app.use('/users', userRoutes); // User Authentication and Registration
app.use('/inbox', inboxRoutes); // Tracking Parameters
app.use('/contacts', contactRoutes); // Contact and Mailing Lists
app.use('/campaigns', campaignRoutes); // Campaign and Statistics
app.use('/transactional', transactionalRoutes); // Transactional Emails and Statistics
app.use('/track', trackRoutes); // Tracking Parameters
app.use('/crons', cronRoutes); // Cron Jobs

app.get('/', (req, res) => {
  res.json({ version: '0.1' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));