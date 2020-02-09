import { gql } from 'apollo-boost';

const GET_CLIENTE_QUERY = gql`
query GetCliente($id: ID!){
    getCliente(id: $id){
        nombre
        apellido
    }
}
`;

const GET_CLIENTES_QUERY = gql`
{
    getClientes(limite:5){
    _id
    nombre
  }
}
`;

export default {
    GET_CLIENTE_QUERY,
    GET_CLIENTES_QUERY
}