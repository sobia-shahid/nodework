//const checkout = require("2checkout-node")
const tco = require('tco-node-api')
//const http = require('http');


exports.bill = async (req, res) => {
    console.log("bill is ready")
    console.log(req.body)
    tco.config({
        sellerId :"sandbox-seller-id",
        privateKey : "sandbox-private-key",
        //sandbox: true   
    })

    
    const params = {
            amount: 1.00,
            merchant_order_id: '123',
            auth_only: true,
            customer: {
              payment_method: {
                credit_card: {
                  number: req.body.card_number,
                  exp_month: req.body.expiry_month,
                  exp_year:  req.body.expiry_year,
                  cvv: req.body.cvv_code
                  },
                address: {
                  name: 'Testing Tester',
                  address_1: '123 Test St',
                  address_2: 'the attic',
                  city: 'Columbus',
                  state: 'OH',
                  country_code: 'US',
                  postal_code: '43123'
                }
              }
            },
            demo : true,
            recurrence: '1 Month',
            duration: 'Forever'

          };

    tco.sales.create(params, function (error, sale) {
        
        if (error) {
            res.status(400).send(error.message);
        } else {
            console.log(sale.id);  //sale_id
             
        } 
      });
}