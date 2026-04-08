import { motion } from 'framer-motion';
import { Smartphone, Mail, Paperclip, Send } from 'lucide-react';

const Contact = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2 variants={itemVariants} className="text-white text-3xl font-bold mb-12 flex items-center justify-between">
        <span className="teal-underline">Let's Connect</span>
      </motion.h2>

      <div className="space-y-12">
        {/* Map Embed */}
        <motion.div variants={itemVariants} className="w-full h-80 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative">
          <div className="absolute inset-0 bg-teal-400 mix-blend-color opacity-10 pointer-events-none"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.426176541315!2d77.7121731!3d13.0084931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11001a1dbfe9%3A0xc6cb1c75955a01df!2sCandeur%20Sunshine!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Details */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-2xl font-bold mb-6">Contact Details</h3>
          <div className="bg-[#2b2b2c] p-8 rounded-3xl border border-white/5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 bg-[#1e1e1f] rounded-2xl flex items-center justify-center text-teal-400 border border-teal-400/10 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300 shadow-md">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1.5">Mobile</p>
                  <p className="text-white/90 text-lg font-medium tracking-wide">+91 93699 72617</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 bg-[#1e1e1f] rounded-2xl flex items-center justify-center text-teal-400 border border-teal-400/10 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300 shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1.5">Email</p>
                  <p className="text-white/90 text-lg font-medium tracking-wide">surjeet636kumar@gmail.com</p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="w-36 h-36 bg-gray-200/90 rounded-2xl p-2 shrink-0 shadow-lg hidden sm:block">
              <div className="w-full h-full border border-gray-400/40 rounded-xl flex items-center justify-center text-gray-500 relative overflow-hidden bg-white">
                <img src="/qr_code.png" alt="QR Code" className="w-full h-full object-cover mix-blend-multiply" onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML = '<span class="text-xs font-semibold">QR Code</span>'; }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-2xl font-bold mb-6">Contact Form</h3>
          <div className="bg-[#2b2b2c] p-8 rounded-3xl border border-white/5 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-[#1e1e1f] text-white/90 placeholder:text-white/30 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#1e1e1f] text-white/90 placeholder:text-white/30 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all font-medium"
                />
              </div>
              
              <textarea 
                placeholder="Your Message" 
                rows="6"
                className="w-full bg-[#1e1e1f] text-white/90 placeholder:text-white/30 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all resize-none font-medium"
              ></textarea>

              <div className="w-full">
                <button 
                  type="button" 
                  className="w-full bg-[#1e1e1f] text-teal-400/80 hover:text-teal-400 hover:bg-[#252526] hover:border-teal-400/20 px-6 py-4 rounded-2xl border border-white/5 flex items-center justify-center gap-3 transition-all font-semibold"
                >
                  <Paperclip size={18} /> Attach PDF (Optional)
                </button>
                <p className="text-white/30 text-xs mt-3 ml-2">Only PDF files up to 1 MB</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                <p className="text-white/30 text-xs max-w-xs leading-relaxed text-center sm:text-left">
                  This site is protected by reCAPTCHA and the Google <span className="underline cursor-pointer hover:text-white/60">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-white/60">Terms of Service</span> apply.
                </p>
                <button 
                  type="submit" 
                  className="bg-[#1e1e1f] text-white/90 hover:text-teal-400 hover:bg-[#252526] hover:border-teal-400/30 px-8 py-4 rounded-2xl border border-white/5 flex items-center justify-center gap-3 transition-all font-bold w-full sm:w-auto"
                >
                  <Send size={18} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;
