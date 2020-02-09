const express = require('express')
const app = express()
var port = 3000

app.get("/", (req, res)=>{
    res.send("root")
})

app.get("/greeting", (req, res)=>{
    res.send("hello stranger")
})

app.get('/greeting/:name', (req, res)=>{
    res.send("hello " + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    console.log(req.query)
    var total = Number(req.params.total)
    var tipPercentage = Number(req.params.tipPercentage)
    var tipAmount = total * (.01*req.params.tipPercentage)
                    // 100 * (.01 * 20)
    res.send("the tip amount is " + tipAmount);
})

app.get('/magic/:phrase',(req,res)=>{
    var ballResponses = ["It is certain",
     "It is decidedly so",
      "Without a doubt",
       "Yes definitely",
       "You may rely on it",
        "As I see it yes",
         "Most likely",
          "Outlook good",
          "Yes",
           "Signs point to yes",
            "Reply hazy try again",
             "Ask again later",
             "Better not tell you now",
              "Cannot predict now",
               "Concentrate and ask again",
               "Don't count on it",
                "My reply is no",
                 "My sources say no",
                 "Outlook not so good",
                  "Very doubtful"]
    var phrase = req.params.phrase
    res.send(`${phrase}<br><h1>${ballResponses[Math.floor(Math.random() * (ballResponses.length + 1))]}</h1>`)
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
