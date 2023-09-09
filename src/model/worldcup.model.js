import mongoose, { Schema } from "mongoose";

const worldcupSchema = new mongoose.Schema ({
  year: {
    type: Number,
    require: true
  },
  hostCountry: {
    type: String,
    require: true
  },
  finalMath: {
    type: Object,
    require: true
  },
  matches: {
    type: Object,
    require: true
  },
  players: {
    type: Object,
    require: true
  }, 
  dt: {
    type: Object, 
    require: true
  }
}, {
  timestamps:true, 
  versionKey: false // Deshabilitar la generación del campo "__v"
})

export default mongoose.model('worldcup', worldcupSchema)