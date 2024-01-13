//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const reclamationSchema = mongoose.Schema({
    factureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "facture"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client"
    },
    entrepriseId:String,
    probleme:String,
    qty:Number,
    text:String,
    status:String

});
const reclamation = mongoose.model("Reclamation", reclamationSchema);
module.exports = reclamation;