// import axios from 'axios';

// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');

// // const creds = require('../config/config');

// var transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASS
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${content} `

//   var mail = {
//     from: name,
//     to: 'enduringstewards@gmail.com',  //Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })

    
//   function handleSubmit(e){
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     axios({
//         method: "POST", 
//         url:"http://localhost:3002/send", 
//         data: {
//             name: name,   
//             email: email,  
//             messsage: message
//         }
//     }).then((response)=>{
//         if (response.data.msg === 'success'){
//             alert("Message Sent."); 
//             this.resetForm()
//         }else if(response.data.msg === 'fail'){
//             alert("Message failed to send.")
//         }
//     })
// }

// })

// module.exports = router;