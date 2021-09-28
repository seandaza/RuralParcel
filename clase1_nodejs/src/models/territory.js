
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var territorySchema=new schema({

    numberHectares:{
        type: Number
    },
    locationTerritory:{
        type: String
    },
    ownerName:{
        type: String
    },
    irrigationSystems:{
        type: String
    },
    Descriptions:{
        type: String
    },
    Abailability:{
        type: String
    }
},{
    collection: 'territories'
});
module.exports = mongoose.model('territory',territorySchema);