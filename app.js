const express=require('express');
const morgan=require('morgan');
const app=express();

app.use(morgan('dev'));
app.get('/',(req,res)=>{
  setTimeout(()=>{
    res.send('hii this is microservices')
  },3000)
})



app.listen(3003,()=>{
  console.log(`PORT 3003`)
})