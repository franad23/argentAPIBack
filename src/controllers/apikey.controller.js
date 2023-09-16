import Userapikey from "../model/usersapikey.model.js";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

export const creatingUserApiKey = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { useremail } = req.body;
  const isUserExists = await Userapikey.findOne({ useremail: useremail });

  if (!useremail) return res.status(400).json({ message: "Email no enviado" });

  if (isUserExists) {
    try {
      const msg = {
        to: isUserExists.useremail,
        from: "dfrancoandres@gmail.com",
        subject: "Hola! aqui esta tu apiKey de ArgentAPI",
        html: `Esta key es de uso personal, por favor no compartirla, ${isUserExists._id}`,
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
          return res.json({ message: "Usuario ya existe, se envia nuevamente la ApiKey" });
        })
        .catch((error) => {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Error al enviar el correo electrónico" });
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json("Error del servidor");
    }
  }
  else {
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

  
};
