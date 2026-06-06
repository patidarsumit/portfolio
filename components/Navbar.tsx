import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-nav bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <a href='#hero' className='flex items-center gap-2 group'>
            <div className='bg-primary-600 p-1.5 rounded-lg text-white transform group-hover:rotate-12 transition-transform'>
              <Code2 size={24} />
            </div>
            <span className='font-bold text-xl tracking-tight hidden sm:block'>
              sumit<span className='text-primary-600'>.</span>patidar
            </span>
          </a>

          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
              >
                {link.name}
              </a>
            ))}
            <div className='h-6 w-px bg-slate-200 dark:bg-slate-800 ml-2 mr-2'></div>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400'
              aria-label='Toggle Theme'
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href='#contact'
              className='px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity'
            >
              Hire Me
            </a>
          </div>

          <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400'
              aria-label='Download Resume'
            >
              <FileText size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400'
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors'
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className='px-4 py-6 space-y-4'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600'
            >
              {link.name}
            </a>
          ))}
          <a
            href='#contact'
            onClick={() => setIsMobileMenuOpen(false)}
            className='block w-full py-3 bg-primary-600 text-white text-center rounded-xl font-semibold'
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
