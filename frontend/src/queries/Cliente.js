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
    getClientes(limite:90){
    _id
    nombre
    apellido
    empresa
  }
}
`;

export default {
    GET_CLIENTE_QUERY,
    GET_CLIENTES_QUERY
}