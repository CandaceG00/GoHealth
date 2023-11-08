import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './components/homePage';
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Recipes from "./components/recipes";
import Login from "./components/login";

function App() {
  const [currentTab, handleTabChange] = useState("GoHealth");

  const renderTab = () => {
    if (currentTab === "GoHealth") {
      return <HomeContent />;
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
    return <HomeContent />;
  };

  return (
      <>
      <Helmet>
        <title>GoHealth - Recipes | {currentTab} </title>
      </Helmet>
      <Navbar
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Navbar>
      <main>{renderTab()}</main>
      <Footer></Footer>
      </>
  );
}

export default App;