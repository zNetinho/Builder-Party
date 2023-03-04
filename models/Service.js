const mongoose = require('mongoose')

const { Schema } = mongoose;

const serviceSchema = new Schema({
    nomeDoServico: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    precoServico: {
        type: Number,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema)

module.exports = {
    Service,
    serviceSchema,
}