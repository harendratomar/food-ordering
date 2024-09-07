import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose
      .connect(
        "mongodb+srv://harendratomar7440:Harendra123@cluster0.vyt9vxo.mongodb.net/food-del"
      )
      .then(() => console.log("DB Connected"));
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.