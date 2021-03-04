const express = require ('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require("./routehandles")(app)

 

app.get('/', (req,res) => {
    console.log("server is running")
})

app.listen(3000,() => {
    console.log("running on port 3000")
})