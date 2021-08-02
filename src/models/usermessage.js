const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid email id")
            }
        }
    },
    phoneno: {
        type: Number,
        required: true,
        min: 10
    },
    detail:{
        type: String,
        required: true,
        minLength: 15
    }

})

const User = mongoose.model("Detail",userSchema)

module.exports = User;