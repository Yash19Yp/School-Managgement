const mongoose = require("mongoose")
const uri = "mongodb://127.0.0.1:27017/SchoolManagementSystem"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
db.once("open", () => {
    console.log("Connection Successeed")
})
db.on("error", () => {
    console.log("Error in Connect Mongo")
})
module.exports = mongoose