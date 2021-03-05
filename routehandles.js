const gateway =require('./checkout/route')
const rs = require('./Resetandforget/route')
module.exports = app => {
    app.use('/bill',gateway)
    app.use('/forgetpass',rs)

}