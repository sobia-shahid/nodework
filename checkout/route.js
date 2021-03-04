const route = require("express").Router()
const gatewaycontroller = require ("./gatewaybill")

route.post('/', gatewaycontroller.bill)

module.exports = route