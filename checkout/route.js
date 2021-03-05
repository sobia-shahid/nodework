const route = require("express").Router()
const gatewaycontroller = require ("./gatewaybill")

route.post('/', gatewaycontroller.bill)
route.get('/email',gatewaycontroller.mail)

module.exports = route