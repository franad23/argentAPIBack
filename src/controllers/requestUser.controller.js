import requestsUserModel from "../model/requestsUser.model.js";

export const PostRequest = async (req, res) => {
  const {userobject} = req.body;
  const userapikey = req.userapikey._id;

  if (!userapikey) {
    return res.status(400).json({ message: "No se proporciono ApiKey" });
  }
  if (!userobject) {
    return res.status(400).json({ message: "Datos incompletos" });
  }
  try {
    const newPostRequest = new requestsUserModel({
      userapikey: userapikey,
      userobject: userobject,
      typerequest: "POST"
    });
    const postRequestSaved = await newPostRequest.save();
    res.status(201).json({ message: "Peticion POST enviada"});
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const GetRequest = async (req, res) => {
  const userapikey = req.userapikey._id;

  if (!userapikey) {
    return res.status(400).json({ message: "No se proporciono ApiKey" });
  }
  try {
    const getRequest = await requestsUserModel.find({userapikey: userapikey});
    res.status(201).json(getRequest);
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}
