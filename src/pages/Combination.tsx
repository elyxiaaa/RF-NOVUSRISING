import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import GuildLogo2 from '../assets/GUILDS/GUILD-LOGO/GuildLogo2.png';

function Combination() {

  const Combination = [
    {
      id: 1,
      image: GuildLogo2,
      title: 'Type C Weapon Crafting',
      details: 'See more',
      link: '/Combination/TypeCArmor', 
    },
    {
      id: 2,
      image: GuildLogo2,
      title: 'Type C Weapon Crafting',
      details: 'See more',
      link: '/Combination/TypeCArmor',
    },
    {
      id: 3,
      image: GuildLogo2,
      title: 'Type C Weapon Crafting',
      details: 'See more',
      link: '/Combination/TypeCArmor',
    },
    {
      id: 4,
      image: GuildLogo2,
      title: 'Type C Weapon Crafting',
      details: 'See more',
      link: '/Combination/TypeCArmor',
    },
  ];

  const [activeTab] = useState('combination-section');
  
  return (
    <>
      <Navbar activeTab={activeTab} />
      <div className="min-h-screen bg-BGCombination text-black flex flex-col items-center px-4 py-12 relative">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container mx-auto p-6 mb-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-extrabold text-center text-yellow-300 mb-8"
          >
            Combination Guide
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Combination.map((combi) => (
              <Link to={combi.link} key={combi.id} target="_blank"> 
                <div className="card bg-yellow-700 shadow-xl transform transition-transform hover:scale-105">
                  <figure>
                    <img
                      src={combi.image}
                      alt={combi.title}
                      className="w-full h-80 object-cover"
                    />
                  </figure>
                  <div className="card-body bg-black">
                    <h3 className="card-title text-yellow-100">{combi.title}</h3>
                    <p className="text-yellow-300">{combi.details}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Combination;
