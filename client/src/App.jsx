import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage/Index.jsx";
import Navbar from "./components/Navbar/Index.jsx";
import About from "./components/About/Index.jsx";
import Footer from "./components/Footer/Index.jsx";
import Recipes from "./components/Recipes/Index.jsx";
import Login from "./components/Login/Index.jsx";

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [currentTab, handleTabChange] = useState("GoHealth");

  const renderTab = () => {
    if (currentTab === "GoHealth") {
      return <HomePage />;
    }
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Recipes") {
      return <Recipes />;
    }
    if (currentTab === "Login") {
      return <Login />;
    }
    return <HomePage />;
  };

  return (
    <ApolloProvider client={client}>
      <>
      <Helmet>
        <title>GoHealth - Recipes | {currentTab} </title>
      </Helmet>
      <Navbar
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Navbar>
      <main>{renderTab()}</main>
      <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;