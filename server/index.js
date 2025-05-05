const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const e = require('cors');
const authschema = require('./models/authschema');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongo_url")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


app.post('/signup', async(req, res) => {
    console.log(req.body);
   // const { name, password, email } = req.body;
    const auth = new authschema({ name:req.body.name, password:req.body.password, email:req.body.password });
    await auth.save()
        .then(() => {
            res.status(201).json({ message: 'User created successfully' });
        })
        .catch((error) => {
            console.error('Error creating user:', error);
            res.status(400).json({ error: 'Error creating user' });
        });
}
);
  


app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000");
});
