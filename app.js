const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/home', function (req, res) {
//     res.send('Hello Home')
//   })
  
// app.get('/about', function (req, res) {
//     res.send('Hello About')
//   })
  
// app.get('/contact', function (req, res) {
//     res.send('Hello Contact')
//   })
  
  app.get('/home', function (req, res) {
      res.sendFile(__dirname+'/views/home.html')
    })
    
  app.get('/about', function (req, res) {
    res.sendFile(__dirname+'/views/about.html')
    })
    
  app.get('/contact', function (req, res) {
    res.sendFile(__dirname+'/views/contact.html')
    })
   app.get('*', function (req, res) {
    res.send('404 Not Found')
  })
  
app.listen(3000)
console.log("Server is started on http://127.0.0.1:3000");