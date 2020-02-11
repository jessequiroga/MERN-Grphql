import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    edad: Number,
    correo: String,
    tipo: String,
    pedidos: Array
});

const Cliente = model('Cliente', ClienteSchema);

export default Cliente;