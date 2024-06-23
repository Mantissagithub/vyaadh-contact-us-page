// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://mantissa6789:Mantis164758@ac-qn0oqwt-shard-00-00.9ramotn.mongodb.net:27017,ac-qn0oqwt-shard-00-01.9ramotn.mongodb.net:27017,ac-qn0oqwt-shard-00-02.9ramotn.mongodb.net:27017/?replicaSet=atlas-w4ijlq-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'vyaadh-forms'
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define MongoDB Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  companyName: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, companyName, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      companyName,
      message,
    });

    await newContact.save();

    console.log('Contact saved:', newContact); 

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
