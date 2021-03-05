const route = require("express").Router()
const contrlr = require ('./passcontroller')

route.put('/',contrlr.forgetpass)
route.put('/reset',contrlr.resetpass)

module.exports = route