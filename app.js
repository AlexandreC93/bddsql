require("reflect-metadata");
const express = require("express");

const logger = require("./src/middlewares/logger");
const errorHandler = require("./src/middlewares/error-handler");

const userRoutes = require("./src/routes/user.routes");
const todoRoutes = require("./src/routes/todo.routes");

const app = express();

app.use(express.json()); 
app.use(logger);

app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route non trouvée" });
});

app.use(errorHandler);

module.exports = app;