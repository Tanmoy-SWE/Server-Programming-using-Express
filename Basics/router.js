const express = require("express");
const app = express();
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const { createCV } = require("./controllers/CvController");

const fs = require("fs");

router.get("/", getCV);

router.get("/createCV", createCV)

module.exports = router;
