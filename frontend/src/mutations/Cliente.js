import { gql } from 'apollo-boost';

const crearCliente = gql`

mutation crearCliente($input: ClienteInput) {
    crearCliente(input: $input) {
        _id
        nombre
        apellido
    }
}

`;

export default {
    crearCliente
}