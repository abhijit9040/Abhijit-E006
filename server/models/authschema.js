const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   
});

const recipeSchema = new mongoose.Schema({
    recipe:{
       type: String,
       required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    steps:{
        type:String,
        required:true
    },
    cookingTime:{
       type:Number,
       required:true
    }
})
const auth = mongoose.model('auth', authSchema);
const recipe = mongoose.model('recipe', recipeSchema)
module.exports = auth;
module.exports=recipe;