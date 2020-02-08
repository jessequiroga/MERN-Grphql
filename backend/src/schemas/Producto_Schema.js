import { gql } from 'apollo-server-express';

const Producto_Schema = gql`

#Tipos

type Producto {
    _id: ID
    nombre: String
    data: Data
    marca: String
}

type Data {
    tipo: String
    precio: Int
}

# Inputs

input ProductoInput {
    nombre: String!
    data: DataInput
    marca: String
}

input DataInput {
    tipo: String
    precio: Int
}

# Query

type Query {
    getProducto(id: ID!): Producto
    getProductos(limit: Int): [Producto]
}

# Mutation

type Mutation {
    createProducto(input: ProductoInput): Producto
    updateProducto(id: ID, input: ProductoInput): Producto
    deleteProducto(id: ID): Producto
}

`;

export default Producto_Schema;