const express = require("express"); 
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");

dotenv.config()

// mongoose.connect(env.MONGO_URL)
// .then(()=>console.log("DB Connection Successfull!")).catch((err)=>{console.log(err)});
mongoose.connect('mongodb+srv://Shivam_Kumar:Shivam2021@cluster0.ddofvew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const connect = mongoose.connection;
connect.on('error',console.error.bind(console, 'MongoDB connection error:'));
connect.once ('open', () => {
console.log( 'Connected to MongoDB');
});



//- isse when I go on localhost3001/api/book toh print good niche
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute); //api me check once
// app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 3001, ()=>{
      console.log("port is listening")
}) 

// app.get("/api/books",(req,res)=>{
//       res.send('good');
// }); 
// app.post("/api/books",(req,res)=>{
//       const username = req.body.username;
//       res.send("Here:" + username);
// });