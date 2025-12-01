import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import svgPaths from "../../imports/svg-u96fq9gvgo";

type Page = 'home' | 'products' | 'solutions' | 'services' | 'projects' | 'media' | 'partners' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home' as Page, label: 'الرئيسية' },
    { key: 'products' as Page, label: 'المنتجات' },
    { key: 'solutions' as Page, label: 'الحلول' },
    { key: 'services' as Page, label: 'الخدمات' },
    { key: 'partners' as Page, label: 'الشركاء' },
    { key: 'projects' as Page, label: 'المشاريع' },
    { key: 'media' as Page, label: 'الميديا' },
    { key: 'about' as Page, label: 'من نحن' },
    { key: 'contact' as Page, label: 'تواصل' },
  ];

  const handleNavClick = (page: Page) => {
    onPageChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" dir="rtl">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-[1440px]">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-9 order-1">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`relative h-7 px-1 transition-colors ${
                  currentPage === item.key
                    ? 'text-amber-500'
                    : 'text-[#303030] hover:text-amber-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base whitespace-nowrap font-bold">
                  {item.label}
                </span>
                {currentPage === item.key && (
                  <motion.div
                    className="absolute bottom-[-2.5px] left-0 right-0 h-[2.5px] bg-[#13499d]"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-[#303030] hover:text-amber-500 order-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Logo */}
          <motion.div
            className="flex-shrink-0 w-40 md:w-48 lg:w-52 order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-full h-auto" viewBox="0 0 213 69" fill="none" preserveAspectRatio="xMidYMid meet">
              <g>
                <g>
                  <path d={svgPaths.pded5400} fill="#F59E0B" />
                  <path d={svgPaths.p1ad51e40} fill="#F59E0B" />
                  <path clipRule="evenodd" d={svgPaths.pf388480} fill="#488ECB" fillRule="evenodd" />
                  <path d={svgPaths.p1fb98800} fill="#13499D" />
                  <path d={svgPaths.p391f2800} fill="#F59E0B" />
                  <path d={svgPaths.p2f6f7b80} fill="#F59E0B" />
                  <path clipRule="evenodd" d={svgPaths.p312fe480} fill="black" fillRule="evenodd" />
                  <path d={svgPaths.p1bce4900} fill="#F59E0B" />
                </g>
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden py-4 border-t border-amber-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`text-right px-4 py-3 rounded-md transition-colors ${
                      currentPage === item.key
                        ? 'bg-amber-500 text-white font-bold'
                        : 'text-[#303030] font-bold hover:bg-gray-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
