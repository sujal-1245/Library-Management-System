import mongoose from 'mongoose'

const connectDB = async ()=>{
   try {
      const todoDB = await mongoose.connect(process.env.MONGO_URI)
   console.log(firstdb.connection.host)}
   catch(error){
    console.error(error?.message)
   }
}

export default connectDB