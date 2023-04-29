import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb://harman:Harman@ac-j7m0gk2-shard-00-00.zkbyytc.mongodb.net:27017,ac-j7m0gk2-shard-00-01.zkbyytc.mongodb.net:27017,ac-j7m0gk2-shard-00-02.zkbyytc.mongodb.net:27017/?ssl=true&replicaSet=atlas-hnkae7-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

const http = require('http');
const server = http.createServer(app);
server.listen(PORT);
