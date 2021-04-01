import express from "express";
import Player from "../models/players.model.js";

const router = express.Router();

// GET REQUEST FOR ALL PLAYERS, WILL CHANGE TO LINK TO A USER LATER
router.route("/").get((req, res) => {
  Player.find()
    .then((players) => res.json(players))
    .catch((err) => res.status(400).json("Error: " + err));
});

// POST REQUEST
router.route("/").post((req, res) => {
  const userName = req.body.userName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const jerseyNum = req.body.jerseyNum;

  const newPlayer = new Player({
    userName,
    firstName,
    lastName,
    jerseyNum,
  });

  newPlayer
    .save()
    .then(() => res.json("Player add successful!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// DELETE REQUEST
router.route("/:id").delete((req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id + " successfully deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});
// UPDATE REQUEST
router.route("/update/:id").post((req, res) => {
  Player.findById(req.params.id)
    .then((player) => {
      player.userName = req.body.userName;
      player.firstName = req.body.firstName;
      player.lastName = req.body.lastName;
      player.jerseyNum = req.body.jerseyNum;

      player
        .save()
        .then(() =>
          res.json("Player with ID" + req.params.id + " sucessfully updated!")
        )
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch(err);
});

//DELETE REQUEST

export default router;
