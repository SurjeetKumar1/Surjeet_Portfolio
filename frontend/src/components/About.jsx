import { motion } from 'framer-motion';
import PortfolioCard from "@/components/PortfolioCard";

const About = () => {
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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants}>
        <h2 className="text-white text-3xl font-bold mb-8 teal-underline">Digital Identity</h2>
        
        <div className="space-y-6 text-white/70 leading-relaxed max-w-3xl">
          <p>
            I'm <span className="text-white font-semibold text-lg">Surjeet</span>, an aspiring Software Engineer based in Gurugram, Haryana. 
            Proficient in full-stack development (MERN stack), Data Structures &amp; Algorithms, and CI/CD on AWS. Eager to leverage hands-on project experience and problem-solving skills to contribute to a challenging SDE role.
          </p>
          <p>
            I am currently pursuing my Bachelor of Technology in Computer Science &amp; Engineering from the <span className="text-teal-400/80 font-medium italic">Central University of Haryana</span> (Class of '26). I have interned at Bharat Coking Coal Limited (BCCL) as a Full Stack Developer, where I deployed applications on AWS and integrated CI/CD pipelines.
          </p>
        </div>
      </motion.section>

      {/* Highlights & Successes */}
      <motion.section variants={itemVariants} className="mt-16">
        <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
          <span className="text-teal-400 text-2xl">☆</span> Highlights & Successes
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { val: '500+', label: 'LeetCode Problems' },
            { val: '15+', label: 'REST APIs Built' },
            { val: '2+', label: 'Leadership Roles' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: 'rgba(45, 212, 191, 0.2)' }}
              className="bg-[#2b2b2c] p-8 rounded-[30px] border border-white/5 transition-colors group shadow-lg"
            >
              <h4 className="text-teal-400 text-4xl font-bold mb-3 group-hover:scale-110 transition-transform origin-left">{item.val}</h4>
              <p className="text-white/40 text-[11px] uppercase font-bold tracking-[0.2em] leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Portfolios */}
      <motion.section variants={itemVariants} className="mt-16">
        <div className="mb-8">
          <h3 className="text-white text-xl font-bold mb-2 flex items-center gap-3">
            <span className="text-teal-400 text-2xl">📁</span> Featured Portfolios
          </h3>
          <p className="text-white/40 text-sm italic">A glimpse into my professional journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortfolioCard 
            title="Wanderlust Platform"
            description="A secure property rental backend platform featuring 15+ REST APIs, JWT authentication, and Mapbox integrations."
            imageUrl="/projectImages/Wanderlust.png"
            linkLabel="Wanderlust"
            githubUrl="https://github.com/SurjeetKumar1/Wanderlust"
          />
          <PortfolioCard 
            title="Linkify Social Media"
            description="Real-time social media platform with a Next.js + Redux frontend, and scalable Node.js backend supporting 20+ user routes."
            imageUrl="/projectImages/Social Media Platform.png"
            linkLabel="Linkify"
            githubUrl="https://github.com/SurjeetKumar1/Linkify-frontend"
          />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
