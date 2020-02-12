import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import { useQuery } from '@apollo/react-hooks';
import QUERY from '../queries';

const Cliente = () => {
    const { loading, error, data, startPolling, stopPolling } = useQuery(QUERY.Cliente.GET_CLIENTES_QUERY, {
        pollInterval: 500
    });

    if (loading) return "Cargando...";
    if (error) return `Error ${error.message}`;

    return (
        <Fragment>
            <h2 className="text-center">Listado Clientes</h2>
            <ul className="list-group">
                {data.getClientes.map(cliente => (
                    <li key={cliente._id} className="list-group-item">
                    <div className="row justyfy-content-between align-items-center">
                        <div className="col-md-8 d-flex justyfy-content-between align-items-center">
                        {`${cliente.nombre} ${cliente.apellido} - ${cliente.empresa}`}
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                            <Link to={`/cliente/editar/${cliente._id}`} className="btn btn-success d-block d-md-inline-block">
                                Editar Cliente
                            </Link>
                        </div>
                    </div>
                    
                    </li>
            ))
            }
            </ul>
        </Fragment>
    );
};

export default Cliente;