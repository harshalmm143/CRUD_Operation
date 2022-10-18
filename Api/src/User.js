const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    Name: String,
    LastName: String,
    Age: Number,
    Gendar: String,
    Email: String,
    Mobile: Number,
    Address: String,
    PinCode: Number,
    State: String,
    City: String
})
module.exports = mongoose.model("User", UserSchema)