import React from 'react';

interface FooterProps {
  onOpenAssessment: () => void;
  onOpenCareerPaths: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment, onOpenCareerPaths }) => {
  return (
    <footer className="bg-background-subtle border-t border-charcoal-200/80 pt-16 pb-12 text-charcoal-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-charcoal-200/60">
          
          {/* Brand Col (2 cols on md) */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-charcoal-900 flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 8c-2.5 0-4 1.8-4 4s1.5 4 4 4c2.8 0 4.2-2.5 5-4 .8-1.5 2.2-4 5-4 2.5 0 4 1.8 4 4s-1.5 4-4 4c-2.8 0-4.2-2.5-5-4-.8-1.5-2.2-4-5-4z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-charcoal-900 tracking-tight">
                Career<span className="text-brand-600">Loop</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-charcoal-500 max-w-sm leading-relaxed">
              Career Loop is the modern Career-Tech platform connecting career discovery, skill intelligence, and placement support into one verified loop.
            </p>

            <div className="flex items-center gap-3 pt-2 text-charcoal-400">
              <a href="#" aria-label="Twitter X" className="w-8 h-8 rounded-lg bg-white border border-charcoal-200 flex items-center justify-center hover:text-charcoal-900 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white border border-charcoal-200 flex items-center justify-center hover:text-charcoal-900 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white border border-charcoal-200 flex items-center justify-center hover:text-charcoal-900 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-4 font-mono">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-charcoal-600">
              <li>
                <button onClick={onOpenCareerPaths} className="hover:text-charcoal-900 transition-colors text-left">
                  Career Guidance
                </button>
              </li>
              <li>
                <a href="#solutions" className="hover:text-charcoal-900 transition-colors">
                  Skill Development
                </a>
              </li>
              <li>
                <a href="#dashboard-showcase" className="hover:text-charcoal-900 transition-colors">
                  Placement Support
                </a>
              </li>
              <li>
                <a href="#institutions" className="hover:text-charcoal-900 transition-colors">
                  Institutional Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-4 font-mono">
              Company
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-charcoal-600">
              <li>
                <a href="#career-loop" className="hover:text-charcoal-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal-900 transition-colors flex items-center gap-1">
                  <span>Careers</span>
                  <span className="text-[10px] bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded font-mono">We're hiring</span>
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-charcoal-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Legal Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-4 font-mono">
              Resources
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-charcoal-600">
              <li>
                <button onClick={onOpenAssessment} className="hover:text-charcoal-900 transition-colors text-left">
                  Take Diagnostic
                </button>
              </li>
              <li>
                <a href="#resources" className="hover:text-charcoal-900 transition-colors">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-charcoal-900 transition-colors">
                  Blog
                </a>
              </li>
              <li className="pt-2 border-t border-charcoal-200/50">
                <a href="#" className="hover:text-charcoal-900 transition-colors text-charcoal-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal-900 transition-colors text-charcoal-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <div>
            © {new Date().getFullYear()} Career Loop Inc. All rights reserved. Built for modern Career-Tech intelligence.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-charcoal-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              All Diagnostic Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
