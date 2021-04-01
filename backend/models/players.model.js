import mongoose from "mongoose";

//const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  jerseyNum: { type: Number, required: true },
});

const Player = mongoose.model("Player", playerSchema);

export default Player;
