import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

import WeaponCraft from '../assets/INFO/WeaponCraft.mp4';


import BGChar2 from '../assets/CharPNG.png';
import CharPNG1 from '../assets/INFO/CardBG1.png';  
import CharPNG2 from '../assets/INFO/CardBG2.png';
import CharPNG3 from '../assets/INFO/CardBG3.png';

import IconStarting from '../assets/INFO/Icons/Starting.png';

import IconNotice from '../assets/INFO/Icons/Notice.png';
import IconKill from '../assets/INFO/Icons/Kill.png';
import IconExp from '../assets/INFO/Icons/Exp.png'
import IconDrop from '../assets/INFO/Icons/Drop.png'
import AnimusIcon from '../assets/INFO/Icons/Animus.png'
import IconDungeon from '../assets/INFO/Icons/Dungeon.png'

import IconTop from '../assets/INFO/Icons/Top1.png';
import IconWeaponCraft from '../assets/INFO/Icons/WeaponCraft.png';
import IconArmorCraft from '../assets/INFO/Icons/ArmorCraft.png';
import IconWeapon from '../assets/INFO/Icons/WeaponIcon.png';
import IconLoot from '../assets/INFO/Icons/Loot.png';
import IconPrem from '../assets/INFO/Icons/Premium.png';
import IconGlider from '../assets/INFO/Icons/Glider.png';

import GuildLogo2 from '../assets/GUILDS/GUILD-LOGO/GuildLogo2.png';

import ProfB from '../assets/STREAMERS/ProfB.jpg'
import ProfBHovered from '../assets/STREAMERS/ProfBHovered.jpg'

import Video2 from '../assets/Test/Video2.mp4'
import HomeBG from '../assets/BG/Home.mp4'
import Abusado from '../assets/GUILDS/GUILD-LOGO/Abusado.png'
import Angkols from '../assets/GUILDS/GUILD-LOGO/Angkols.png'
import Arcanas from '../assets/GUILDS/GUILD-LOGO/Arcanas.png'
import Ashigaru from '../assets/GUILDS/GUILD-LOGO/Ashigaru.png'
import Badboyz from '../assets/GUILDS/GUILD-LOGO/Badboyz.png'
import Corebreak from '../assets/GUILDS/GUILD-LOGO/Corebreak.png'
import DarkLineage from '../assets/GUILDS/GUILD-LOGO/DarkLineage.png'
import Epic from '../assets/GUILDS/GUILD-LOGO/Epic.png'
import Escobar from '../assets/GUILDS/GUILD-LOGO/Escobar.png'
import Exiled from '../assets/GUILDS/GUILD-LOGO/Exiled.png'
import Hysteria from '../assets/GUILDS/GUILD-LOGO/Hysteria.png'
import Kurso from '../assets/GUILDS/GUILD-LOGO/Kurso.png'
import MPPLQQ from '../assets/GUILDS/GUILD-LOGO/MPPLQQ.png'
import NTL from '../assets/GUILDS/GUILD-LOGO/NTL.png'
import Sayonara from '../assets/GUILDS/GUILD-LOGO/Sayonara.png'
import Secret from '../assets/GUILDS/GUILD-LOGO/Secret.png'
import Titans from '../assets/GUILDS/GUILD-LOGO/Titans.png'
import Veritas from '../assets/GUILDS/GUILD-LOGO/Veritas.png'
import Clown from '../assets/GUILDS/GUILD-LOGO/Clown.png'
import Gurkhas from '../assets/GUILDS/GUILD-LOGO/Gurkhas.png'
import Paldogz from '../assets/GUILDS/GUILD-LOGO/Paldogz.png'

