const express = require("express");
const app = express();
const mailSent = require("./mail");
const moment = require("moment");

const route = app.post("/bookSession", async (req, res) => {
  let parentName = req.body.parentName;
  let parentEmail = req.body.parentEmail;
  let childName = req.body.childName;
  let time = moment(parseInt(req.body.time));

  if (parentEmail && childName && time && parentName) {
    let finalTime =
      time.format("LT") +
      " -- " +
      moment(time).add("1", "hours").format("LT") +
      " on " +
      time.format("DD-MM-YYYY");

    try {
      const response = await mailSent(
        parentName,
        childName,
        finalTime,
        parentEmail
      );
      res.status(200).json({
        message: "Succesfully Book Your Trial Session  !",
      });
    } catch (error) {
      res.status(400).json({
        message: "Unable To Book Your Trial Session",
      });
    }
  } else {
    let msg = "Please Enter -";
    if (!parentName.length) {
      msg += "parent Name,";
    }
    if (!parentEmail.length) {
      msg += "parent Email,";
    }
    if (!childName.length) {
      msg += "child Name,";
    }
    if (!time.length) {
      msg += "Time Slot";
    }
    res.status(400).json({
      message: msg,
    });
  }
});

module.exports = route;
