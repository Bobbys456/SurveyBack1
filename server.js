const express=require('express');
const app=express();
const PORT=5000;

const cors = require('cors');
app.use(cors());

'ffff'
/*
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'roost',
  password: 'cornuc',
  database: 'emails'
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
*/ 

const emails = new Array(); 


app.get('/',(req,res)=>{
    
    console.log(req.query.email);
    if(emails.includes(req.query.email)){
      res.send(false);
      console.log('no!');

    } else {
      emails.push(req.query.email);
      res.send(true);
      console.log('Email!');
    }
    
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})