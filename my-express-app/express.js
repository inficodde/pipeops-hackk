const express=require('express');
const app=express();
const port=4000;
const bodyParser=require('body-parser');
// Static Files
app.use(express.static(__dirname + "/public"));
//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
//HTTP METHODS
app.get('/', (req,res)=>{
res.sendFile(__dirname +"/public/index.html");
});
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + "/public/contact.html")
});
app.get('/appointment',(req,res)=>{
    res.sendFile(__dirname + "/public/appointment.html")
});
app.get('/admin',(req,res)=>{
    res.sendFile (__dirname + "/public/login.html")
});
app.post('/success',(req,res)=>{
    console.log(req.body)
    res.sendFile(__dirname + '/public/success.html')
})
//Listener
app.listen(port,()=>{
console.log('Server is running on Port 4000')
});