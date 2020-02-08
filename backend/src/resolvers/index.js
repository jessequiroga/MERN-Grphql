import { mergeResolvers } from 'merge-graphql-schemas';

import Producto_Resolver from "./Producto_Resolver";
import Cliente_Resolver from "./Cliente_Resolver";

const resolvers = mergeResolvers([Producto_Resolver, Cliente_Resolver]);

export default resolvers;