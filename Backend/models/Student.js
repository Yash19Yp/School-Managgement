const mongoose = require('../config/connection');

      const Schema = mongoose.Schema;
var StudentSchema = mongoose.Schema({
    
        first_name:  { type :   String ,required : true  } ,
        middle_name: { type :   String , required : true } ,
        last_name: { type :   String ,  required : true} ,
        dob:  { type :   Date , required : true },
        parent_name:{ type :   String , required : true } ,
        parent_mail: { type :   String , required : true } ,
        parent_number: { type :   Number ,  required : true} ,
        username:{ type :   String , required : true } ,
        password: { type :   String , required : true } ,
},{strict: true})
const Student = mongoose.model("Student", StudentSchema, "Student");
module.exports = { 'Student': Student }