'use client';

const Navbar = ({ activeTab, setActiveTab }) => {
  const links = ['About', 'Resume', 'Projects', 'Contact', 'Gallery'];

  return (
    <>
      <nav className="hidden lg:flex absolute top-0 right-0 bg-[#2b2b2c]/80 backdrop-blur-md px-10 py-5 rounded-bl-[25px] rounded-tr-[25px] border-b border-l border-white/5 z-10 shadow-xl">
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActiveTab(link)}
                className={`text-sm font-semibold transition-colors ${activeTab === link ? 'text-teal-400' : 'text-white/70 hover:text-white'}`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#2b2b2c]/95 backdrop-blur-3xl px-2 py-4 border-t border-white/5 z-50 rounded-t-[20px] shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
        <ul className="flex justify-around items-center">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActiveTab(link)}
                className={`text-[11px] font-bold transition-all px-3 py-1.5 rounded-xl ${activeTab === link
                  ? 'text-teal-400 bg-teal-400/10'
                  : 'text-white/40'
                  }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
