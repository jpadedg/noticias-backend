const mongoose = require('../../config/mongo.js');
const {Schema} = mongoose;

const usuarioSchema = new Schema (
    {
    nome: String,
    email: String,
    senha: String,
    },
    {
        timestamps: true,
    }
)

const usuarioModel = mongoose.model('usuarios', usuarioSchema);

module.exports  = usuarioModel;