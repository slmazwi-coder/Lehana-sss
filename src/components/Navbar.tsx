import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'Activities', path: '/activities' },
  { name: 'General Application', path: '/admissions' },
  { name: 'Boarding Application', path: '/boarding' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="w-full sticky top-0 z-50" style={ { background: '#D4A017', borderBottom: '3px solid #8B1A1A' } }>

      {/* ── Top bar: Logo + School name + Student Portal ── */}
      <div className="w-full" style={ { borderBottom: '1px solid rgba(139,26,26,0.3)' } }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md" style={ { border: '2px solid #8B1A1A' } }>
                <img
                  src="/lslogo.png"
                  alt="Lehana SSS logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="md:hidden text-sm font-bold block leading-tight" style={ { color: '#8B1A1A' } }>
                  Lehana SSS
                </span>
                <span className="hidden md:block text-base font-bold leading-tight" style={ { color: '#8B1A1A' } }>
                  Lehana Senior Secondary School
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase" style={ { color: 'rgba(139,26,26,0.6)' } }>
                  Enter to Learn
                </span>
              </div>
            </Link>

            {/* Desktop: Student Portal button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                to="/student/login"
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2',
                  location.pathname.startsWith('/student')
                    ? 'text-[#D4A017] bg-[#8B1A1A]'
                    : 'text-[#8B1A1A] border-2 border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-[#D4A017]'
                )}
              >
                <User size={15} /> Student Portal
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <div className="md:hidden flex items-center shrink-0 ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                style={ { color: '#8B1A1A' } }
                aria-label="Open menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: Nav links (desktop only) ── */}
      <div className="hidden md:block w-full" style={ { background: '#D4A017' } }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-x-1 gap-y-0 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                style={
                  location.pathname === link.path
                    ? { color: '#D4A017', background: '#8B1A1A', fontWeight: 700 }
                    : { color: '#8B1A1A' }
                }
                onMouseEnter={e => {
                  if (location.pathname !== link.path) {
                    (e.target as HTMLElement).style.background = 'rgba(139,26,26,0.12)';
                  }
                }}
                onMouseLeave={e => {
                  if (location.pathname !== link.path) {
                    (e.target as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {isOpen && (
        <div className="md:hidden shadow-lg" style={ { background: '#D4A017', borderTop: '1px solid rgba(139,26,26,0.3)' } }>
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={
                  location.pathname === link.path
                    ? { color: '#D4A017', background: '#8B1A1A', fontWeight: 700 }
                    : { color: '#8B1A1A' }
                }
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2" style={ { borderTop: '1px solid rgba(139,26,26,0.3)' } }>
              <Link
                to="/student/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-colors"
                style={
                  location.pathname.startsWith('/student')
                    ? { color: '#D4A017', background: '#8B1A1A' }
                    : { color: '#8B1A1A', background: 'rgba(139,26,26,0.1)' }
                }
              >
                <User size={15} /> Student Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
