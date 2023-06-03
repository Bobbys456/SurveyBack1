const express=require('express');
const app=express();
const PORT=5000;

const cors = require('cors');
app.use(cors());

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

app.get('/submit',(req,res)=>{
    
  console.log(req.query.data);
  console.log(req.query.email);
  
    res.send(true);
  
})

app.get('/',(req,res)=>{
    
    console.log(req.query.email);
    if(emails.includes(req.query.email)){


      //fix this it was for testing purposes
      res.send(true);
      console.log('no!');

    } else {
      emails.push(req.query.email);
      
      res.send(true);
      console.log('Email!');
    }
    
})

app.get('/questions',(req,res)=>{
  console.log("Questions requested...")
    
  const questions = [
    '1',
    '2',
    '3',
    '4',
    ['a','b','c','d'],
    ['a','f','c','d'],
    ['a','b','g','d'],
    ['p','b','pancake','c','d']
  ];
 
  
  res.send(questions);
  
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


