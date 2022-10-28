import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddShop from "./pages/AddShop";
import ViewShop from "./pages/ViewShop";
import AddItem from "./pages/AddItem";
import ViewItem from "./pages/ViewItem";
import ViewEmployees from "./pages/ViewEmployees";
import ViewEmployee from "./pages/ViewEmployee";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-shop" element={<AddShop />} />
        <Route path="/view-shop" element={<ViewShop />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/view-item" element={<ViewItem />} />
        <Route path="/view-employees" element={<ViewEmployees />} />
        <Route path="/view-employee" element={<ViewEmployee />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
