const express = require("express");
const router = express.Router();

// import users routes
const usersRouter = require("./users");

// import drinks routes
const drinksRoutes = require("./drinks");

// import filters routes
const filtersRoutes = require("./filters");

// use users routes if path with /users
router.use("/users", usersRouter);

// use drinks routes if path with /drinks
router.use("/drinks", drinksRoutes);

// use filters routes if path with /filters
router.use("/filters", filtersRoutes);

module.exports = router;