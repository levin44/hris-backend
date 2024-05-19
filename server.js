const express = require("express");
const cors = require("cors");
// import express from 'express'
// import cors from 'cors'

const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const userRouter = require("./src/routes/user.routes");

//middleware
const verifyjwt = require('./src/middleware/verifyjwt'); // Import the verifyjwt middleware

require('dotenv').config()

const salt =10;
const db = require("./src/models");
const app = express();



// parse requests of content-type - application/json
app.use(express.json());


// Enable requests from all origins
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST","GET"],
    credentials: true
}));

app.use(cookieParser())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

const sqldb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flexy_hris'
});


const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "you are not authenticated" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return req.json({ Error: "token is incorrect" });
            } else {
                req.name = decoded.name;
                req.role = decoded.role;
                next();
            }
        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({ Status: "Success", name: req.name,role:req.role });
})


app.get('/checkauth', verifyjwt, (req, res) => {
    return res.json({ message: "Authenticated", username: req.username, success: true });
});

app.post('/signup',(req,res)=>{
    //delete this before production !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log('username',req.body.username);
    console.log('password',req.body.password);

    const sql = "INSERT INTO login (`username`, `password`) VALUES (?, ?)";

    //hash password
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return req.json({ Error: "Error when hashing password" });
        const values = [
            req.body.username,
            hash
        ]
  
        sqldb.query(sql,values,(err,result) =>{
            if(err) return res.json({Message: "Error saving to db-signup"});
            return res.json({Status: "Success"});
        })
    })
}); 


// app.post('/login', (req, res) => {
//     const sql = 'SELECT * FROM login WHERE username = ?';
//     sqldb.query(sql, [req.body.username], (err, data) => {
//         if (err) return res.json({ Error: "Login error in server" });
//         if (data.length > 0) {
//             bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {

//                 // console.log('Entered password:', req.body.password.toString());
//                 // console.log('Stored hashed password:', data[0].password);
//                 // console.log('Password comparison result:', response);

//                 if (err) return res.json({ Error: "password compare error" });
//                 if (response) {
//                     const name = data[0].username;
//                     const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
//                     res.cookie('token', token, { sameSite: 'none', secure: true });

//                     return res.json({ Status: "Success" });
//                 } else {
//                     return res.json({ Error: "password does not match" });


//                 }
//             })
//         } else {
//             return res.json({ Error: "no username existed" });
//         }
//     })
// })


app.post('/login',(req,res) => {
    const sql = "SELECT * FROM login WHERE username = ?";
    sqldb.query(sql, [req.body.username,], (err,data)=>{
        console.log('data',data)
        if (err) return res.json({Error: "Error username in server"});
        if(data.length>0){
            bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
                if(err) return res.json({Error: "Password compare error"});
                if(response){
                    const name = data[0].username;
                    const role = data[0].role;

                    const token = jwt.sign({name,role}, "jwt-secret-key",{expiresIn: '1d'});
                    // res.cookie('token', token, { sameSite: 'none', secure: true });

                    return res.json({Login: true, role: role,token});
                } else {
                    return res.json({Error: "password not matched"});
                }
            })
            // return res.json({Login: true})
        }else{
            return res.json({Login: false, Error: "No email existed"})
        }
    })
})

//Log out
app.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

// db.sequelize.sync()
//   .then(() => {
//     console.log("***Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hris application." });
});

//routes
// require("./src/routes/tutorial.routes")(app);

// (async () => {
//     await db.sequelize.sync({ alter: true });
// })();

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
