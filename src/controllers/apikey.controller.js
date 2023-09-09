import Userapikey from '../model/usersapikey.model.js';
import dotenv from "dotenv"
import sgMail from "@sendgrid/mail";

dotenv.config();

export const creatingUserApiKey = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { useremail } = req.body;
  const userFound = await Userapikey.findOne({ useremail });
  
  if (userFound) {
    return res.status(400).json({ message: "Usuario ya existe, se envió la apiKey a su email" });
  }
  
  try {
    const newUserApiKey = new Userapikey({
      useremail: useremail,
    });
    const userApiKeySaved = await newUserApiKey.save();
    
    const msg = {
      to: useremail,
      from: 'dfrancoandres@gmail.com',
      subject: '¡Bienvenido! Tu apiKey de ArgentAPI',
      html: `Esta key es de uso personal, por favor no compartirla, ${userApiKeySaved._id}`,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        // Después de enviar el correo electrónico, evita enviar otra respuesta JSON
        return res.json({ message: "Se envió la apiKey al Email" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ message: "Error al enviar el correo electrónico" });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error del servidor");
  }
};

export const recoveryApikey = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { useremail } = req.body;
  const userFound = await Userapikey.findOne({ useremail });
  
  if (!userFound) {
    return res.status(400).json({ message: "Usuario no existe" });
  }
  
  try {
    const newUserApiKey = new Userapikey({
      useremail: useremail,
    });
    const userApiKeySaved = await newUserApiKey.save();
    
    const msg = {
      to: useremail,
      from: 'dfrancoandres@gmail.com',
      subject: 'Recuperacion de apiKey de ArgentAPI',
      html: `Esta key es de uso personal, por favor no compartirla, ${userApiKeySaved._id}`,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        // Después de enviar el correo electrónico, evita enviar otra respuesta JSON
        return res.json({ message: "Se envió la apiKey al Email" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ message: "Error al enviar el correo electrónico" });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error del servidor");
  }
}