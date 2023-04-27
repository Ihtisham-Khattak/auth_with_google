import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./assets/Style.scss";
import Login from "./login/Login";
import Signin from "./signin/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}>
          Login
        </Route>
        <Route path="/singIn" element={<Signin />}>
          Signin
        </Route>
      </Routes>
    </div>
  );
}

export default App;
