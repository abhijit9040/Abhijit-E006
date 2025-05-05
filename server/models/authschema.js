const mongoose = require('mongoose');
const authschema = new mongoose.Schema({
    name:{
       type: String,
       required:true
    },
    password:{
        type:String,
       required:true
    },
    email:{
        type:String,
       required:true
    }
})

const auth = mongoose.model('auth', authschema);

module.exports = auth;
