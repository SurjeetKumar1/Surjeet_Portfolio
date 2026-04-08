import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const PortfolioCard = ({ title, description, imageUrl, linkLabel, githubUrl }) => {
  return (
    <div className="group bg-[#212123] rounded-3xl overflow-hidden border border-white/5 hover:border-teal-400/30 transition-all">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-teal-400 border border-white/10">
            <ExternalLink size={20} />
          </div>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:text-teal-400 border border-white/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <p className="text-white/50 text-xs tracking-wide mb-3">URL : {linkLabel}</p>
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-teal-400 text-xs font-semibold transition-colors group/link"
          >
            <GithubIcon size={14} />
            <span className="group-hover/link:underline">View on GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;

