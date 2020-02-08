import { gql } from 'apollo-server-express';

const Cliente_Schema = gql`
# Tipos

type Cliente{
    _id: ID
    nombre: String
    apellido: String
    empresa: String
    correos: [Correo]
    tipo: TipoCliente
    pedidos: [Pedido]
}

type Pedido{
    producto: String
    precio: Int
}

type Correo {
    correo: String
}


# Inputs

input ClienteInput{
    nombre: String!
    apellido: String!
    empresa: String
    correos: [CorreoInput]
    tipo: TipoCliente
    pedidos: [PedidoInput]
}

input PedidoInput{
    producto: String
    precio: Int
}

input CorreoInput {
    correo: String
}

enum TipoCliente {
    BASICO
    PREMIUM
}

# Query

type Query{
    getClientes(limite: Int): [Cliente]
    getCliente(id: ID): Cliente
}

# Mutation

type Mutation{
    crearCliente(input: ClienteInput): Cliente
    actualizarCliente(id: ID, input: ClienteInput): Cliente
    eliminarCliente(id: ID): Cliente
}
`;

export default Cliente_Schema;