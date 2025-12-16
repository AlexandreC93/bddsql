const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const asyncHandler = require("../utils/asyncHandler");


router.post("/", asyncHandler(userController.create));
router.get("/", asyncHandler(userController.getAll));
router.get("/pending", asyncHandler(userController.getPending)); 

module.exports = router;