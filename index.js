import express from 'express'
const PORT = 8080 || 3000
const app = express()
import userRouter from './router/userRouter.js'
import bodyParser from 'body-parser'

app.use(bodyParser.json()); //handles req.body values

app.get("/",(req, res)=>{
    res.send(`<h1>hallo sql world</h1> `)
})

app.use("/users", userRouter)


app.listen(PORT, ()=>console.log(`server listen to port ${PORT}`))