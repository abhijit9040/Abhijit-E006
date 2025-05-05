 const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose');
 const e = require('cors');
 const authschema = require('./models/authschema');
 const app = express();
 app.use(express.json());
 app.use(cors());
 mongoose.connect("mongodb://127.0.0.1:27017/student_db")
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.error('MongoDB connection error:', err));
     
app.post('/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await authschema.find
({ email: email, password: password });
    if (user.length > 0) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
    
});

app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000");
});