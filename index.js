import express from express;

const port = 8000;
const app= express();

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("welcome to azure ci/cd")
});
app.get("/about",(req,res)=>{
  res.json({
    message:"This is an azure test",
    developer:"Deepu Ajay"
  })
});