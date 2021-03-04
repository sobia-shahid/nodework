const checkout = require("2checkout-node")
const http = require('http');


exports.bill = async (req, res) => {
    console.log("bill is ready")
    const tco = new checkout({
        sellerId :"sandbox-seller-id",
        privateKey : "sandbox-private-key",
        //sandbox: true   
    })

    const params = {
        "merchantOrderId": "123",
        "token": req.body.token,
        "currency": "USD",
        "total": "10.00",
        "billingAddr": {
            "name": "Testing Tester",
            "addrLine1": "123 Test St",
            "city": "Columbus",
            "state": "Ohio",
            "zipCode": "43123",
            "country": "USA",
            "email": "example@2co.com",
            "phoneNumber": "5555555555"
        } ,
        "demo":true
    };

    tco.checkout.authorize(params,  (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            res.send(data.res.responseMsg);
        }
    });
}