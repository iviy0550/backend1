const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();

const express = require("express");
const dbConnect = require("./config/db-connect");
const petRouter = require("./routes/pet-routes");
const userRouter = require("./routes/user-routes");

const app = express();

app.get("/test", (req, res) => {
  res.send("Server is working");
});

app.use(express.json());

app.use("/api/v1/pets", petRouter);
app.use("/api/v1/users", userRouter);

dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});