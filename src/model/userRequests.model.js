import mongoose, { Schema } from "mongoose"

const userRequestsUserTest = new mongoose.Schema ({
  userapikey: {
    type: String,
    require: true
  },
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String, 
    require: true
  },
  password: {
    type: String, 
    require: true
  }
})

export default mongoose.model('userrequestsusertest', userRequestsUserTest)