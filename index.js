const mongoose = require("mongoose");
const express = require("express")

const app = express()

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE,{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("error in DB connection");
  });


app.get("/",(req,res)=>{
    res.json({
        message: "you are visiting root route"
    })
})

app.listen(8000,()=>{
    console.log("port is connected with 8000")
})