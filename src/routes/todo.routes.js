const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const asyncHandler = require("../utils/asyncHandler");

router.post("/", asyncHandler(todoController.create));

module.exports = router;