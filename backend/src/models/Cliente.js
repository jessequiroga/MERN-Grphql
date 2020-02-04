import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    correos: Array,
    tipo: String,
    pedidos: Array
});

const Cliente = model('Cliente', ClienteSchema);

export default Cliente;