const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const routes =  require("./routes/index")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes);
app.listen(5000, "127.0.0.1",() => {
    console.log("Your app running on 5000");
})