const mongoose = require('mongoose');
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
const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;