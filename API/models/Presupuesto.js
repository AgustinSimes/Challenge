const mongoose = require('mongoose')
const Schema= mongoose.Schema;

const presupuestosSchema= new Schema({
    concepto: {
        type: String,
        trim: true,
    },
    monto: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        trim: true,
    }
    
    
    
});

module.exports= mongoose.model('Presupuesto', presupuestosSchema);