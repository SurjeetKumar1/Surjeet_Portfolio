import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Medal, Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeetcode } from '@fortawesome/free-brands-svg-icons';

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const mainBadges = [
    {
      title: "200 Days Badge 2025",
      image: "https://res.cloudinary.com/di6zndqso/image/upload/v1776324062/200_day_badge_svx5p4.png",
      link: "https://leetcode.com/u/surjeet_a1/",
      category: "Consistency"
    },
    {
      title: "50 SQL Queries Challenge",
      image: "https://res.cloudinary.com/di6zndqso/image/upload/v1776324059/50_SQl_query_bpet0a.png",
      link: "https://leetcode.com/u/surjeet_a1/",
      category: "SQL Mastery"
    },
    {
      title: "Cyber Security Scorecard",
      image: "https://res.cloudinary.com/di6zndqso/image/upload/v1776324243/Latest_GEC_Result_2_1_txrht3.jpg",
      link: "https://res.cloudinary.com/di6zndqso/image/upload/v1776324243/Latest_GEC_Result_2_1_txrht3.pdf",
      category: "90/100 Marks"
    },
    {
      title: "Microsoft LS Ambassador (Alpha)",
      image: "https://res.cloudinary.com/di6zndqso/image/upload/v1776327548/Alpha_MLSA_xchvte.jpg",
      link: "https://mvp.microsoft.com/en-us/studentambassadors",
      category: "Milestone"
    },
    {
      title: "Microsoft LS Ambassador (Beta)",
      image: "https://res.cloudinary.com/di6zndqso/image/upload/v1776327548/Beeta_MLSA_w2eqke.jpg",
      link: "https://mvp.microsoft.com/en-us/studentambassadors",
      category: "Milestone"
    },
    {
      title: "Zen AI Study Jam",
      image: "https://res.cloudinary.com/di6zndqso/image/upload/v1776328579/Zen_Ai_study_Jam_Certificates_kr207h.jpg",
      link: "https://res.cloudinary.com/di6zndqso/image/upload/v1776328579/Zen_Ai_study_Jam_Certificates_kr207h.pdf",
      category: "Google Cloud Certificate"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 pb-10"
    >
      {/* Header */}
      <motion.section variants={itemVariants}>
        <h2 className="text-white text-3xl font-bold mb-4 mt-4 md:mt-0 teal-underline">Badges & Achievements</h2>
        <p className="text-white/40 text-sm font-medium">A visual overview of technical milestones and competitive journey.</p>
      </motion.section>

      {/* Achievement Highlights */}
      <motion.section variants={itemVariants} className="mt-8">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {[
            { val: '500+', label: 'DSA Problems' },
            { val: '50+', label: 'SQL Solutions' },
            { val: 'Qualified', label: 'GATE 2026' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, borderColor: 'rgba(45, 212, 191, 0.2)' }}
              className="bg-[#2b2b2c] p-4 sm:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-white/5 transition-all group shadow-lg text-center md:text-left"
            >
              <h4 className="text-teal-400 text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform origin-center md:origin-left">{item.val}</h4>
              <p className="text-white/40 text-[8px] sm:text-[9px] md:text-[11px] uppercase font-bold tracking-[0.1em] md:tracking-[0.2em] leading-relaxed line-clamp-2 md:line-clamp-none whitespace-pre-line md:whitespace-normal">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Badges Grid - Focused on Images */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainBadges.map((badge, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group relative bg-[#2b2b2c] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:border-teal-400/30"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-black/20">
              <img
                src={badge.image}
                alt={badge.title}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1f] via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-6 relative">
              <span className="text-teal-400 text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block">{badge.category}</span>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl font-bold">{badge.title}</h3>
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-teal-400 hover:text-black transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* LeetCode Profile Showcase */}
      <motion.section variants={itemVariants}>
        <div className="relative bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] rounded-[32px] md:rounded-[40px] p-0.5 border border-white/5 overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>

          <div className="bg-[#1e1e1f]/40 backdrop-blur-sm rounded-[31px] md:rounded-[39px] p-6 md:p-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-3/5 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-teal-400/50 transition-all duration-500">
                <img
                  src="https://res.cloudinary.com/di6zndqso/image/upload/v1776324037/leetcode_profile_ypgvy3.png"
                  alt="LeetCode Profile"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-teal-400/10 px-4 py-2 rounded-full mb-4 md:mb-6 border border-teal-400/20">
                  <FontAwesomeIcon icon={faLeetcode} className="text-[#FFA116]" />
                  <span className="text-teal-400 text-[10px] font-bold uppercase tracking-widest">Global Profile</span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">Algorithmic Mastery</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                  Solving complex algorithmic problems with a focus on optimization, clean code, and advanced database querying.
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5">
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-bold mb-1">Status</p>
                    <p className="text-white text-sm md:text-base font-bold">Active Solver</p>
                  </div>
                  <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5">
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-bold mb-1">Focus</p>
                    <p className="text-white text-sm md:text-base font-bold">DSA & SQL</p>
                  </div>
                </div>

                <a
                  href="https://leetcode.com/u/surjeet_a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-teal-400 text-black px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-teal-300 transition-all group/btn shadow-[0_10px_30px_rgba(45,212,191,0.2)] text-sm md:text-base w-full md:w-auto justify-center md:justify-start"
                >
                  Explore Profile <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


    </motion.div>
  );
};

export default Achievements;
