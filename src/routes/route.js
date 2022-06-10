const express = require('express');
const router = express.Router();

const Controller = require("../controllers/Controller")

router.post("/createAuthor", Controller.createAuthor)
router.post("/createPublisher", Controller.createPublisher)
router.post("/createBook", Controller.createBook)
router.get("/listAllBooks", Controller.listAllBooks)
router.put("/updateBooks", Controller.updateBooks)

module.exports = router; 