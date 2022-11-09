// import React from "react";
// import logo from "./logo.svg";
import "./assets/css/app.css";
import React from 'react';
import ContentRowTop from './ContentRowTop';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
import SideBar from './SideBar';
import TopBar from './TopBar';


function App(){
  return (
    <div id="wrapper">
        <ContentRowTop />
        <ContentWrapper />
        <Footer />
        <SideBar />
        <TopBar />
    </div>
  )

}
export default App;