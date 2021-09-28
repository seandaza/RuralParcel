const Territory = require('../models/territory');

class territoryControllers {

    create(req, res) {
        Territory.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    getTerritories(req, res) {
        Territory.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    update(req, res) {
        let { id, numberHectares, locationTerritory, ownerName, irrigationSystems, Descriptions, Abailability } = req.body;
        let obj = {
            numberHectares, locationTerritory, ownerName, irrigationSystems, Descriptions, Abailability
        }
        Territory.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = territoryControllers;