const mongoose= require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;
mongoose.connect("mongodb+srv://AshishKhati:Akg24072003@cluster0.tncnvv1.mongodb.net/BankingSystem?retryWrites=true&w=majority" ,{
    useNewUrlParser:true,
    
}).then(()=>{
    console.log("Connection successfully established")
}).catch((err)=>console.log('no connection',err))