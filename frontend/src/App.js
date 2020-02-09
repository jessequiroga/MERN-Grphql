import React from 'react';
import { ApolloProvider } from  '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// Importar componentes

import Header from './components/Header';
import CLiente from './components/Cliente';
// import Client from './components/Client';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphqlErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});


function App() {
  return (
    <ApolloProvider client = {client}>
    <Header></Header>
    <div className="container">
      <CLiente></CLiente>
    </div>
    </ApolloProvider>
  );
}

export default App;
