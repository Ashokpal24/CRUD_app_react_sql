const express = require("express");
const mysql = require("mysql");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: "password",
    database: "employeedb",
    insecureAuth: true
})
app.post("/create", (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage
    db.query('INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',
        [name, age, country, position, wage],
        (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("values Inserted!")
            }
        });
});
app.get("/employees", (req, res) => {
    db.query("SELECT*FROM employees", (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(results);
        }
    })
});
app.put("/updateWage", (req, res) => {
    const wage=req.body.wage;
    const id=req.body.id;
    db.query("UPDATE employees SET wage=? WHERE id=?", [wage, id], (err, results) => {
        if (err) {
            console.log(err);

        }
        else {
            res.send(results);
        }
    })
});
app.put("/updateName", (req, res) => {
    const name=req.body.name;
    const id=req.body.id;
    db.query("UPDATE employees SET name=? WHERE id=?", [name, id], (err, results) => {
        if (err) {
            console.log(err);

        }
        else {
            res.send(results);
        }
    })
})
app.put("/updateCountry", (req, res) => {
    const country=req.body.country;
    const id=req.body.id;
    db.query("UPDATE employees SET country=? WHERE id=?", [country, id], (err, results) => {
        if (err) {
            console.log(err);

        }
        else {
            res.send(results);
        }
    })
})
app.put("/updatePosition", (req, res) => {
    const position=req.body.position;
    const id=req.body.id
    db.query("UPDATE employees SET position=? WHERE id=?", [position, id], (err, results) => {
        if (err) {
            console.log(err);

        }
        else {
            res.send(results);
        }
    })
})
app.put("/updateAge", (req, res) => {
    const age=req.body.age
    const id=req.body.id
    db.query("UPDATE employees SET age=? WHERE id=?", [age, id], (err, results) => {
        if (err) {
            console.log(err);

        }
        else {
            res.send(results);
        }
    })
});
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    db.query("DELETE FROM employees WHERE id=?",id, (err, results) => {
        if (err) {
            console.log(err);

        }
        else {
            res.send(results);
        }
    })
});

app.listen(3000, () => {
    console.log("hell yeahhhh!!");
});