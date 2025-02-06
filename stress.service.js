const express=require('express');
const morgan=require('morgan');
const app=express();

app.use(morgan('dev'));
app.get('/stress',(req,res)=>{
  setTimeout(()=>{
    res.send('hii this is stress testing')
  },2000)
})

app.listen(3001,()=>{
  console.log(`PORT 3001`);
})