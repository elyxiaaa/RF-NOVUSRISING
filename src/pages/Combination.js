import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Test from '../assets/BG/BGHome.jpg';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Combination() {
    const Combination = [
        {
            id: 1,
            image: Test,
            title: 'Type C Weapon Crafting',
            details: 'See more',
            link: '/Combination/TypeCArmor',
        },
        {
            id: 2,
            image: Test,
            title: 'Type C Weapon Crafting',
            details: 'See more',
            link: '/Combination/TypeCArmor',
        },
        {
            id: 3,
            image: Test,
            title: 'Type C Weapon Crafting',
            details: 'See more',
            link: '/Combination/TypeCArmor',
        },
        {
            id: 4,
            image: Test,
            title: 'Type C Weapon Crafting',
            details: 'See more',
            link: '/Combination/TypeCArmor',
        },
    ];
    const [activeTab] = useState('combination-section');
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { activeTab: activeTab }), _jsxs("div", { className: "min-h-screen bg-BGCombination text-black flex flex-col items-center px-4 py-12 relative", children: [_jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50" }), _jsxs("div", { className: "container mx-auto p-6 mb-12 relative z-10", children: [_jsx(motion.h2, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.2 }, className: "text-5xl font-extrabold text-center text-yellow-300 mb-8", children: "Combination Guide" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: Combination.map((combi) => (_jsx(Link, { to: combi.link, target: "_blank", children: _jsxs("div", { className: "card bg-yellow-700 shadow-xl transform transition-transform hover:scale-105", children: [_jsx("figure", { children: _jsx("img", { src: combi.image, alt: combi.title, className: "w-full h-80 object-cover" }) }), _jsxs("div", { className: "card-body bg-black", children: [_jsx("h3", { className: "card-title text-yellow-100", children: combi.title }), _jsx("p", { className: "text-yellow-300", children: combi.details })] })] }) }, combi.id))) })] })] })] }));
}
export default Combination;
