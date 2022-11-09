// import React from "react";
// import logo from "./logo.svg";

import React from 'react';
import ContentRowTop from './ContentRowTop';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
import SideBar from './SideBar';
import TopBar from './TopBar';
import "../assets/css/app.css"

function App(){
  return (
    <div >
        <ContentRowTop />
        <ContentWrapper />
        <Footer />
        <SideBar />
        <TopBar />
    </div>
  )

}
export default App;