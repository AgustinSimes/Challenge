const express= require('express');
const router = express.Router();
const presupuestoController= require('../controllers/presupuestoController');

module.exports= function() { 

    //Agrega nuevas aplicaciones via post
    router.post('/presupuestos',
        presupuestoController.nuevoPresupuesto
    );

    //Obtener todos los registros de la bd
    router.get('/presupuestos',
    presupuestoController.obtenerPresupuestos
    );

    //Obtiene un presupuesto en especifico (ID)
    router.get('/presupuestos/:id',
    presupuestoController.obtenerPresupuestos
    );

    //Actualizar un registro por su id
    router.put('/presupuestos/:id',
    presupuestoController.actualizarPresupuesto
    );

    //Elimina un registro por su id
    router.delete('/presupuestos/:id',
    presupuestoController.eliminarPresupuesto
    )


    return router;
}