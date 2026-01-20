import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

// Import media
import PitbossNotice from '../assets/INFO/PitbossNotice.mp4';
import DailyKiller from '../assets/INFO/DailyKiller.mp4';
import StartingArmor from '../assets/INFO/StartingArmor.mp4';
import KillFeed from '../assets/INFO/KillFeed.mp4';
// Import other media...
// Background and character images for FeatureCards
import BGChar2 from '../assets/CharPNG.png';
import CharPNG1 from '../assets/INFO/CardBG1.png';
import CharPNG2 from '../assets/INFO/CardBG2.png';
import CharPNG3 from '../assets/INFO/CardBG3.png';

// Icon images
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

function Home() {
  const [activeTab, setActiveTab] = useState('home-section');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isInView, setIsInView] = useState(false); // Track if the info-section is in view
  const infoSectionRef = useRef(null); // Ref for the info section

  const handleMouseEnter = (itemKey) => setHoveredItem(itemKey);
  const handleMouseLeave = () => setHoveredItem(null);

  // Detect when the info section is in view using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Set to true when the info-section is in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );
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
        { icon: IconBanana, text: "Level Cap 50", video: null },
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

  return (
    <>
      <Navbar activeTab={activeTab} />
      <div id="home-section" className="w-full bg-black h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 mb-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-ITC2 font-extrabold"
            style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
          >
            The Future Awaits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl font-ITC2 text-slate-200 font-medium mb-5 max-w-2xl"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
          >
            Your journey starts now.
          </motion.p>

          <a href="/download" target="_blank" rel="noopener noreferrer">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="w-72 py-3 px-10 text-2xl font-bold text-white rounded-lg
                        bg-yellow-600 border border-yellow-500
                        shadow-lg shadow-yellow-700/50
                        hover:scale-105
                        animate-pulseGlow transition-all duration-300"
            >
              DOWNLOAD
            </motion.button>
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div
        id="info-section"
        className="relative w-full min-h-screen bg-black bg-cover bg-no-repeat bg-center text-black"
        ref={infoSectionRef}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        <div className="relative w-full px-6 pt-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center px-4 sm:px-12 mt-20 relative z-10">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="relative w-full sm:w-80 rounded-lg overflow-visible shadow-lg bg-gradient-to-b from-transparent to-yellow-700 mb-12"
              >
                {/* Character Image with Slide Animation */}
                <motion.div
                  className="relative w-full h-32 sm:h-36 flex justify-center items-end -z-20 pointer-events-none"
                  initial={{
                    x: idx === 0 ? -200 : idx === 1 ? 0 : 200, // Left to right, top to bottom, right to left
                    y: idx === 1 ? -100 : 0, // Reduce the slide height for CharPNG2
                  }}
                  animate={{
                    x: isInView ? 0 : idx === 0 ? -200 : idx === 1 ? 0 : 200, // Slide left/right for CharPNG1, right/left for CharPNG3
                    y: isInView ? 0 : idx === 1 ? -100 : 0, // Slide top/bottom for CharPNG2
                  }}
                  transition={{ type: 'spring', stiffness: 60, damping: 20 }}
                >
                  <img
                    src={card.char}
                    alt="Character"
                    className="w-72 sm:w-96 h-72 sm:h-96 object-contain -mb-20 sm:-mb-28"
                  />
                </motion.div>

                {/* Card Content */}
                <div className="p-4 relative">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-200 border-y border-yellow-500 mb-3 mt-10 text-center py-3">
                    {card.title}
                  </h3>
                  <ul className="flex flex-col gap-3 text-yellow-100">
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg p-2 rounded-lg transition-colors duration-200 hover:bg-yellow-700 cursor-pointer relative"
                        onMouseEnter={() => handleMouseEnter(item.text)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <span>{item.text}</span>

                        {/* Video content when hovering */}
                        {hoveredItem === item.text && item.video && (
                          <div className="absolute top-1/2 left-full sm:ml-4 -translate-y-1/2 w-80 sm:w-96 bg-gradient-to-br from-yellow-800/90 to-black/90 rounded-xl shadow-2xl border border-yellow-500 p-4 z-10 transition-transform duration-200 transform scale-95 hover:scale-100 ">
                            <h4 className="text-lg sm:text-xl font-bold text-yellow-200 mb-2">{item.text}</h4>
                            <video
                              src={item.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full sm:h-56 h-52 object-cover mb-2"
                            />
                            <p className="text-yellow-100 text-sm sm:text-base">{item.details}</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
