require("dotenv").config();
const express = require("express")
const connectDB = require("./config/database")
const config = require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors")
const app = express();

const PORT = config.port;
connectDB();

//Middleware
app.use(express.json()) //parse incoming request in json format

//Root Endpoint
app.get("/", (req, res) => {
    res.json({message: "Hello from POS Server"});
})

//Other Endpoint
app.use("/api/user", require("./routes/userRoute"))

// Global Error Handler
app.use(globalErrorHandler);

//Server
app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`);
})