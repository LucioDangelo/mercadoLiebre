const express = require("express");
const app = express();

app.use(express.static("public"));
const puerto = 3000

app.listen(process.env.PORT || puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});

app.get("/", (req , res)=>{
res.sendFile(__dirname + "/views/index.html")
}); 

app.get("/login", (req , res)=>{
res.sendFile(__dirname + "/views/login.html")
}); 


app.get("/register", (req , res)=>{
res.sendFile(__dirname + "/views/register.html")
}); 


