import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import QUERY from '../queries';


const Client = () => {
    const { loading, error, data } = useQuery(QUERY.Cliente.GET_CLIENTE_QUERY, {
        variables: { id : "5e3f2ddf4abe5e3e2403febf" }
    });

    if(loading) return "Cargando ...";
    if(error) return `Error ${error.message}`;

    return (
        <div>
            {
                `${data.getCliente.nombre}, ${data.getCliente.apellido}`
            }
        </div>

    );
};

export default Client;