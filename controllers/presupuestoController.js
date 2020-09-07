const Presupuesto= require('../models/Presupuesto');

//Cuando se cree una nueva aplicacion
exports.nuevoPresupuesto = async(req, res, next) => {
    //crear objeto de aplicacion con datos de req.body
    const presupuesto = new Presupuesto(req.body);

    try {
        await presupuesto.save();
        res.json({mensaje: 'El presupuesto se agregó correctamente'});
        
    } catch (error) {
        console.log(error);
        next();
    }

}

//Obtiene todos los presupuestos
exports.obtenerPresupuestos = async (req, res, next) => {
    try {
        const presupuestos= await Presupuesto.find({});
        res.json(presupuestos);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtiene un paciente en especifico por Id
exports.obtenerPresupuesto = async (req, res, next) => {
    try {
        const presupuesto= await Presupuesto.findById(req.params.id);
        res.json(presupuesto);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualiza un registro por su id
exports.actualizarPresupuesto = async(req, res, next) => {
    try {
        const presupuesto= await Presupuesto.findOneAndUpdate({_id : req.params.id}, req.body, {new: true});
        res.json(presupuesto);
        
    } catch (error) {
        console.log(error);
        next();
    }
}

//Elimina un registro por su id
exports.eliminarPresupuesto =  async(req, res, next) => {
    try {
        await Presupuesto.findByIdAndDelete({_id : req.params._id});
        res.json({mensaje : 'El presupuesto fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}