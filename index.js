const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config({ path: ".env" })
const path = require("path")

const app = express()

//middleware
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: process.env.FRONTEND_URL
}))


//routes
app.use("/api/todo", require("./routes/todoRoute"))


//404
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})


//error
app.use((err, req, res, next) => {
    res.status(400).json({ message: err.message || "something went wrong" })
})


//db
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO  URL CONNECTED");
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})