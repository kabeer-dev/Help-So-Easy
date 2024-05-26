require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const v1 = require("./routes/v1");
const fs = require("fs");
var multer  = require('multer');
var upload = multer({ dest: 'upload/'})
const session = require("express-session");
const cookieParser = require("cookie-parser");

const uploadExpress = require("express-fileupload");
// Loading socket io
require("./socket.io/socket.io").initSocketIO(server);

var corsOptions = {
  origin: [
    "https://rn357986421.helpsoeasy.com",
    "https://staging.helpsoeasy.com",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://help-so-easy-admin.s3-website.ca-central-1.amazonaws.com"
  ],
};

app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// parse requests of content-type - multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// Configure express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);

// Configure express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);

// cookie parser middleware
app.use(cookieParser());
app.use(uploadExpress())
app.use(express.static('public'));

// Api routes
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/v1", v1);

// Swagger
const { swaggerServe, swaggerSetup } = require("./swagger/v1/index");
app.use("/api-docs", swaggerServe, swaggerSetup);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