function Home() {
 const [activeTab ] = useState('home-section');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false); 
  const infoSectionRef = useRef(null);
  const handleMouseEnter = (itemKey: string) => setHoveredItem(itemKey);
  const handleMouseLeave = () => setHoveredItem(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
  },
  {
    threshold: 0.1, 
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
      title: "SERVER RATES",
      bg: BGChar2,
      char: CharPNG1,
      items: [
        { icon: IconTop, text: "Level Cap 50", video: null, details: 'None', },
        { icon: IconExp, text: "Classic Experience", video: null , details: 'None', },
        { icon: IconDrop, text: "Classic Drop Rate", video: null , details: 'None',},
        { icon: AnimusIcon, text: "Classic Animus Experience", video: null , details: 'None',},
        { icon: IconStarting, text: 'Max Tempo 4,500', video: null , details: 'None',},
      ],
    },
    {
      title: "GEAR ADVANCEMENT",
      bg: BGChar2,
      char: CharPNG2,
      items: [
        { icon: IconWeaponCraft, text: "Weapon crafting system: Intense to Type C", video: WeaponCraft , details: 'None',},
        { icon: IconArmorCraft, text: "Armor crafting system: Intense to Type C", video: null , details: 'None',},
        { icon: IconWeapon, text: "Leons Weapon Crafting", video: null , details: 'None',},
        { icon: IconGlider, text: "Jetpack Crafting", video: null , details: 'None',},
      ],
    },
    {
      title: "SERVER FEATURES",
      bg: BGChar2,
      char: CharPNG3,
      items: [
        { icon: IconDungeon, text: "Battle Dungeon", video: null , details: 'None',},
        { icon: IconPrem, text: "Free 2 days premium", video: null , details: 'None',},
        { icon: IconNotice, text: "Pitboss Notification", video: null , details: 'None',},
        { icon: IconLoot, text: "Universal UTS", video: null , details: 'None',},
        { icon: IconKill, text: "Kill Notification", video: null , details: 'None',},
      ],
    },
  ];

  const streamers = [
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2,  link: "/guild1" },
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2, link: "/guild2" },
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2, link: "/guild3" },
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2,  link: "/guild1" },
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2,  link: "/guild1" },
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2,  link: "/guild1" },
  { image: ProfB, hoverImage: ProfBHovered, logo: GuildLogo2,  link: "/guild1" },
  // Add more guilds as necessary
];

  const guilds = [
  { name: "GUILD 1", image: Abusado, },
  { name: "GUILD 2", image: Angkols,  },
  { name: "GUILD 3", image: Arcanas, },
  { name: "GUILD 4", image: Ashigaru,  },
  { name: "GUILD 5", image: Badboyz,  },
  { name: "GUILD 6", image: Corebreak,   },
  { name: "GUILD 6", image: DarkLineage,  },
   { name: "GUILD 6", image: Epic,   },
   { name: "GUILD 6", image: Escobar,   },
   { name: "GUILD 6", image: Exiled,  },
  { name: "GUILD 6", image: Hysteria,  },
  { name: "GUILD 6", image: Kurso,  },
  { name: "GUILD 6", image: MPPLQQ,  },
  { name: "GUILD 6", image: NTL,  },
  { name: "GUILD 6", image: Sayonara,  },
  { name: "GUILD 6", image: Secret,  },
  { name: "GUILD 6", image: Titans,  },
  { name: "GUILD 6", image: Veritas,  },
  { name: "GUILD 6", image: Clown,  },
  { name: "GUILD 6", image: Paldogz,  },
  { name: "GUILD 6", image: Gurkhas,  },
];


  return (
   <>
  <Navbar activeTab={activeTab} />
  
 {/* Home Section */}
{/* Home Section */}
<div id="home-section" className="w-full h-screen bg-black relative">
  <video
    src={HomeBG}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover sm:object-fill"
  />
  
  <div className="absolute inset-0 bg-black bg-opacity-5"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 mb-20 md:mb-40">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="text-lg sm:text-xl lg:text-2xl font-StrongSword text-slate-200 font-medium mb-5 max-w-2xl"
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
                  animate-pulseGlow transition-all duration-300 BigShoulders"
      >
        DOWNLOAD
      </motion.button>
    </a>
  </div>
</div>





  {/* Info Section */}
<div
  id="info-section"
  className="relative w-full min-h-screen bg-BGLong bg-cover bg-no-repeat bg-center text-black"
  ref={infoSectionRef}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 from-1% via-black/30 to-black to-90%"></div>
  <div className="relative w-full px-6 pt-10">
    <motion.h2
      className="text-4xl sm:text-5xl md:text-6xl font-medium text-yellow-300 text-center drop-shadow-lg mt-10 font-StrongSword"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
    >
      SERVER INFORMATION
    </motion.h2>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center px-4 sm:px-12 mt-32 relative z-10">
      {featureCards.map((card, idx) => (
        <div
          key={idx}
          className="relative w-full sm:w-80 md:w-96 rounded-lg overflow-visible shadow-lg bg-gradient-to-b from-transparent to-yellow-700 mb-12"
        >
          <motion.div
            className="relative w-full h-32 sm:h-36 flex justify-center items-end -z-20 pointer-events-none"
            initial={{
              x: idx === 0 ? -200 : idx === 1 ? 0 : idx === 2 ? -200 : 200,
              y: idx === 1 ? -100 : idx === 2 ? 0 : 0,
            }}
            animate={{
              x: isInView ? 0 : idx === 0 ? -200 : idx === 1 ? 0 : idx === 2 ? -200 : 200,
              y: isInView ? 0 : idx === 1 ? -100 : idx === 2 ? 0 : 0,
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
            <h3 className="text-lg sm:text-xl font-medium text-yellow-200 border-y border-yellow-500 mb-3 mt-10 text-center py-3 font-StrongSword">
              {card.title}
            </h3>
            <ul className="flex flex-col gap-3 text-yellow-100 BigShoulders">
              {card.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg p-2 rounded-lg transition-colors duration-200 hover:bg-yellow-700 cursor-pointer relative"
                  onMouseEnter={() => handleMouseEnter(item.text)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span>{item.text}</span>

                  {/* Video content when hovering */}
                  {hoveredItem === item.text && item.video && (
                    <div className="absolute top-1/2 left-full sm:ml-4 -translate-y-1/2 w-80 sm:w-96 bg-gradient-to-br from-yellow-800/90 to-black/90 rounded-xl shadow-2xl border border-yellow-500 p-4 z-10 transition-transform duration-200 transform scale-95 hover:scale-100">
                      <h4 className="text-lg sm:text-xl font-bold text-yellow-200 mb-2">
                        {item.text}
                      </h4>
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

  <div className="relative w-full mt-20">
    {/* Unveil the Forgotten Secrets Section */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 ">
      <h1
        style={{ textShadow: '10px 10px 10px rgba(0,0,0,0.8)' }}
        className="text-4xl sm:text-5xl md:text-6xl text-yellow-300 font-StrongSword font-medium mb-4"
      >
        Uncover the Legends of Novus
      </h1>
      <p
        style={{ textShadow: '10px 10px 10px rgba(0,0,0,0.8)' }}
        className="max-w-2xl text-sm sm:text-base text-white mb-12 BigShoulders font-medium"
      >
        Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum. <br />
        Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum.
      </p>
    </div>

    {/* First Section: Limitless Adventures */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center mt-10 px-4 mb-20">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-24">
        {/* Text */}
        <div className="text-left max-w-full sm:max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-StrongSword font-medium text-yellow-300 mb-4">
            Unique Feature 1
          </h2>
          <p className="text-white text-sm sm:text-base mb-6 font-medium BigShoulders">
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum.
          </p>
        </div>

        {/* Video */}
        <video
          src={Video2}
          autoPlay
          loop
          muted
          playsInline
          className="w-full sm:w-[70%] md:w-[50%] max-w-lg rounded-md shadow-lg border-4 border-yellow-500"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    {/* Background Image with Text */}
    <div className="relative w-full sm:w-[60%] mx-auto h-[350px] overflow-hidden rounded-lg border-4 border-yellow-500 shadow-lg" style={{ boxShadow: '0 10px 40px rgba(253, 224, 71, 1)' }}>
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center">
        <video
          src={Video2}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover max-w-none pointer-events-none"
        />
      </div>
    </div>

    <div className="text-right mt-4 sm:mt-6 sm:w-[60%] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-medium text-yellow-300 drop-shadow-lg mb-4 font-StrongSword">
        Nostalgic Battles
      </h2>

      <p className="text-white/90 text-sm sm:text-base drop-shadow font-medium BigShoulders pb-20">
        Fight back the forces that threaten the world or test your might against other Adventurers.
        <br />
        Lead your guild to victory in battle to earn great renown and greater wealth.
      </p>
    </div>
  </div>
</div>


{/* Guilds Section, now completely outside the info-section */}
<div
  id="guild-section"
  className="relative w-full min-h-screen bg-BGGuilds bg-cover bg-no-repeat bg-center mb-0"
>
  <div className="absolute inset-0 "></div>

  <div className="w-full text-white py-16 px-6 z-10 relative">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-4xl sm:text-5xl md:text-6xl mt-10 font-medium font-StrongSword text-yellow-300 text-center"
    >
      ACTIVE GUILDS
    </motion.h2>

    <div className="flex flex-wrap justify-center mt-16 relative">
      {guilds.map((guild, index) => (
        <motion.div
          key={index}
          whileHover={{ opacity: 1 }}
          className="flex flex-col items-center text-center relative group"
        >
          <img
            src={guild.image}
            alt={guild.name}
            className="w-64 h-64 object-cover rounded-lg mb-4 transition-all duration-300 group-hover:opacity-50 group-hover:grayscale"
          />

          <div className="absolute inset-0 opacity-0 transition-all duration-300 flex justify-center items-center group-hover:opacity-80">
            <button className="bg-yellow-300 text-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium BigShoulders">
              Apply Guild
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


 {/* Partnered Streamers Section */}
<div className="relative w-full h-screen bg-BGStreamers bg-cover bg-no-repeat bg-center mb-0">
  {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 from-10% via-yellow-700/20 to-black/90 to-90%"></div>

 <div className="w-full text-white py-16 px-6 z-10 relative">
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="text-4xl sm:text-5xl md:text-6xl font-medium font-StrongSword text-yellow-300 text-center relative z-10"
  >
    PARTNERED STREAMERS
  </motion.h2>

  <div className="flex flex-wrap justify-center gap-10 mt-16 relative z-10">
    {streamers.map((streamer, index) => (
      <motion.div
        key={index}
        whileHover={{ opacity: 1 }}
 className="flex flex-col items-center text-center relative group cursor-pointer transform transition duration-300 ease-in-out
           group-hover:grayscale hover:!grayscale-0
           hover:scale-105 hover:shadow-[0_0_50px_10px_#fbbf24]"

        onClick={() => window.open(streamer.link, "_blank")}
      >
        <img
          src={streamer.image}
          className="w-56 h-[500px] object-cover transition-all duration-300 group-hover:opacity-0"
        />

        <img
          src={streamer.hoverImage}
          className="w-56 h-[500px] object-cover absolute inset-0 top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />

        <img
          src={streamer.logo}
          className="absolute bottom-0 w-32 h-32"
        />
      </motion.div>
    ))}
  </div>
  </div>
</div>



  <Footer/>
</>

  );
}

export default Home;



{/*
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

  
  */}