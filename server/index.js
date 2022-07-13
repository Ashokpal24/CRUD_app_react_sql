const express = require("express");
const mysql = require("mysql");
const cors=require("cors")
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: "password",
    database: "employeedb",
    insecureAuth : true
})
app.post("/create", (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage
    db.query('INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',
    [name,age,country,position,wage],
    (err,results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("values Inserted!")
        }
    });
});
app.get("/employees",(req,res)=>{
    db.query("SELECT*FROM employees",(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
})
app.listen(3000, () => {
    console.log("hell yeahhhh!!");
});