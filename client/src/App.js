import { Pos } from "./pages/Pos";
import ProductManager from "./pages/ProductManager";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="pos" element={<Pos />} />
            <Route path="product" element={<ProductManager />} />
            <Route path="sales" element={<Sales />} />
        </Routes>
    );
}

export default App;
