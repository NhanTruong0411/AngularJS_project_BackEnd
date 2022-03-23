const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
   res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
   res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
   res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
   res.status(200).send("Moderator Content.");
};
exports.getAllUser = (req, res) => {
   User.find({}, (err, users) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send(users);
      return users;
   });
   // res.status(200).send("asdasdasdasdasd.");
};
exports.removeUser = (req, res) => {
   User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send({ message: "User deleted successfully!" });
      return;
   });
};
exports.updateUser = (req, res) => {
   User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send(user);
      return;
   });
};