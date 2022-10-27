import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="showcasemain">
        <Showcase />
      </div>
    </div>
  );
}

export default App;
