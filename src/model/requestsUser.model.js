import mongoose, { Schema } from "mongoose"

const requestUser = new mongoose.Schema ({
  userapikey: {
    type: String,
    require: true
  },
  userobject:{
    type: Object,
    require: true
  },
  typerequest: {
    type: String,
    require: true
  }
}, {
  timestamps:true, 
  versionKey: false // Deshabilitar la generación del campo "__v"
})

export default mongoose.model('requestuser', requestUser)