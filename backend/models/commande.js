//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const commandeSchema = mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client"
    },
    employeurId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employeur"
    },
    entrepriseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "entreprise"
    },
    
    qty:Number,
    status: String,


});
const commande = mongoose.model("Commande", commandeSchema);
module.exports = commande;