import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
// Layouts
//import Admin from "layouts/Admin.js";
import Login from "./layouts/Login";
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:9092/graphql',
  cache: new InMemoryCache()
});



const inicio = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}> 
  <BrowserRouter>
    <Switch>
      <Route path="/perfil" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Login} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
  </ApolloProvider>, inicio)
  
;

//<Route path="/user" component={Admin} />
//,document.getElementById("root")
 

 