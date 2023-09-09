import mongoose, { Schema } from "mongoose"


const popularCitiesByProv = new mongoose.Schema ({
    province: {
      type:String,
      require: true,
      trim: true
    },
    cities: {
      type:Object,
      require: true,
      trim: true
    }
}, {
    timestamps:true, 
    versionKey: false // Deshabilitar la generación del campo "__v"
});

export default mongoose.model('popularcitiesbyprov', popularCitiesByProv)