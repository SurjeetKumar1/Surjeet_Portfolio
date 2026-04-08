'use client';

const Navbar = ({ activeTab, setActiveTab }) => {
  const links = ['About', 'Resume', 'Portfolio', 'Contact', 'Gallery'];
  
  return (
    <nav className="hidden lg:flex absolute top-0 right-0 bg-[#2b2b2c]/80 backdrop-blur-md px-10 py-5 rounded-bl-[40px] rounded-tr-[40px] border-b border-l border-white/5 z-10 shadow-xl">
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
  );
};

export default Navbar;
