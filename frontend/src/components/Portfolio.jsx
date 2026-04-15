'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PortfolioCard from "@/components/PortfolioCard";

const slides = [
  // { src: '/admin_dashboard/portfolio_login_page.png', label: 'Profound Portfolio — Personal Brand' },
  { src: '/admin_dashboard/admin_dashboard.png', label: 'Admin Dashboard - Portfolio' },
  { src: '/projectImages/Wanderlust.png', label: 'Wanderlust — Property Rental Platform' },
  { src: '/projectImages/Social Media Platform.png', label: 'Linkify — Social Media Platform' },
  { src: '/projectImages/Chat Aplication.png', label: 'Apna AI — AI Chat Application' },
  { src: '/projectImages/Zeroda.png', label: 'Zeroda — Trading Dashboard' },
  { src: '/projectImages/holdings.png', label: 'Kite — Trading Interface' },
];

const projects = [
  {
    title: "Profound Portfolio — Personal Brand",
    description: "A high-performance personal portfolio built with Next.js, Framer Motion, and a custom Node.js backend for admin management. Features a 'Floating Command Center' dashboard and optimized file handling.",
    imageUrl: "/admin_dashboard/portfolio_login_page.png",
    linkLabel: "Portfolio Project",
    githubUrl: "https://github.com/SurjeetKumar1/Surjeet_Portfolio.git",
    liveUrl: "https://surjeet-potfolio.vercel.app/"
  },
  {
    title: "Wanderlust — Property Rental Platform",
    description: "A secure property rental backend platform featuring 15+ REST APIs, JWT authentication, and Mapbox integrations. Deployed via GitHub Actions to AWS EC2.",
    imageUrl: "/projectImages/Wanderlust.png",
    linkLabel: "Wanderlust Backend",
    githubUrl: "https://github.com/SurjeetKumar1/Wanderlust",
    liveUrl: "https://wanderlust-3sxl.onrender.com/listings"
  },
  {
    title: "Linkify — Social Media Platform",
    description: "Real-time social media platform with a Next.js + Redux frontend, and scalable Node.js backend supporting 20+ user routes. Features PM2 optimization for 99% uptime.",
    imageUrl: "/projectImages/Social Media Platform.png",
    linkLabel: "Linkify App",
    githubUrl: "https://github.com/SurjeetKumar1/Linkify-frontend",
    liveUrl: "https://linkify-nine-jet.vercel.app/"
  },
  {
    title: "Apna AI — AI Chat Application",
    description: "A ChatGPT-like AI chatbot integrating the GPT-4o-mini API with full persistent conversation storage in MongoDB and a React/Node.js stack.",
    imageUrl: "/projectImages/Chat Aplication.png",
    linkLabel: "Apna AI Chatbot",
    githubUrl: "https://github.com/SurjeetKumar1/Apna-AI-Frontend",
    liveUrl: "https://apna-ai-rose.vercel.app/login"
  },
  {
    title: "Stock Trading Platform — Zerodha Clone",
    description: "Full-stack Zerodha clone with a secure Node.js/JWT backend, 100+ simulated stock entries in MongoDB, and a React-powered trading interface.",
    imageUrl: "/projectImages/Zeroda.png",
    linkLabel: "Zerodha Clone",
    githubUrl: "https://github.com/SurjeetKumar1/Stock-Trading-Platform",
    liveUrl: "https://zerodha-snowy-three.vercel.app/"
  },
  {
    title: "Kite Dashboard — Trading Interface",
    description: "A fast, clean trading dashboard inspired by Zerodha Kite, featuring real-time-like visualizations and interactive portfolio charts.",
    imageUrl: "/projectImages/holdings.png",
    linkLabel: "Kite App",
    githubUrl: "#",
    liveUrl: "https://zerodha-kite-kappa.vercel.app/login"
  }
];

const ITEMS_PER_PAGE = 4;
const AUTOPLAY_INTERVAL = 3500;

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => next(), AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ height: '380px' }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[current].src} alt={slides[current].label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute bottom-6 left-8">
            <span className="text-white font-bold text-xl drop-shadow-lg tracking-wide">{slides[current].label}</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-teal-400/80 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm">
        <ChevronLeft size={20} />
      </button>

      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-teal-400/80 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm">
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-5 right-8 z-20 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-teal-400' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>

      <div className="absolute top-4 right-5 z-20 text-white/50 text-xs font-semibold tabular-nums backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full border border-white/10">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 variants={itemVariants} className="text-white text-3xl font-bold mb-12 flex items-center justify-between">
        <span className="teal-underline">Creative Showcase</span>
      </motion.h2>

      <motion.div variants={itemVariants} className="mb-12">
        <ProjectSlider />
      </motion.div>

      {/* Paginated Project Grid */}
      <motion.div variants={itemVariants} className="min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div variants={itemVariants} className="mt-12 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-3 rounded-2xl border border-white/10 transition-all ${currentPage === 1
              ? 'text-white/20 cursor-not-allowed'
              : 'text-white hover:bg-teal-400 hover:text-black hover:border-teal-400'
              }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl font-bold transition-all border ${currentPage === i + 1
                  ? 'bg-teal-400 text-black border-teal-400'
                  : 'text-white/40 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-2xl border border-white/10 transition-all ${currentPage === totalPages
              ? 'text-white/20 cursor-not-allowed'
              : 'text-white hover:bg-teal-400 hover:text-black hover:border-teal-400'
              }`}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Portfolio;


