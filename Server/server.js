const request=require('express')
const app=express()

app.get("/api", (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userthree"]})
})

app.listen(5000, ()=>{console.log("Server started on port 5000")})