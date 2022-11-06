import { injectable, /* inject, */ BindingScope } from '@loopback/core';
@injectable({ scope: BindingScope.TRANSIENT })
export class NotificasionesService {
  constructor() { }

  /*
   * Add service methods here
  
   */

  // NOTIFICACION MENSAJE DE TEXTO
  enviarSMS(mensaje: string) {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
      .create({
        body: mensaje,
        from: '+12058275212',
        to: '+573219668960',
      })
      .then((message: any) => console.log(message.sid));
  }

// NOTIICASION CORREO ELECTRONICO 

  enviarEmail(mensaje: string) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: process.env.EMAIL_FROM, // Change to your recipient
      from: process.env.EMAIL_TO, // Change to your verified sender
      subject: process.env.ASUNTO,
      text: 'and easy to do anywhere, even with Node.js',
      html: mensaje ,
    }
    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      console.error(error)
    })
  }
}
