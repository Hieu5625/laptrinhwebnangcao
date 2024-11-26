import React from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
