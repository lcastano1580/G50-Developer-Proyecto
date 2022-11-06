// import {injectable, /* inject, */ BindingScope} from '@loopback/core';
// @injectable({ scope: BindingScope.TRANSIENT })
// export class sendEmail{
//   constructor(){}

//   const sgMail = require('@sendgrid/mail')
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//   const msg = {
//     to: 'polomontenegrojuanpablo@gmail.com', // Change to your recipient
//     from: 'polomontenegrojuanpablo@gmail.com', // Change to your verified sender
//     subject: 'proyecto loopback',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>Test para el body del proyecto</strong>',
//   } 
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }



const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: process.env.EMAIL_TO, // Change to your recipient
    from: process.env.EMAIL_FROM, // Change to your verified sender
    subject: 'proyecto loopback',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>Test para el body del proyecto</strong>',
  } 
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })