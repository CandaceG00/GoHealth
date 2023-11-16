import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Components/HomePage/index.jsx";
import Navbar from "./Components/Navbar/Index.jsx";
import About from "./Components/About/Index.jsx";
import Footer from "./Components/Footer/Index.jsx";
import Recipes from "./Components/Recipes/Index.jsx";

import Auth from './Components/Auth/Auth.jsx';
import { Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
 
  return (
    <ApolloProvider client={client}>
      <>
      <Helmet>
      {/*  <title>GoHealth - Recipes | {currentTab} </title>*/}
      </Helmet>
      <Navbar
       
      ></Navbar>
      <Routes>
      <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/recipes" element={<Recipes />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/account" element={<Auth />}>
        </Route>

      </Routes>
      <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;