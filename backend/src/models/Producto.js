import { Schema, model } from 'mongoose';

const ProductoSchema = new Schema({
    nombre: String,
    data: {
        tipo: String,
        precio: Number,
    },
    marca: String
},
{
    timestamps: true
});

const Producto = model('Producto', ProductoSchema);

export default Producto;