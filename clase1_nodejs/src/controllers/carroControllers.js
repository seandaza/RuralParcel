const carro = require('../models/carro');

class CarroControllers {

    create(req, res) {
        carro.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    getCarros(req, res) {
        carro.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    update(req, res) {
        let { id, placa, color, modelo } = req.body;
        let obj = {
            placa, color, modelo
        }
        carro.findByIdAndUpdate(id, {
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

module.exports = CarroControllers;