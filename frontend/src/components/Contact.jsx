import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Smartphone, Mail, Paperclip, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setStatus({ type: 'error', message: 'Only PDF files are allowed' });
        return;
      }
      if (selectedFile.size > 1024 * 1024) {
        setStatus({ type: 'error', message: 'File size must be less than 1MB' });
        return;
      }
      setFile(selectedFile);
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      if (file) {
        data.append('pdf', file);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/contact`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        setFile(null);
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to server' });
    } finally {
      setLoading(false);
    }
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
            src="https://maps.google.com/maps?q=27.0257699,79.9215322&z=16&output=embed" 
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
                  <p className="text-white/90 text-lg font-medium tracking-wide break-all sm:break-normal">surjeet636kumar@gmail.com</p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="w-36 h-36 bg-white rounded-2xl p-2 shrink-0 shadow-lg hidden sm:block border border-white/10 group cursor-pointer transition-transform hover:scale-105">
              <div className="w-full h-full border border-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/phoneNumberQR/phone_qr.png" 
                  alt="Phone QR" 
                  className="w-full h-full object-contain p-1" 
                  onError={(e) => { 
                    e.target.style.display='none'; 
                    e.target.parentElement.innerHTML = '<div class="text-[10px] text-gray-400 font-bold text-center px-2">QR Code<br/>(Scan to Call)</div>'; 
                  }} 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-2xl font-bold mb-6">Contact Form</h3>
          
          <div className="bg-[#2b2b2c] p-8 rounded-3xl border border-white/5 shadow-lg">
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-2xl flex items-center gap-3 ${status.type === 'success' ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20' : 'bg-red-400/10 text-red-400 border border-red-400/20'}`}
              >
                {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span className="text-sm font-medium">{status.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name" 
                  required
                  className="w-full bg-[#1e1e1f] text-white/90 placeholder:text-white/30 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all font-medium"
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required
                  className="w-full bg-[#1e1e1f] text-white/90 placeholder:text-white/30 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all font-medium"
                />
              </div>
              
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="6"
                required
                className="w-full bg-[#1e1e1f] text-white/90 placeholder:text-white/30 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all resize-none font-medium"
              ></textarea>

              <div className="w-full">
                <input 
                  type="file" 
                  accept=".pdf"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button 
                  type="button" 
                  onClick={() => fileInputRef.current.click()}
                  className={`w-full bg-[#1e1e1f] px-6 py-4 rounded-2xl border border-white/5 flex items-center justify-center gap-3 transition-all font-semibold ${file ? 'text-teal-400 border-teal-400/30' : 'text-teal-400/80 hover:text-teal-400 hover:border-teal-400/20'}`}
                >
                  <Paperclip size={18} /> {file ? file.name : 'Attach PDF (Optional)'}
                </button>
                <p className="text-white/30 text-xs mt-3 ml-2">Only PDF files up to 1 MB</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-end items-center gap-6 pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#1e1e1f] text-white/90 hover:text-teal-400 hover:bg-[#252526] hover:border-teal-400/30 px-8 py-4 rounded-2xl border border-white/5 flex items-center justify-center gap-3 transition-all font-bold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />} 
                  {loading ? 'Sending...' : 'Send Message'}
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
