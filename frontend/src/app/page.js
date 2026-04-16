'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";

export default function Home() {
  const [activeTab, setActiveTab] = useState('About');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'About': return <About />;
      case 'Resume': return <Resume />;
      case 'Projects': return <Portfolio />;
      case 'Achievements': return <Achievements />;
      case 'Contact': return <Contact />;
      case 'Gallery': return <Gallery />;
      default: return <About />;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#1e1e1f] rounded-[25px] lg:rounded-[25px] p-3 sm:p-5 lg:p-12 min-h-full border border-white/5 relative"
    >
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
