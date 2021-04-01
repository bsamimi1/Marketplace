import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import playersRouter from "./routes/players.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded());

app.use("/players", playersRouter);

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message, "auth problem plz fix"));

mongoose.set("useFindAndModify", false);
