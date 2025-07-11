import express from 'express'

const app = express()

//route handlers

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/modules',(req,res) =>{
    res.send('welcome to modules section')
})

app.listen(3000)