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
            I'm <span className="text-white font-semibold text-lg">Surjeet</span>, a Software Engineer based in Kannauj, Uttar Pradesh.
            Specializing in the <span className="text-teal-400 font-semibold">MERN Stack</span>, Cloud Computing, and AI-driven development. I focus on building high-performance, scalable systems using tools like <span className="text-teal-400 font-semibold">AWS (EC2/S3)</span>, <span className="text-teal-400 font-semibold">Docker</span>, and CI/CD pipelines, while leveraging advanced AI environments like <span className="text-teal-400 font-semibold">Windsurf</span> and <span className="text-teal-400 font-semibold">Cursor</span> to accelerate engineering cycles.
          </p>
          <p>
            I am currently a <span className="text-white font-medium">Full Stack Developer Intern</span> at <span className="text-teal-400/80 font-medium italic">Shubh Hyundai</span>, where I'm architecting end-to-end showroom management systems. I am also a <span className="text-white font-medium">Microsoft Learn Student Ambassador</span> (Beta), dedicated to mentoring and building technical communities. I'm a CSE student at the Central University of Haryana (Class of '26).
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
            { val: '50+', label: 'REST APIs Built' },
            { val: '3+', label: 'Leadership Roles' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, borderColor: 'rgba(45, 212, 191, 0.2)' }}
              className="bg-[#2b2b2c] p-6 lg:p-8 rounded-2xl lg:rounded-2xl border border-white/5 transition-colors group shadow-lg"
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
            title="Profound Portfolio"
            description="High-performance personal brand platform with a Next.js/Framer Motion frontend and a custom Node.js admin dashboard."
            imageUrl="/admin_dashboard/portfolio_login_page.png"
            linkLabel="Portfolio"
            githubUrl="https://github.com/SurjeetKumar1/Surjeet_Portfolio.git"
          />
          <PortfolioCard
            title="Linkify Social Media"
            description="Real-time social media platform with a Next.js/Redux frontend and scalable Node.js backend."
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
