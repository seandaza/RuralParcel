const express = require('express');
const CarroControllers = require('../controllers/carroControllers');

class CarroRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objCarroC = new CarroControllers();
        this.router.get("/carro", objCarroC.getCarros);
        this.router.post("/carro", objCarroC.create);
        this.router.put("/carro", objCarroC.update);
    }
}

module.exports = CarroRouter;