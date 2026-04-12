'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, MapPin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeetcode } from '@fortawesome/free-brands-svg-icons';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { type: 'lucide', Icon: GithubIcon, url: "https://github.com/SurjeetKumar1" },
    { type: 'lucide', Icon: LinkedinIcon, url: "https://www.linkedin.com/in/surjeet-kumar-b494b6259/" },
    { type: 'fontawesome', icon: faLeetcode, url: "https://leetcode.com/u/surjeet_a1/" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1e1e1f] rounded-2xl lg:rounded-2xl p-5 lg:p-8 flex flex-wrap lg:flex-col items-center text-center w-full lg:w-72 border border-white/5 lg:sticky lg:top-8 h-fit gap-x-4 lg:gap-x-0 transition-shadow duration-300 overflow-hidden"
    >
      {/* Profile Image */}
      <div className="w-16 h-16 lg:w-36 lg:h-36 bg-[#2b2b2c] rounded-xl lg:rounded-2xl lg:mb-6 overflow-hidden flex items-center justify-center border border-white/10 shadow-xl flex-shrink-0">
        <img
          src="/profile_avatar.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-left lg:text-center mt-0 lg:mt-0">
        <h1 className="text-white text-xl lg:text-3xl font-bold mb-1 lg:mb-2 tracking-wide italic" style={{ fontFamily: "'Playfair Display', serif" }}>Surjeet</h1>
        <div className="bg-[#2b2b2c] text-[10px] text-white/80 px-3 lg:px-4 py-1 lg:py-1.5 rounded-lg mb-0 lg:mb-8 uppercase tracking-widest font-bold w-fit lg:mx-auto">
          Full Stack Developer
        </div>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`lg:hidden p-2 text-white/40 hover:text-teal-400 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}
      >
        <ChevronDown size={20} />
      </button>

      {/* Info Items & Socials - Animated for mobile expand */}
      <AnimatePresence>
        {(isExpanded || !isMobile) && (
          <motion.div
            initial={isMobile ? { height: 0, opacity: 0 } : false}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: { 
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2, delay: 0.1 }
              } 
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.1 }
              }
            }}
            className="w-full lg:!h-auto lg:!opacity-100 overflow-hidden lg:overflow-visible"
          >
            <div className="w-full h-[1px] bg-white/5 my-6 lg:mb-8"></div>

            <div className="w-full space-y-6 text-left">
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
                  <p className="text-white/90 text-sm font-medium">Kannauj, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 lg:mt-12 text-white/40 justify-center lg:justify-center">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: '#2dd4bf' }}
                  className="cursor-pointer transition-colors flex items-center justify-center text-[rgb(243,243,243)]"
                >
                  {social.type === 'lucide' ? (
                    <social.Icon size={18} />
                  ) : (
                    <FontAwesomeIcon icon={social.icon} style={{ width: 18, height: 18, }} />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;
