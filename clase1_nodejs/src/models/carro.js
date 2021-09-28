const mongoose = require('mongoose');
const schema = mongoose.Schema;

const carroSchema = new schema({
    placa: {
        type: String
    },
    color: {
        type: String
    },
    modelo: {
        type: String
    }
}, {
    collection: "carros"
});

module.exports = mongoose.model('Carro', carroSchema);