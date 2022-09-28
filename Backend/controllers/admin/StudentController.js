const { Student } = require("../../models/Student");
const service = require("../../services/admin/studentService");
var hbs = require("nodemailer-express-handlebars");

var nodemailer = require("nodemailer");
const path = require("path");

module.exports = {
  create: async (req, res) => {
    const data = new Student({
      ...req.body,
    });
    try {
      const result = await service.createDocument(Student, data);
      return res.status(200).send("Data inserted successfully!");
    } catch (error) {
      res.status(500).send("Error inserting data!");
    }
  },

  findAll: async (req, res) => {
    try {
      const result = await service.getAllDocuments(Student);
      return res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  sendmail: async (req, res) => {
    try {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bhaktichevli02@gmail.com",
          pass: "wkhwlcpabubnqpef",
        },
      });
      const handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: path.resolve("../Backend/views/admin"),
          defaultLayout: false,
        },
        viewPath: path.resolve("../Backend/views/admin"),
        extName: ".handlebars",
      };
      transporter.use("compile", hbs(handlebarOptions));

      var mailOptions = {
        from: "bhaktichevli02@gmail.com",
        to: "bhakti.chevli@dhiwise.com",
        subject: "Sending Email using Node.js",
        template: "email",
        context: {
          first_name: "Bhakti",
          username: "bhakti",
          password: "bc",
          parent_name: "Pinky Chevli",
        },
      };

      //to send dynamic fields, we use express handlebars.

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      return res.status(200).send("Hello API Called");
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
