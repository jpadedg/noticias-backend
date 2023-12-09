const mongoose = require('../../config/mongo.js');
const {Schema} = mongoose;

const noticiaSchema = new Schema (
    {
    titulo: String,
    imagem: String,
    texto: String,
    categoria: String
    },
    {
        timestamps: true,
    }
)

const noticiaModel = mongoose.model('noticias', noticiaSchema);

module.exports =  noticiaModel;