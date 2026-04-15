'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const GalleryItem = ({ title, imageUrl, onClick }) => (
  <motion.div
    layoutId={imageUrl}
    onClick={onClick}
    className="relative group rounded-[2rem] overflow-hidden border border-white/5 hover:border-teal-400/30 transition-all shadow-lg aspect-[3/4] bg-[#2b2b2c] cursor-zoom-in"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      onError={(e) => {
        e.target.style.display = 'none';
        const parent = e.target.parentElement;
        const div = document.createElement('div');
        div.className = 'w-full h-full flex flex-col items-center justify-center bg-[#1e1e1f] text-white/30 text-xs font-semibold p-4 text-center absolute inset-0';
        div.innerText = title + '\n(Placeholder Image)';
        parent.insertBefore(div, parent.firstChild);
      }}
    />
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-5 flex flex-col items-start justify-end translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] sm:text-sm drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
        {title}
      </h3>
    </div>
  </motion.div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const galleryItems = [
    { title: "Bytecode Ideathon – Representative", imageUrl: "/galleryImg/Bytecode.jpg" },
    { title: "MLSA Goodies", imageUrl: "/galleryImg/MLSA.png" },
    // { title: "Idea represent", imageUrl: "/galleryImg/Bytecode2.jpg" },
    { title: "Coding Ninjas Club CUH", imageUrl: "/galleryImg/codingNinjas.jpg" },
    { title: "Science Day(2nd year of College)", imageUrl: "/galleryImg/scienceday.jpeg" }
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-white text-3xl font-bold mb-12 flex items-center justify-between">
        <span className="teal-underline">Pixels & Passion</span>
      </motion.h2>

      <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              layoutId={selectedImage.imageUrl}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex items-center justify-center w-full overflow-hidden">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
              <div className="text-center px-4">
                <p className="text-white text-lg font-bold uppercase tracking-[0.3em] sm:text-2xl drop-shadow-2xl">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;

