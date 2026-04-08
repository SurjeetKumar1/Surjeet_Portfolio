'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Link, ExternalLink, Globe, FileText } from 'lucide-react';

const Sidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1e1e1f] rounded-3xl p-8 flex flex-col items-center text-center w-full lg:w-72 border border-white/5 lg:sticky lg:top-8 h-fit"
    >
      {/* Profile Image */}
      <div className="w-36 h-36 bg-[#2b2b2c] rounded-3xl mb-6 overflow-hidden flex items-center justify-center border border-white/10 shadow-xl">
        <img 
          src="/profile_avatar.png" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-white text-2xl font-bold mb-2 tracking-tight">Surjeet</h1>
      <div className="bg-[#2b2b2c] text-[10px] text-white/80 px-4 py-1.5 rounded-lg mb-8 uppercase tracking-widest font-bold">
        Full Stack Developer
      </div>

      <div className="w-full h-[1px] bg-white/5 mb-8"></div>

      {/* Info Items */}
      <div className="w-full space-y-6">
        <div className="flex items-center gap-4 group cursor-default">
          <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300 shadow-lg">
            <Mail size={18} />
          </div>
          <div className="text-left overflow-hidden">
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-tight">Email</p>
            <p className="text-white/90 text-xs truncate font-medium">surjeet636kumar@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group cursor-default">
          <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300 shadow-lg">
            <MapPin size={18} />
          </div>
          <div className="text-left">
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-tight">Location</p>
            <p className="text-white/90 text-sm font-medium">Gurugram, Haryana</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-12 text-white/40">
        {[ExternalLink, Link, Globe, FileText].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -2, color: '#2dd4bf' }}
            className="cursor-pointer transition-colors"
          >
            <Icon size={18} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
