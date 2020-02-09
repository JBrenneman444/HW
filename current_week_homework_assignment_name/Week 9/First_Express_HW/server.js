const express = require('express')
const app = express()
var port = 3000

app.get("/greeting", (req, res)=>{
    res.send("hello stranger")
})

app.get('/greeting/:name', (req, res)=>{
    res.send("hello " + req.params.name)
})

// app.get("/calc/:num1/:num2", (req, res)=>{    
//     console.log(req.query)
//     res.send("the sum is " + sum);
// })

// app.get('/someroute', (req, res) => {
//     console.log('req.query: ', req.query);
//     res.send('someroute accessed');
//   });

//   app.get('/calcquery/:num1/:num2', (req, res) => {

//     console.log(req.query)
//     var number1 = Number(req.params.num1)
//     var number2 = Number(req.params.num2)
//     var sum = number1 + number2
//     res.send("the sum is " + sum);

// });

// app.get('/awesome', (req, res) => {
//     res.send(`
//       <h1>Plants are awesome!</h1>
//       <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//     `);
//   });
  
//   app.get('/hello/:firstname/:lastname', (req, res) => {
//       console.log(req.params);
//       res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
//   })

app.listen(port, () => {
    console.log('app is running on port: ', port);
})
