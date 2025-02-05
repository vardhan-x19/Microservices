const express=require('express')

const app=express();

app.get('/',(req,res)=>{
  res.send('hii this is microservices')
})


app.listen(3000,()=>{
  console.log(`PORT 3000`)
})