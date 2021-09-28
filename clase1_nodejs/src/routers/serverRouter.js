const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
        this.router.get("/users", objServerC.getAllUsers);
        this.router.get("/users/:id", objServerC.getUserById);
        this.router.post("/users", objServerC.register);
        this.router.put("/users", objServerC.update);
        this.router.delete("/users", objServerC.delete);
    }
}

exports.default = ServerRouter;