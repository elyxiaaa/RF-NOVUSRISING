import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Combination from './pages/Combination';
import TypeCArmor from './pages/subpages/TypeCArmor';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Combination" element={<Combination />} />
          <Route path="/Combination/TypeCArmor" element={<TypeCArmor />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
