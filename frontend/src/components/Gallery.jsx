import { motion } from 'framer-motion';

const GalleryItem = ({ title, imageUrl }) => (
  <div className="relative group rounded-[2rem] overflow-hidden border border-white/5 hover:border-teal-400/30 transition-all shadow-lg aspect-[3/4] bg-[#2b2b2c]">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      onError={(e) => { 
        e.target.style.display='none'; 
        const parent = e.target.parentElement;
        const div = document.createElement('div');
        div.className = 'w-full h-full flex flex-col items-center justify-center bg-[#1e1e1f] text-white/30 text-xs font-semibold p-4 text-center absolute inset-0';
        div.innerText = title + '\\n(Placeholder Image)';
        parent.insertBefore(div, parent.firstChild);
      }}
    />
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col items-start justify-end translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-white text-xl font-bold tracking-wide font-comic sm:text-2xl drop-shadow-md">
        {title}
      </h3>
    </div>
  </div>
);

const Gallery = () => {
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
    { title: "Myself", imageUrl: "/gallery/myself.png" },
    { title: "Tide Trails", imageUrl: "/gallery/tide_trails.png" },
    { title: "Wings in Motion", imageUrl: "/gallery/wings_in_motion.png" },
    { title: "Spiritual Moments", imageUrl: "/gallery/spiritual_moments.png" },
    { title: "Flora & Peace", imageUrl: "/gallery/flora_and_peace.png" },
    { title: "Bites & Plates", imageUrl: "/gallery/bites_and_plates.png" },
    { title: "After Dark", imageUrl: "/gallery/after_dark.png" },
    { title: "Above Us", imageUrl: "/gallery/above_us.png" }
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

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="w-[calc((100%-24px)/2)] sm:w-[calc((100%-48px)/3)] shrink-0">
            <GalleryItem title={item.title} imageUrl={item.imageUrl} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Gallery;
