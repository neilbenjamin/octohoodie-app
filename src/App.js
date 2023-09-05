import React from "react";
import MainHeader from "./octoHeader";
import ProductComponent from "./productComponent.js";
import LandingPageComponent from "./landingPageComponent.js"



//Test prop parent component
const productPromoProp = "Sale";
//Main page exported to index.js for movement to the browser.
function App() {
  const isLoggedIn = true; // Set this based on whether the user is logged in or not
  return (
    <div>
      <MainHeader isLoggedIn={isLoggedIn} />
      <LandingPageComponent/>
      <ProductComponent productPromoProp = {productPromoProp}/>
      
    </div>
  );
}

export default App;
