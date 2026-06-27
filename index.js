import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT || 5000


app.get("/",(req,res)=>{
  res.send("Hello World")
})
app.get("/about",(req,res)=>{
  res.send("Welcome to about page")
})
app.get("/contact",(req,res)=>{
  res.send("welcome to contact page")
})
app.get("/home",(req,res)=>{
  res.send("welcome to home page automatic cicd pipeline is working fine")
})

app.listen(port,()=>{
  console.log(`Server running at port ${port}`)
})