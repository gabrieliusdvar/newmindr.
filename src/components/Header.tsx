import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

export default function Header() {
  const { t } = useLanguage();
  const { openModal, openTrialModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleTryForFree = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    openTrialModal();
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/classes', label: t.header.classes || 'Classes' },
    { to: '/about', label: t.header.about },
    { to: '/process', label: t.header.studyingProcess },
    { to: '/blog', label: t.header.blog },
    { to: '/contact', label: t.header.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-900">
      <nav className="container mx-auto px-5 lg:px-6 3xl:px-8 py-3.5 sm:py-4 3xl:py-5 flex items-center justify-between">
        {/* Left side - Logo and Courses */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <Link
            to="/"
            className="text-[26px] sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tighter shrink-0 hover:scale-110 active:scale-95 transition-all duration-300 leading-none translate-y-[2px] sm:translate-y-0"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            newmindr.
          </Link>
          <button
            onClick={() => openModal('courses')}
            className="hidden sm:flex items-center gap-2 cursor-pointer group hover:bg-gray-100 px-2.5 py-1.5 rounded-lg transition-colors border-2 border-transparent hover:border-gray-900"
          >
            <Gift className="w-4 h-4 text-gray-900" />
            <span className="text-gray-900 font-medium whitespace-nowrap text-xs sm:text-sm">{t.header.ourCourses}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-900 transition-transform group-hover:rotate-180" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-900 font-medium hover:text-gray-700 transition-colors whitespace-nowrap text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            onClick={handleTryForFree}
            className="px-4 py-2 bg-yellow-400 border-2 border-gray-900 rounded-lg font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-y-1 active:shadow-none transition-all whitespace-nowrap text-sm"
          >
            {t.header.tryForFree}
          </button>
        </div>

        {/* Mobile/Tablet Controls */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <button
            onClick={handleTryForFree}
            className="hidden sm:block px-3 py-1.5 bg-yellow-400 border-2 border-gray-900 rounded-lg font-bold text-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-y-1 active:shadow-none transition-all text-xs"
          >
            {t.header.tryForFree}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border-2 border-gray-900 min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-[64px] bottom-0 bg-white z-40 transition-transform duration-300 lg:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button
            onClick={() => {
              openModal('courses');
              setIsMenuOpen(false);
            }}
            className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-900 rounded-xl group"
          >
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-emerald-500" />
              <span className="font-black text-gray-900 uppercase italic">{t.header.ourCourses}</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-900 -rotate-90" />
          </button>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black text-gray-900 p-4 border-2 border-transparent hover:border-gray-900 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={handleTryForFree}
            className="w-full py-4 bg-yellow-400 border-2 border-gray-900 rounded-xl font-bold text-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all text-xl uppercase italic mt-4"
          >
            {t.header.tryForFree}
          </button>
        </div>
      </div>
    </header>
  );
}
