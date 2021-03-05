const express = require ('express')
const app = express()

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';

const bodyParser = require('body-parser');
app.use(bodyParser.json());
require("./routehandles")(app)

 

app.get('/', (req,res) => {
    console.log("server is running")
})

app.listen(3000,() => {
    console.log("running on port 3000")
})