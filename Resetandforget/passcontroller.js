const jwt = require ('jsonwebtoken')
const nodemailer = require('nodemailer')

 const mailTransporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: { 
        user: 'nodet245@gmail.com', //your email
        pass: '123/123node' //password
    }
 })

 RESET_PASSWORD_KEY = 'accountactivatekey12345'

exports.forgetpass = async (req,res) => {
    console.log("resetpass")
    const { email} = req.body;
    const id = 12345

    //find user from database and get id

    const token = jwt.sign({id},RESET_PASSWORD_KEY, {expiresIn: '20m'})

    console.log(token, id, email)

    let mailDetails = { 
        from: 'nodet245@gmail.com', 
        to: email, 
        subject: 'Reset password link', 
        html:`<p>http://localhost:3000/${token}</p>`  
       
    }; 
     //update reset link in the db 
    mailTransporter.sendMail(mailDetails, (err, info) => { 
        if(err) { 
            console.log(err); 
        } 
        else { 
            
            console.log(info); 
            res.send("mail is send successfuly")
        } 
    }); 

}

exports.resetpass = async (req, res)=>{
    const {resetlink, password} = req.body
    if (resetlink){
        jwt.verify(resetlink,RESET_PASSWORD_KEY, function (error,data){
            if(error){
                res.status(401).send("icorrect link or timeout")
            }
            // user.findOne({restlink}, (error,user)=>{})
            res.status(200).json({"newpassword":password})
        })

    }else
      res.status(401).send("resetlink is not available")

}