const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const morgan = require("morgan");

require('dotenv').config()
const app = express();

const userRouter = require("./src/routes/user.routes");
const designationRouter = require("./src/routes/designation.routes");
const departmentRouter = require("./src/routes/department.routes");
const employeeRouter = require("./src/routes/employee.routes");
const taskRouter = require("./src/routes/task.routes");
const payrollRouter = require("./src/routes/payroll.routes");


//----------------MIDDLEWARES--------------------
app.use(morgan('dev'));
const verifyjwt = require('./src/middleware/verifyjwt'); // Import the verifyjwt middleware
const { checkToken } = require("./src/middleware/auth");
// parse requests of content-type - application/json
app.use(express.json());
// Enable requests from all origins
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST","GET","DELETE","UPDATE","PUT"],
    credentials: true
}));
app.use(cookieParser())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



//------------------SETTINGS----------------
const PORT = process.env.PORT || 4000; // set port, listen for requests
// const salt =10;
// const sqldb = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'flexy_hris'
// });

//------------------ROUTES------------------
app.use("/api/users", userRouter);
app.use("/api/designation", designationRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/task", taskRouter);
app.use("/api/payroll", payrollRouter);



const verifyUser = (req, res, next) => {
    let token = req.get("authorization");
    if (!token) {
        return res.status(401).json({ Error: "You are not authenticated" });
    } else {
        // Bearer token format handling
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ Error: "Token is incorrect" });
            } else {
                req.empId = decoded.empId;
                req.role = decoded.role;
                next();
            }
        });
    }
};

app.get('/getuser', verifyUser, (req, res) => {
    return res.json({ Status: "Success", empId: req.empId, role: req.role });
});

// app.get('/checkauth', verifyjwt, (req, res) => {
//     return res.json({ message: "Authenticated", username: req.username, success: true });
// });

// app.get('/checkauth', checkToken, (req, res) => {
//     return res.json({ message: "Authenticated", success: true, data: req.user });
// });

// app.post('/signup',(req,res)=>{
//     //delete this before production !!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     console.log('username',req.body.username);
//     console.log('password',req.body.password);

//     const sql = "INSERT INTO login (`username`, `password`) VALUES (?, ?)";

//     //hash password
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//         if (err) return req.json({ Error: "Error when hashing password" });
//         const values = [
//             req.body.username,
//             hash
//         ]
  
//         sqldb.query(sql,values,(err,result) =>{
//             if(err) return res.json({Message: "Error saving to db-signup"});
//             return res.json({Status: "Success"});
//         })
//     })
// }); 



// app.post('/login',(req,res) => {
//     const sql = "SELECT * FROM login WHERE username = ?";
//     sqldb.query(sql, [req.body.username,], (err,data)=>{
//         console.log('data',data)
//         if (err) return res.json({Error: "Error username in server"});
//         if(data.length>0){
//             bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
//                 if(err) return res.json({Error: "Password compare error"});
//                 if(response){
//                     const name = data[0].username;
//                     const role = data[0].role;

//                     const token = jwt.sign({name,role}, "jwt-secret-key",{expiresIn: '1d'});
//                     // res.cookie('token', token, { sameSite: 'none', secure: true });

//                     return res.json({Login: true, role: role,token});
//                 } else {
//                     return res.json({Error: "password not matched"});
//                 }
//             })
//             // return res.json({Login: true})
//         }else{
//             return res.json({Login: false, Error: "No email existed"})
//         }
//     })
// })





// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hris application." });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
