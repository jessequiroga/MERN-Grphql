import Cliente from '../models/Cliente';

const Cliente_Resolver = {
    Query: {
        getClientes: async(_, { limite }) => {
            return await Cliente.find().limit(limite);
        },
        getCliente: async(_, { id }) => {
            return await Cliente.findById(id);
        }
    },
    Mutation: {
        crearCliente: async (_, {input}) => {
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


export default Cliente_Resolver;