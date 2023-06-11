import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Service from "./components/Service/Service.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Service />
    </Router>
  );
};

export default App;
