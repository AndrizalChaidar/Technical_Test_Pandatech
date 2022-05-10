const express = require("express");
const SearchController = require("../controlllers/SearchController");
const router = express.Router();

router.get("/", SearchController.search);

module.exports = router;
