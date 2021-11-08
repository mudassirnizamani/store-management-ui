import "./App.css";
import { Routes, Route } from "react-router-dom";

import Index from "./features/inventory/views/Index/Index"
import Create from "./features/inventory/views/Create/Create"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
