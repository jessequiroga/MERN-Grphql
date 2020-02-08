import { mergeTypes } from 'merge-graphql-schemas';

import Producto_Schema from './Producto_Schema';
import Cliente_Schema from './Cliente_Schema';

const typeDefs = mergeTypes([Producto_Schema,Cliente_Schema]);


export default typeDefs;