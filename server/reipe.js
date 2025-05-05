const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const e = require('cors');
const recipeSchema = require('./models/authschema');
const app = express();
app.use(express.json());
app.use(cors());

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