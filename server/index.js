const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const e = require('cors');
const authSchema = require('./models/authschema');
const recipeSchema = require('./models/authschema');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/student_db")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.post('/signup', (req, res) => {
    const { name, password, email } = req.body;
    const auth = new authSchema({ name, password, email });
    auth.save()
        .then(() => {
            res.status(201).json({ message: 'Student created successfully' });
        })
        .catch((error) => {
            res.status(400).json({ error: 'Error creating student' });
        });
}
);
   
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const auth = await studentSchema.findOne({ email });
        
        if (!auth) {
            return res.status(404).json({ error: 'Student not found' });
        }
        
        if (auth.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        
        res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
app.post('/recipeManage', (req, res) => {
    const { recipe, ingredients, steps, cookingTime } = req.body;
    const Recipe= new recipeSchema({ recipe, ingredients, steps, cookingTime });
    Recipe.save()
        .then(() => {
            res.status(201).json({ message: 'Recipe created successfully' });
        })
        .catch((error) => {
            res.status(400).json({ error: 'Error creating recipe' });
        });
}
);

app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000");
});