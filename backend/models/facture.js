//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const factureSchema = mongoose.Schema({

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
    TVA:Number,
    totalPrix:Number,
    cardNumber:String,
    dateCard:String,
    cvvCode:String,
    methodPayment:String,
    date:String,

});
const facture = mongoose.model("Facture", factureSchema);
module.exports = facture;