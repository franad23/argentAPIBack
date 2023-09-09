import mongoose, { Schema } from "mongoose"


const userapikey = new mongoose.Schema ({
    useremail: {
      type:String,
      require: true,
      trim: true
    }
}, {
    timestamps:true, 
    versionKey: false // Deshabilitar la generación del campo "__v"
});

export default mongoose.model('Userapikey', userapikey)