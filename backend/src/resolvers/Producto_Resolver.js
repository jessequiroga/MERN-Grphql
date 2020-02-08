import Producto from '../models/Producto';

const Producto_Resolver = {
    Query: {
        getProducto: async(_, { id }) => {
            return await Producto.findById(id);
        },
        getProductos: async() => {
            return await Producto.find();
        }
    },
    Mutation: {
        createProducto: async(_, { input }) => {
            const newProducto = new Producto(input);
            return await newProducto.save();
        },
        updateProducto: async(_, { id, input }) => {
            return await Producto.findByIdAndUpdate(id, input, { new: true });
        },
        deleteProducto: async(_, { id }) => {
            return await Producto.findByIdAndDelete(id);
        }
    }
}

export default Producto_Resolver;