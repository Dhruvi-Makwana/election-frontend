import Registrations from "./components/Register";
import ReactDOM from "react-dom/client";
import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Registrations />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
