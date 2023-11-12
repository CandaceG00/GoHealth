import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './Components/HomePage/Index';
import Navbar from "./Components/Navbar/Index";
import About from "./Components/About/Index";
import Footer from "./Components/Footer/Index";
import Recipes from "./Components/Recipes/Index";
import Login from "./Components/Login/Index";

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