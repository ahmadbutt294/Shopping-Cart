import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import * as React from "react";
function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  return (
    <div className="App">
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <div className="showcasemain">
        <Showcase isCartOpen={isCartOpen} />
      </div>
    </div>
  );
}

export default App;
