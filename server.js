const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");

require('dotenv').config()
const app = express();

const userRouter = require("./src/routes/user.routes");
const designationRouter = require("./src/routes/designation.routes");
const departmentRouter = require("./src/routes/department.routes");
const employeeRouter = require("./src/routes/employee.routes");
const taskRouter = require("./src/routes/task.routes");
const payrollRouter = require("./src/routes/payroll.routes");
const leaveRouter = require("./src/routes/leave.routes");
const attendanceRouter = require("./src/routes/attendance.routes");
const announcementRouter = require("./src/routes/announcement.routes");


//----------------MIDDLEWARES--------------------
app.use(morgan('dev'));
const verifyjwt = require('./src/middleware/verifyjwt'); // Import the verifyjwt middleware
const { checkToken } = require("./src/middleware/auth");
// parse requests of content-type - application/json
app.use(express.json());
// Enable requests from origins
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST","GET","DELETE","UPDATE","PUT","PATCH"],
    credentials: true
}));
app.use(cookieParser())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



//------------------SETTINGS----------------
const PORT = process.env.PORT || 4000; // set port, listen for requests

//------------------ROUTES------------------
app.use("/api/users", userRouter);
app.use("/api/designation", designationRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/task", taskRouter);
app.use("/api/payroll", payrollRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/announcement", announcementRouter);


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

app.get('/checkauth', verifyjwt, (req, res) => {
    return res.json({ message: "Authenticated", username: req.username, success: true });
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HRIS application." });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
