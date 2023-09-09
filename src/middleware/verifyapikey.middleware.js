import usersapikeyModel from "../model/usersapikey.model.js";


export const verifyapikey = async (req, res, next) => {
  const apikey = req.headers.apikey;
  
  if (!apikey) return res.status(401).json({ message: "No se envió la APIKey en los headers" });
  
  try {
    const userapikey = await usersapikeyModel.findById(apikey);
    
    if (!userapikey) {
      return res.status(401).json({ message: "APIKey no válida" });
    }

    // Asigna la clave encontrada a req.userapikey
    req.userapikey = userapikey;

    // Llama a la siguiente función en la cadena de middleware
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al verificar la APIKey" });
  }
}
