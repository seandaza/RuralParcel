const express = require('express');
const territoryControllers = require('../controllers/territoryControllers');

class territoryRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objTerritoryC = new territoryControllers();
        this.router.get("/territory", objTerritoryC.getTerritories);
        this.router.post("/territory", objTerritoryC.create);
        this.router.put("/territory", objTerritoryC.update);
    }
}

module.exports = territoryRouter;