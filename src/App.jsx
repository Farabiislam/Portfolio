import "./App.css";
import TransitionProvider from "./pages/TransitionProvider";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>        
        <TransitionProvider />
      </Router>
    </div>
  );
}

export default App;
