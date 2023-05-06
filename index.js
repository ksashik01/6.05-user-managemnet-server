const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use (cors());
app.use (express.json())


app.get ('/', (req, res)=>{
    res.send ('User Mangemnet server is runnning')
})


const users =[
{id:1,name:'sabana',email:'sabana@gmail.com'},
{id:2,name:'bobita',email:'bobita@gmail.com'},
{id:3,name:'rojina',email:'rojina@gmail.com'},



]

app.get ('/users', (req,res)=>{
    res.send (users)
});

app.post('/users', (req, res) =>{
    console.log (req.body)
    console.log ('Baking server hidding');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push (newUser);
    res.send (newUser)
})


app.listen(port,()=>{
    console.log (`Server is Running on PORT:${port}`)
})