import Cliente from '../models/Cliente';

class ClienteC {
    constructor({nombre, apellido, empresa, correo, tipo, pedidos}){
        this.id = 1;
        this.nombre = nombre,
        this.apellido = apellido,
        this.empresa = empresa;
        this.correo = correo;
        this.tipo = tipo;
        this.pedidos = pedidos;
    }
}

const ClientesResolver = {
    Query: {
        obtenerClientes: async(_, { limite }) => {
            return await Cliente.find().limit(limite);
        }

    },
    Mutation: {
        crearCliente: async (_, {input}) => {
            console.log('Holaaa');
            const newCliente = new Cliente(input);
            return await newCliente.save();
        },
        actualizarCliente: async (_, { id, input}) => {
            return await Cliente.findByIdAndUpdate(id, input, {new: true});
        },
        eliminarCliente: async(_,{ id }) => {
            return await Cliente.findByIdAndDelete(id);
        }
    }
}


export default ClientesResolver;