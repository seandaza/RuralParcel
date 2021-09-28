const mongoose = require('mongoose');
const schema = mongoose.Schema;

var personSchema = new schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    },
    email: {
        type: String
    }
},{
    collection: 'persons'
});

module.exports = mongoose.model('Person', personSchema);