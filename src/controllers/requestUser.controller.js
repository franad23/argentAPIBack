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
    res.status(201).json({ 
      message: "Peticion POST enviada",
      postRequestSaved
    });
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

export const DeleteRequest = async (req, res) => {
  const {id} = req.params;
  const userapikey = req.userapikey._id;

  if (!userapikey) {
    return res.status(400).json({ message: "No se proporciono ApiKey" });
  }
  if (!id) {
    return res.status(400).json({ message: "No se proporciono id" });
  }
  try {
    const idFound = await requestsUserModel.findById(id);
    if (!idFound) return res.status(400).json({ message: "id no encontrado" })
    const getRequest = await requestsUserModel.findByIdAndDelete(id);
    res.status(201).json({ message: "Peticion DELETE enviada"});
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }

}

export const PutRequest = async (req, res) => {
  const {id} = req.params;
  const {userobject} = req.body;
  const userapikey = req.userapikey._id;

  if (!userapikey) {
    return res.status(400).json({ message: "No se proporciono ApiKey" });
  }
  if (!id) {
    return res.status(400).json({ message: "No se proporciono id" });
  }
  if (!userobject) {
    return res.status(400).json({ message: "Datos incompletos" });
  }
  try {
    const idFound = await requestsUserModel.findById(id);
    if (!idFound) return res.status(400).json({ message: "id no encontrado" })
    const updateRequest = await requestsUserModel.findByIdAndUpdate(id, {userobject: userobject});
    res.status(201).json({ 
      message: "Peticion PUT enviada",
      updateRequest
    });
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }


}