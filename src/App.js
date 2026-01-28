import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Combination from './pages/Combination';
import TypeCArmor from './pages/subpages/TypeCArmor';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/Combination", element: _jsx(Combination, {}) }), _jsx(Route, { path: "/Combination/TypeCArmor", element: _jsx(TypeCArmor, {}) })] }) }));
}
export default App;
