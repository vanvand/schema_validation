const mongoose = require("mongoose")
// import model
const Users = require("./model/Users")

// connect to MongoDB
const uri = "mongodb://localhost:27017/test"
mongoose.connect(uri, error => {
    if(error) throw error
    console.log("Connected to MongoDB")
})

// create new user
let user = new Users(
    {
        name: "John",
        email: "john2@gmail.com",
        password: "123456",
        age: 31,
        gender: null,
        phone: "0158830022",
        address: {
            country: "Germany",
            city: "Hamburg",
            street: "Hauptstraße",
            zipCode: 12055
        },
        hobbies: ["guitar", "programming"],
        married: true,
        birthDate: new Date(),
        // not added in DB, because not defined in schema
        // skill: "C#",
    }
) 

// user.save(error => {
//     error?console.log(error.message): console.log("Insert  done.")
// })

// Users.create(mostafa)
// .then( () => {
//     console.log("a new user added")
// })
// .catch(error => {
//     console.log(error.message)
// })


// print all user in terminal
// Users.find( {} ).then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

// User.find({}, (error, data) => {

// })

// update user
Users.updateOne({email: "john2@gmail.com"}, {$set: {age:100}},{
    runValidators: true
})
.then(result=>{
    console.log(result)
}).catch(error =>{
    console.log(error.message)
})

// Users.findOneAndUpdate({_id: "630c8377548377a0dfe57600"}, {$set: {"address.city": "Berlin"}})
// .then(result=>{
//     console.log(result)
// }).catch(error =>{
//     console.log(error)
// })