import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import PitbossNotice from '../assets/INFO/PitbossNotice.mp4';
import DailyKiller from '../assets/INFO/DailyKiller.mp4';
import KillFeed from '../assets/INFO/KillFeed.mp4';
import BGChar2 from '../assets/CharPNG.png';
import CharPNG1 from '../assets/INFO/CardBG1.png';
import CharPNG2 from '../assets/INFO/CardBG2.png';
import CharPNG3 from '../assets/INFO/CardBG3.png';
import IconBanana from '../assets/INFO/Icons/level-up.png';
import IconStarting from '../assets/INFO/Icons/Starting.png';
import IconNotice from '../assets/INFO/Icons/Notice.png';
import IconKill from '../assets/INFO/Icons/Kill.png';
import IconTop from '../assets/INFO/Icons/Top1.png';
import IconWeaponCraft from '../assets/INFO/Icons/WeaponCraft.png';
import IconArmorCraft from '../assets/INFO/Icons/ArmorCraft.png';
import IconHelm from '../assets/INFO/Icons/Helm.png';
import IconLoot from '../assets/INFO/Icons/Loot.png';
import IconPrem from '../assets/INFO/Icons/Premium.png';
import IconGlider from '../assets/INFO/Icons/Glider.png';
import GuildLogo1 from '../assets/GUILDS/GUILD-LOGO/GuildLogo1.png';
import GuildLogo2 from '../assets/GUILDS/GUILD-LOGO/GuildLogo2.png';
import ProfB from '../assets/STREAMERS/ProfB.jpg';
import ProfBHovered from '../assets/STREAMERS/ProfBHovered.jpg';
import Erina from '../assets/STREAMERS/Erina.jpg';
import ErinaHovered from '../assets/STREAMERS/ErinaHovered.jpg';
import Fallen from '../assets/STREAMERS/Fallen.jpg';
import FallenHovered from '../assets/STREAMERS/FallenHovered.jpg';
import Tyke from '../assets/STREAMERS/Tyke.jpg';
import TykeHovered from '../assets/STREAMERS/TykeHovered.jpg';
import Kazumi from '../assets/STREAMERS/Kazumi.jpg';
import KazumiHovered from '../assets/STREAMERS/KazumiHovered.jpg';
import Yendere from '../assets/STREAMERS/Yendere.jpg';
import YendereHovered from '../assets/STREAMERS/YendereHovered.jpg';
import Emmachii from '../assets/STREAMERS/Emmachii.jpg';
import EmmachiiHovered from '../assets/STREAMERS/EmmachiiHovered.jpg';
import DarkLineage from '../assets/GUILDS/Guild1.png';
import Video2 from '../assets/Test/Video2.mp4';
import HomeBG from '../assets/BG/Home.mp4';
function Home() {
    const [activeTab] = useState('home-section');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const infoSectionRef = useRef(null);
    // Function to handle mouse enter
    const handleMouseEnter = (itemKey) => setHoveredItem(itemKey);
    // Function to handle mouse leave
    const handleMouseLeave = () => setHoveredItem(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            });
        }, {
            threshold: 0.1,
        });
        if (infoSectionRef.current) {
            observer.observe(infoSectionRef.current);
        }
        return () => {
            if (infoSectionRef.current) {
                observer.unobserve(infoSectionRef.current);
            }
        };
    }, []);
    const featureCards = [
        {
            title: "SERVER INFORMATION",
            bg: BGChar2,
            char: CharPNG1,
            items: [
                { icon: IconBanana, text: "Level Cap 50", video: null, details: 'None', },
                { icon: IconStarting, text: "Classic Experience", video: null },
                { icon: IconNotice, text: "Classic Drop Rate", video: PitbossNotice },
                { icon: IconKill, text: "Classic Animus Experience", video: null },
                { icon: IconTop, text: 'Max Tempo 4,500', video: DailyKiller },
            ],
        },
        {
            title: "GEAR ADVANCEMENT",
            bg: BGChar2,
            char: CharPNG2,
            items: [
                { icon: IconWeaponCraft, text: "Weapon crafting system: Intense to Type C", video: null },
                { icon: IconArmorCraft, text: "Armor crafting system: Intense to Type C", video: null },
                { icon: IconHelm, text: "Racial Helmet & Glider", video: KillFeed },
                { icon: IconGlider, text: "Elite Racial Helmet & Glider", video: null },
            ],
        },
        {
            title: "COMFORTABLE GAMING",
            bg: BGChar2,
            char: CharPNG3,
            items: [
                { icon: IconLoot, text: "Autoloot & Autotarget feature / Quest navigation", video: null },
                { icon: IconPrem, text: "Free 2 days premium", video: null },
                { icon: IconLoot, text: "Big prizes on events", video: null },
            ],
        },
    ];
    const streamers = [
        { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2, link: "/guild1" },
        { image: Erina, hoverImage: ErinaHovered, logo: GuildLogo2, link: "/guild2" },
        { image: Fallen, hoverImage: FallenHovered, logo: GuildLogo2, link: "/guild3" },
        { image: Tyke, hoverImage: TykeHovered, logo: GuildLogo2, link: "/guild1" },
        { image: Kazumi, hoverImage: KazumiHovered, logo: GuildLogo2, link: "/guild1" },
        { image: Yendere, hoverImage: YendereHovered, logo: GuildLogo2, link: "/guild1" },
        { image: Emmachii, hoverImage: EmmachiiHovered, logo: GuildLogo2, link: "/guild1" },
        // Add more guilds as necessary
    ];
    const guilds = [
        { name: "GUILD 1", image: DarkLineage, logo: GuildLogo1 },
        { name: "GUILD 2", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 3", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 4", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 5", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 6", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 6", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 6", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 6", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 6", image: DarkLineage, logo: GuildLogo2 },
        { name: "GUILD 6", image: DarkLineage, logo: GuildLogo2 },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { activeTab: activeTab }), _jsxs("div", { id: "home-section", className: "w-full bg-black h-screen relative overflow-hidden  ", children: [_jsx("video", { src: HomeBG, autoPlay: true, loop: true, muted: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-5" }), _jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 mb-40", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.2, delay: 0.3 }, className: "text-4xl sm:text-6xl lg:text-7xl zen-dots-regular font-extrabold ", style: { textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }, children: "The Future Awaits" }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.2, delay: 0.5 }, className: "text-lg sm:text-xl lg:text-2xl font-ITC2 text-slate-200 font-medium mb-5 max-w-2xl", style: { textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }, children: "Your journey starts now." }), _jsx("a", { href: "/download", target: "_blank", rel: "noopener noreferrer", children: _jsx(motion.button, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.9 }, className: "w-72 py-3 px-10 text-2xl font-bold text-white rounded-lg \r\n                    bg-yellow-600 border border-yellow-500\r\n                    shadow-lg shadow-yellow-700/50\r\n                    hover:scale-105\r\n                    animate-pulseGlow transition-all duration-300", children: "DOWNLOAD" }) })] })] }), _jsxs("div", { id: "info-section", className: "relative w-full min-h-screen bg-BGLong bg-cover bg-no-repeat bg-center text-black ", ref: infoSectionRef, children: [_jsx("div", { className: "absolute inset-0 bg-black bg-opacity-65" }), _jsxs("div", { className: "relative w-full px-6 pt-10", children: [_jsx(motion.h2, { className: "text-4xl sm:text-5xl font-bold  text-yellow-300 text-center drop-shadow-lg mt-5", initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.2 }, children: "SERVER INFORMATION" }), _jsx("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center px-4 sm:px-12 mt-32 relative z-10", children: featureCards.map((card, idx) => (_jsxs("div", { className: "relative w-full sm:w-80 md:w-96 rounded-lg overflow-visible shadow-lg bg-gradient-to-b from-transparent to-yellow-700 mb-12", children: [_jsx(motion.div, { className: "relative w-full h-32 sm:h-36 flex justify-center items-end -z-20 pointer-events-none", initial: {
                                                x: idx === 0 ? -200 : idx === 1 ? 0 : idx === 2 ? -200 : 200,
                                                y: idx === 1 ? -100 : idx === 2 ? 0 : 0,
                                            }, animate: {
                                                x: isInView ? 0 : idx === 0 ? -200 : idx === 1 ? 0 : idx === 2 ? -200 : 200,
                                                y: isInView ? 0 : idx === 1 ? -100 : idx === 2 ? 0 : 0,
                                            }, transition: { type: 'spring', stiffness: 60, damping: 20 }, children: _jsx("img", { src: card.char, alt: "Character", className: "w-72 sm:w-96 h-72 sm:h-96 object-contain -mb-20 sm:-mb-28" }) }), _jsxs("div", { className: "p-4 relative", children: [_jsx("h3", { className: "text-lg sm:text-xl font-bold text-yellow-200 border-y border-yellow-500 mb-3 mt-10 text-center py-3", children: card.title }), _jsx("ul", { className: "flex flex-col gap-3 text-yellow-100", children: card.items.map((item, i) => (_jsxs("li", { className: "flex items-center gap-3 sm:gap-4 text-base sm:text-lg p-2 rounded-lg transition-colors duration-200 hover:bg-yellow-700 cursor-pointer relative", onMouseEnter: () => handleMouseEnter(item.text), onMouseLeave: () => handleMouseLeave(), children: [_jsx("img", { src: item.icon, alt: item.text, className: "w-6 h-6 sm:w-8 sm:h-8" }), _jsx("span", { children: item.text }), hoveredItem === item.text && item.video && (_jsxs("div", { className: "absolute top-1/2 left-full sm:ml-4 -translate-y-1/2 w-80 sm:w-96 bg-gradient-to-br from-yellow-800/90 to-black/90 rounded-xl shadow-2xl border border-yellow-500 p-4 z-10 transition-transform duration-200 transform scale-95 hover:scale-100", children: [_jsx("h4", { className: "text-lg sm:text-xl font-bold text-yellow-200 mb-2", children: item.text }), _jsx("video", { src: item.video, autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full sm:h-56 h-52 object-cover mb-2" }), _jsx("p", { className: "text-yellow-100 text-sm sm:text-base", children: item.details })] }))] }, i))) })] })] }, idx))) })] }), _jsxs("div", { className: "relative w-full mt-20 mb-20", children: [_jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center text-center px-4 ", children: [_jsx("h1", { className: "text-4xl sm:text-5xl md:text-6xl text-yellow-300 font-bold mb-4", children: "Uncover the Novus's Ancients" }), _jsxs("p", { className: "max-w-2xl text-sm sm:text-base text-white mb-12 font-BD font-bold", children: ["Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum. ", _jsx("br", {}), "Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum."] })] }), _jsx("div", { className: "relative z-10 flex flex-col items-center justify-center text-center mt-10 px-4 mb-20", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-24", children: [_jsxs("div", { className: "text-left max-w-full sm:max-w-lg", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-semibold text-yellow-300 mb-4", children: "Unique Feature 1" }), _jsx("p", { className: "text-white text-sm sm:text-base mb-6 font-bold", children: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum." })] }), _jsx("video", { src: Video2, autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full sm:w-[70%] md:w-[50%] max-w-lg rounded-md shadow-lg border", style: { animationDelay: '0s' }, children: "Your browser does not support the video tag." })] }) }), _jsx("div", { className: "relative w-full sm:w-[60%] mx-auto h-[350px] overflow-hidden border rounded-lg border-yellow-300 ", children: _jsx("div", { className: "absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center", children: _jsx("video", { src: Video2, autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full h-full object-cover max-w-none pointer-events-none" }) }) }), _jsxs("div", { className: "text-left mt-4 sm:mt-6 sm:w-[60%] mx-auto", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-yellow-300 drop-shadow-lg mb-4", children: "Nostalgic Battles" }), _jsxs("p", { className: "text-white/90 text-sm sm:text-base drop-shadow font-bold", children: ["Fight back the forces that threaten the world or test your might against other Adventurers.", _jsx("br", {}), "Lead your guild to victory in battle to earn great renown and greater wealth."] })] })] }), _jsxs("div", { className: "relative w-full min-h-screen bg-black bg-cover bg-no-repeat bg-center mb-0", children: [" ", _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-65 z-0" }), _jsxs("div", { className: "w-full text-white py-16 px-6 z-10 relative", children: [_jsx(motion.h2, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.2 }, className: "text-4xl sm:text-5xl font-bold text-yellow-300 text-center", children: "GUILDS" }), _jsx("div", { className: "flex flex-wrap justify-center gap-8 mt-16 relative", children: guilds.map((guild, index) => (_jsxs(motion.div, { whileHover: { opacity: 1 }, className: "flex flex-col items-center text-center relative group", children: [_jsx("img", { src: guild.image, alt: guild.name, className: "w-64 h-64 object-cover rounded-lg mb-4 transition-all duration-300 group-hover:opacity-50 group-hover:grayscale" }), _jsx("div", { className: "absolute inset-0 bg-black opacity-0 transition-all duration-300 flex justify-center items-center group-hover:opacity-80", children: _jsx("button", { className: "bg-yellow-300 text-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: "Apply Guild" }) })] }, index))) })] })] })] }), _jsxs("div", { className: "w-full bg-black text-white py-16 px-6 border-2 border-yellow-500", children: [_jsx(motion.h2, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.2 }, className: "text-4xl sm:text-5xl font-bold text-yellow-300 text-center", children: "PARTNERED STREAMERS" }), _jsx("div", { className: "flex flex-wrap justify-center gap-10 mt-16 relative", children: streamers.map((streamers, index) => (_jsxs(motion.div, { whileHover: { opacity: 1 }, className: "flex flex-col items-center text-center relative group cursor-pointer", onClick: () => window.open(streamers.link, "_blank"), children: [_jsx("img", { src: streamers.image, className: "w-56 h-[500px] object-cover border-x border-yellow-500 mb-4 transition-all duration-300 group-hover:opacity-0" }), _jsx("img", { src: streamers.hoverImage, className: "w-60 h-[500px] object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" }), _jsx("img", { src: streamers.logo, className: "absolute bottom-0 w-32 h-32" })] }, index))) })] })] }));
}
export default Home;
{ /*
  <div className="w-full bg-black text-white py-16 px-6 border-2 border-yellow-500">
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="text-4xl sm:text-5xl font-bold text-yellow-300 text-center"
  >
    PARTNERED STREAMERS
  </motion.h2>

  <Swiper
    spaceBetween={40}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    }}
    className="w-full max-w-5xl mx-auto p-6 rounded-xl shadow-xl"
  >
    {streamer2.map((streamer2, index) => (
      <SwiperSlide key={index}>
<div className="flex flex-col sm:flex-row sm:gap-12 items-center mt-20">
  

  <div className="flex flex-col items-center text-center sm:w-1/3 mb-12 sm:mb-0">
    <img
      src={streamer2.image} // Streamer image
      className="w-full h-96 object-cover rounded-lg mb-6"
    />
  </div>

  
  <div className="sm:text-left sm:w-2/3 pl-44">
    <motion.h3
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="text-2xl sm:text-3xl font-extrabold text-yellow-300 mb-6"
    >
      {streamer2.name}
    </motion.h3>
    <ul className="text-xl text-yellow-100 space-y-4">
      {streamer2.achievements.map((achievement, idx) => (
        <li key={idx} className="flex items-center justify-start gap-4">
          <img
            src={achievement.icon}
            alt="Achievement Icon"
            className="w-8 h-8"
          />
          <span>{achievement.text}</span>
        </li>
      ))}
    </ul>
  </div>
  
</div>

      </SwiperSlide>
    ))}
  </Swiper>
</div>

  
  */
}
