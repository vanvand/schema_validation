const mongoose = require("mongoose")

const dataStructure = {
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [3, "Name must be at least 3 characters long."],
        maxlength: [15, "Name can't be longer than 15 characters."]
    },

    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "This email already exist!"],
        validate: [val => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
                return true;
            }
            return false;
        }, "This Email is not valid"]
    },

    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [6, "Password must be at least 6 characters long."],
        // when no pre-defined method is present, use validate > allow you to do more complex stuff
        validate: [val => {
            if(val.length < 6) {
                return false
            } return true
        }, "Password must be at least 6 characters long."]
    },

    age: {
        type: Number,
        required: [true, "Age is required."],
        min: [18, "Age must be at least 18 years old."],
        max: [65, "Age must be at most 65 years old"],
        // validate: [(val) => {
        //     if((val %2 == 0) && (val >= 18) && (val <= 60)) {
        //         return true
        //     }
        //     return false
        // }, "We need even number between 18 and 60"]
    },

    gender: {
        type: String,
        required: false,
        default: null,
        // validate: [g => {
        //     if(g == "male"|| g == "female" || g == "other" || g == null) {
        //             return true;
        //         } return false;
        // }, "Gender can be null, female, male, or other."]
        enum: {
            values: ["male", "female", "other", "null"],
            message: "Gender can be null, female, male, or other."
        }
    },

    married: {
        type: Boolean,
        default: false
    },

    phone: {
        type: String,
        required: false,
        default: null,
        minlength: [10, "Phone must be at least 10 characters long"]
    },

    address: {
        required: false,
        default: null,
        type: {
        country: {
            type: String, 
            required: [true, "Country is required"],
            minlength: [3, "Country must be at least 3 characters long"]
        },
        city: {
            type: String, 
            required: [true, "City is required"],
            minlength: [3, "City must be at least 3 characters long"]
        },
        street: {
            type: String, 
            required: [true, "Street is required"],
            minlength: [3, "Street must be at least 3 characters long"]
        },
        zipCode: {
            type: Number,
            max: 99999,
            min: 9999
        }
        }
       },
    
    birthDate: Date,

    hobbies: [{ 
        type: String, 
        required: false, 
        default: [] 
    }],

    // hobbies: {
    //     type: Array,
    //     default: [],
    //     validate: [arr=>{
    //         if(Array.isArray(arr)) {
    //             if(arr.length == 0 || arr.every(st=> 
    //                 typeof st == "string")) 
    //                 return true
    //         }  return false           
    //     } ,"Hobbies must be an array of strings"]
    // }
    
    }


const UsersSchema = mongoose.Schema(dataStructure, {collection: "users_new"}) // collection optional if not equal to model name, better to set it to be explicit

                          // model name
const Users = mongoose.model("users", UsersSchema)
module.exports = Users