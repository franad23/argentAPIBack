import userRequestsUserTest from '../model/userRequests.model.js';
import bcrypt from 'bcryptjs'

export const postUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body
  const userapikey = req.userapikey._id
  try {
    const userFound = await userRequestsUserTest.findOne({ email });
    if (userFound) return res.status(400).json({ message: 'Usuario ya existe' });
    const passwordEncrypt = await bcrypt.hash(password, 10);
    const newUser = new userRequestsUserTest({ 
      firstname: firstname, 
      lastname: lastname, 
      email: email, 
      password: passwordEncrypt, 
      userapikey: userapikey
    });

      const userSaved = await newUser.save();
      res.status(201).json({ message: 'Usuario creado', user: userSaved });
    }
  
  catch (error) {
    res.status(500).json({ message: error.message })
  }

}