import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import clienteAxios from '../config/axios';

const NuevoPresupuesto = (props) => {

    // Generar state como objeto
    const [presupuesto, guardarPresupuesto] = useState({
        concepto: '',
        monto: '',
        fecha: '',
        tipo: '',
    });

    // Lea los datos del formulario
    const actualizarState = e => {
        guardarPresupuesto({
            ...presupuesto,
            [e.target.name] : e.target.value
        })
    }

    // Enviar una petición a la API
    const crearNuevoPresupuesto = e => {
        e.preventDefault();

        // enviar la petición por axios
        clienteAxios.post('/presupuestos', presupuesto)
            .then(respuesta => {
                console.log(respuesta);

                props.guardarPresupuesto(true);

                // Redireccionar
                props.history.push('/')
            })
    }

    return ( 
        <Fragment>
            <h1 className="my-5">Agregar nuevo Presupuesto</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit={crearNuevoPresupuesto}
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="concepto">Concepto</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="concepto" 
                                    name="concepto" 
                                    placeholder="Concepto" 
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="monto">Monto</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="monto" 
                                    name="monto" 
                                    placeholder="Monto" 
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Fecha</label>
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    id="fecha" 
                                    name="fecha"  
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Tipo</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="tipo" 
                                    name="tipo"  
                                    onChange={actualizarState}
                                />
                            </div>

                           


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Cargar Presupuesto"  />
                    </form>
                    </div>
                </div>
            </div>
        </Fragment>

     );
}
 
export default withRouter(NuevoPresupuesto);