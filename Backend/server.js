const express = requrie("express");
const app = express();
const Port =5000;

app.get("/",(req,res)=>{
    res.json([{name:"jeetu",Phone:6864979547}])
})
app.listen(Port,()=>{
    console.log(`serever is run https://localhost:${Port}`);
    
})