import express from "express";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter";
mongoose.connect(CONNECTION_STRING);

app.use(express.json());
app.use(cors());
TuitsController(app);
HelloController(app);
UserController(app);
let port = process.env.PORT || 4000;
app.listen(port);
console.log("listen to port " + port);
