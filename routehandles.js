const gateway =require('./checkout/route')
module.exports = app => {
    app.use('/bill',gateway)
}