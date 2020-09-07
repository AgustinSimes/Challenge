import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Presupuestos = ({presupuestos}) => {

    if(presupuestos.length === 0) return null; 

    return (
        <Fragment>
            <h1 className="my-5">Administrador de Presupuestos</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/nuevo'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Agregar Presupuesto</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {presupuestos.map(presupuesto => (
                                <Link to={`/presupuesto/${p._id}`} key={presupuesto._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{presupuesto.concepto}</h3>
                                        <small className="monto">
                                            {presupuesto.monto}
                                        </small>
                                    </div>
                                    <div className="fechatipo py-3">
                                        <p>Fecha: {presupuesto.fecha}</p>
                                        <p>Tipo: {presupuesto.tipo}</p>
                                    </div> 
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>

        </Fragment>

     );
}
 
export default Balance;