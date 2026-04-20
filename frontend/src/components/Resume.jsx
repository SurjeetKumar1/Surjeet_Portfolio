import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Trophy } from 'lucide-react';

const TimelineItem = ({ title, company, date, description }) => (
  <div className="relative pl-8 pb-10 group">
    {/* Line */}
    <div className="absolute left-[11px] top-8 bottom-[-8px] w-[1px] bg-white/10 group-last:bg-transparent"></div>
    {/* Dot */}
    <div className="absolute left-[8px] top-2 w-[7px] h-[7px] rounded-full bg-teal-400 border-[1px] border-[#1e1e1f] shadow-[0_0_0_2px_#1e1e1f,0_0_0_5px_rgba(45,212,191,0.2)]"></div>

    <div className="bg-[#2b2b2c] p-4 sm:p-6 rounded-2xl border border-white/5 shadow-lg group-hover:border-white/10 transition-colors">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h4 className="text-white text-lg font-bold mb-1">{title}</h4>
          <p className="text-white/60 text-sm font-medium">{company}</p>
        </div>
        <span className="inline-block text-teal-400 text-xs font-semibold mt-2 sm:mt-0 px-3 py-1 bg-teal-400/10 rounded-full">{date}</span>
      </div>
      <div className="text-white/70 text-sm leading-relaxed space-y-3 mt-4">
        {Array.isArray(description) ? (
          description.map((desc, i) => (
            <p key={i} className="flex gap-2">
              <span className="text-teal-400/50 mt-1">➤</span>
              <span>{desc}</span>
            </p>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  </div>
);

const SkillCategory = ({ category, skills }) => (
  <div className="bg-[#2b2b2c] p-6 rounded-2xl border border-white/5 shadow-lg hover:border-white/10 transition-colors">
    <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">{category}</h4>
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1.5 bg-[#1e1e1f] text-white/80 text-xs font-medium rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Resume = () => {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-white text-3xl font-bold mb-12 mt-4 md:mt-0 teal-underline">
        Career Snapshot
      </motion.h2>

      <div className="space-y-12">
        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg">
              <Briefcase size={18} />
            </div>
            <h3 className="text-white text-2xl font-bold">Experience</h3>
          </div>

          <div className="ml-2">
            <TimelineItem
              title="Software Developer Intern"
              company="Shubh Hyundai | Palanpur, Gujarat"
              date="Dec 2025 — Present"
              description={[
                "Worked on AutoAtlas, a scalable showroom management platform; built Bodyshop Flow and Mechanical Service Flow handling 100+ vehicles/day, along with vehicle tracking and real-time notifications using Agile methodology, now live across 2 locations.",
                "Eliminated Excel-based processes with a centralized data system, reducing manual effort by ~90% and improving operational accuracy; applied database indexing to optimize query performance.",
                "Automated releases via CI/CD (GitHub Actions + AWS S3), cutting deployment overhead by ~90%; enforced Role-Based Access Control (RBAC) across Sales, Operations, and Management roles."
              ]}
            />
            <TimelineItem
              title="Full Stack Developer Intern"
              company="Bharat Coking Coal Limited (BCCL) | Dhanbad, Jharkhand"
              date="July 2024 — Aug 2024"
              description={[
                "Developed a full-stack web application with secure JWT-based authentication, protected route middleware, and REST APIs; designed for internal department use with a focus on scalability and clean system design.",
                "Implemented GitHub Actions CI/CD pipeline for automated build and deployment, applying industry-standard DevOps practices and gaining hands-on production environment experience."
              ]}
            />
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-white text-2xl font-bold">Education</h3>
          </div>

          <div className="ml-2">
            <TimelineItem
              title="Central University of Haryana"
              company="B.Tech in Computer Science & Engineering | CGPA: 7.7/10"
              date="2022 — 2026"
              description="Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks."
            />
          </div>
        </motion.div>

        {/* Leadership & Activities */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg">
              <Trophy size={18} />
            </div>
            <h3 className="text-white text-2xl font-bold">Leadership & Activities</h3>
          </div>

          <div className="ml-2">
            <TimelineItem
              title="Microsoft Learn Student Ambassador (MLSA)"
              company="Community Mentorship & Workshops"
              date="Present"
              description="Mentored 100+ students on software development and career readiness; organized workshops on cloud computing and modern web development."
            />
            <TimelineItem
              title="LeetCode – Competitive Programming"
              company="Problem Solving & Algorithms"
              date="Consistent Setup"
              description="Solved 500+ DSA problems across arrays, trees, graphs, DP, and more; maintained a 200+ day streak, demonstrating consistent practice and strong problem-solving discipline."
            />
            <TimelineItem
              title="Vice President"
              company="Coding Ninjas Club (CUH Chapter)"
              date="2023 — 2024"
              description="Managed campus-wide coding competitions and technical quizzes, fostering a competitive programming culture among university students."
            />
            <TimelineItem
              title="Core Team Member"
              company="Bytecode Learn Club"
              date="2022 — 2023"
              description={[
                "Delivered sessions on coding and web development.",
                "Mentored students in programming and career guidance.",
                "Promoted collaborative learning and technical growth."
              ]}
            />
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg">
              <Code2 size={18} />
            </div>
            <h3 className="text-white text-2xl font-bold">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCategory category="Languages" skills={['C', 'C++', 'JavaScript', 'SQL']} />
            <SkillCategory category="Frontend" skills={['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'React.js', 'Next.js', 'Redux']} />
            <SkillCategory category="Backend" skills={['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Microservices']} />
            <SkillCategory category="Databases & Caching" skills={['MongoDB', 'MySQL', 'Redis']} />
            <SkillCategory category="DevOps & Cloud" skills={['AWS EC2', 'AWS S3', 'AWS Lambda', 'SQS', 'Docker', 'Kubernetes', 'Nginx', 'GitHub Actions', 'Linux']} />
            <SkillCategory category="AI & Dev Tools" skills={['Windsurf', 'Cursor', 'Git', 'Postman', 'Jest']} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
