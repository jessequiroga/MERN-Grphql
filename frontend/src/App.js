import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from  '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// Importar componentes

import Header from './components/Header';
import Cliente from './components/Cliente';
import EditarCliente from './components/EditarCliente';
import NuevoCliente from './components/NuevoCliente';
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
    <Router>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Cliente}/>
          <Route path="/cliente/editar/:id" component={EditarCliente}/>
          <Route path="/cliente/nuevo" component={NuevoCliente}/>
        </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
