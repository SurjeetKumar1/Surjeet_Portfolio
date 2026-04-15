import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, company, date, description }) => (
  <div className="relative pl-8 pb-10 group">
    {/* Line */}
    <div className="absolute left-[11px] top-8 bottom-[-8px] w-[1px] bg-white/10 group-last:bg-transparent"></div>
    {/* Dot */}
    <div className="absolute left-[8px] top-2 w-[7px] h-[7px] rounded-full bg-teal-400 border-[1px] border-[#1e1e1f] shadow-[0_0_0_2px_#1e1e1f,0_0_0_5px_rgba(45,212,191,0.2)]"></div>

    <div className="bg-[#2b2b2c] p-3 sm:p-5 rounded-2xl border border-white/5 shadow-lg group-hover:border-white/10 transition-colors">
      <h4 className="text-white text-base font-bold mb-1">{title}</h4>
      <p className="text-white/60 text-sm mb-3 font-medium">{company}</p>
      <span className="inline-block text-teal-400 text-xs font-semibold mb-3 tracking-wide">{date}</span>
      <div className="text-white/70 text-sm leading-relaxed space-y-2">
        {Array.isArray(description) ? (
          description.map((desc, i) => (
            <p key={i} className="flex gap-2">
              <span className="text-teal-400/50">➤</span> {desc}
            </p>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  </div>
);

const SkillBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white text-sm font-semibold">{name}</span>
      <span className="text-white/40 text-xs">{percentage}%</span>
    </div>
    <div className="w-full bg-[#1e1e1f] rounded-full h-1.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-teal-400 h-1.5 rounded-full"
      ></motion.div>
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
      <motion.h2 variants={itemVariants} className="text-white text-3xl font-bold mb-12">
        Career Snapshot
      </motion.h2>

      <div className="space-y-12">
        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg">
              <Briefcase size={18} />
            </div>
            <h3 className="text-white text-2xl font-bold">Professional Experience</h3>
          </div>

          <div className="ml-2">
            <TimelineItem
              title="Full Stack Developer Intern"
              company="Shubh Hyundai"
              date="Dec 2025 — Present"
              description={[
                "Architecting a comprehensive MERN stack application to streamline end-to-end automobile showroom operations.",
                "Developing a centralized dashboard for real-time tracking of vehicle inventory, customer engagements, and internal workflows.",
                "Integrating Gupshup API for automated customer communication and real-time chat functionality.",
                "Implementing Firebase Cloud Messaging (FCM) for high-reliability push notifications and user engagement tracking.",
                "Orchestrating cloud deployment on AWS EC2 with S3 for scalable file management and automated CI/CD via GitHub Actions."
              ]}
            />
            <TimelineItem
              title="Full Stack Developer Intern"
              company="Bharat Coking Coal Limited (BCCL)"
              date="July 2024 — Aug 2024"
              description={[
                "Developed and deployed a MERN stack application on AWS EC2 to automate internal processes.",
                "Secured backend routes with custom JWT middleware and implemented role-based access control.",
                "Configured GitHub Actions CI/CD pipeline, enabling zero-downtime deployments and reducing manual setup by 90%.",
                "Collaborated in an Agile environment, conducting code reviews and optimizing API performance by 35%."
              ]}
            />
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg">
              <Briefcase size={18} />
            </div>
            <h3 className="text-white text-2xl font-bold">Leadership & Involvement</h3>
          </div>

          <div className="ml-2">
            <TimelineItem
              title="Microsoft Learn Student Ambassador (Beta Milestone)"
              company="Microsoft"
              date="Present"
              description="Led technical workshops and mentored a community of 100+ students on Microsoft technologies (e.g., Github), fostering skill development."
            />
            <TimelineItem
              title="Vice President"
              company="Coding Ninjas Club (CUH Chapter)"
              date="2023 — 2024"
              description={[
                "Managed and organized campus-wide events, including coding competitions and technical quizzes, for university students.",
                "Led club operations and coordinated activities to foster a competitive programming culture on campus."
              ]}
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
              title="Bachelor of Technology in Computer Science & Engineering"
              company="Central University of Haryana"
              date="Class of '26"
              description="Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks."
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-2xl font-bold mb-8">Technical Skills</h3>

          <div className="bg-[#2b2b2c] p-8 rounded-3xl border border-white/5 shadow-lg">
            <SkillBar name="C / C++" percentage={90} />
            <SkillBar name="JavaScript" percentage={85} />
            <SkillBar name="Data Structures & Algorithms" percentage={85} />
            <SkillBar name="React.js / Next.js / Redux" percentage={85} />
            <SkillBar name="Node.js / Express" percentage={80} />
            <SkillBar name="MongoDB / Redis (Caching) / MySQL" percentage={85} />
            <SkillBar name="AWS (EC2, S3, Lambda, SQS)" percentage={80} />
            <SkillBar name="Docker / Kubernetes / Nginx / PM2" percentage={80} />
            <SkillBar name="Git / GitHub CI/CD" percentage={85} />
            <SkillBar name="Windsurf / Cursor / Antigravity" percentage={95} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
