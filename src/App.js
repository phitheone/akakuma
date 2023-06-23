import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
