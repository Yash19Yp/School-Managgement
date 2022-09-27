const { Student } = require("../../models/Student");
const service = require("../../services/admin/studentService");
module.exports = {
     create : async (req, res) => {
        const data = new Student({
            ...req.body
        })
    try{
        const result = await service.createDocument(Student,data);
        return  res.status(200).send("Data inserted successfully!");
    }
    catch(error){
        res.status(500).send("Error inserting data!");
    }
    },
   
}






