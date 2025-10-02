"use client";

import Image from "next/image";
import logo from "../../assets/Technify-logo.png";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type TimeoutRef = ReturnType<typeof setTimeout> | null;

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
  cta?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    subItems: [
      { label: "Automation Solution", href: "/solutions/automation" },
      { label: "ELV Solution", href: "/solutions/elv" },
      { label: "ICT Solution", href: "/solutions/ict" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Career", href: "/career" },
];

export function Header() {
  const pathname = usePathname();
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<TimeoutRef>(null);

  // Scroll effect for header shrinking
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset dropdown when route changes
  useEffect(() => {
    setDesktopSolutionsOpen(false);
    setMobileSolutionsOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setDesktopSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => setDesktopSolutionsOpen(false), 300);
  };

  const toggleMobileSolutions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileSolutionsOpen(!mobileSolutionsOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans bg-white" style={{ willChange: 'transform' }}>
      {/* Top info bar with enhanced animation and mobile optimization */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.1 
        }}
        className="bg-gradient-to-r from-[#0D1A3A] to-[#1a2f6d] text-white text-[10px] xs:text-xs sm:text-sm py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 relative overflow-hidden"
      >
        {/* Animated background element */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNGRkIzMDAiIHN0cm9rZS13aWR0aD0iMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiLz48L2c+PC9zdmc+')]"
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        </div>
        
        <div className="flex items-center gap-4 xs:gap-6 font-semibold text-[#FFB300] z-10">
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-1"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="inline-block"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              📞
            </motion.span>
            <a href="tel:9999769378" className="hover:underline text-[10px] xs:text-xs sm:text-sm">
              +91 9999769378
            </a>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-1"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="inline-block"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              ✉️
            </motion.span>
            <a href="mailto:info@technify.com" className="hover:underline text-[10px] xs:text-xs sm:text-sm">
              info@technify.com
            </a>
          </motion.span>
        </div>
        
        <div className="flex items-center gap-2 xs:gap-3 z-10">
          {[faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faGooglePlusG].map((icon, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB300] hover:text-white bg-[#ffffff08] rounded-full p-1.5 xs:p-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-colors duration-200"
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                backgroundColor: "rgba(255, 179, 0, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                rotate: { duration: 0.5 }
              }}
              aria-label={`Follow us on ${['Facebook', 'Twitter', 'LinkedIn', 'Pinterest', 'Google+'][index]}`}
            >
              <span className="sr-only">{['Facebook', 'Twitter', 'LinkedIn', 'Pinterest', 'Google+'][index]}</span>
              <FontAwesomeIcon icon={icon} className="text-[#FFB300] text-[10px] xs:text-xs sm:text-sm" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 80, 
          damping: 15,
          delay: 0.3 
        }}
        className={`bg-white w-full transition-all duration-500 ${
          scrolled ? "py-2 shadow-2xl border-b border-[#e5e7eb]" : "py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center flex-shrink-0"
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={logo}
              alt="Technify Logo"
              width={120}
              height={40}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
            />
          </motion.div>

          {/* Desktop Navigation with responsive improvements */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-[#222] font-medium text-xs sm:text-sm lg:text-base" style={{ willChange: 'transform' }}>
            {NAV_ITEMS.map((item, index) =>
              item.subItems ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <motion.button 
                    className="hover:text-[#FFB300] flex items-center gap-1 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="whitespace-nowrap"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.span
                      animate={{ rotate: desktopSolutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      &#9662;
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {desktopSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-3 bg-white shadow-xl rounded-lg z-40 min-w-[180px] sm:min-w-[200px] overflow-hidden border border-gray-100"
                      >
                        {item.subItems.map((sub, subIndex) => (
                          <motion.a
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-3 hover:bg-[#FFB300]/10 hover:text-[#FFB300] transition-colors border-b border-gray-100 last:border-b-0 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                            whileHover={{ 
                              x: 5,
                              backgroundColor: "rgba(255, 179, 0, 0.1)"
                            }}
                          >
                            {sub.label}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`hover:text-[#FFB300] relative group transition-colors duration-300 ${item.cta ? "bg-[#FFB300] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#e5a000] text-xs sm:text-sm" : ""}`}
                  whileHover={{ scale: item.cta ? 1.05 : 1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.span>
                    {item.label}
                  </motion.span>
                  {!item.cta && (
                    <motion.span 
                      className="absolute left-0 bottom-0 w-0 h-[1.5px] sm:h-[2px] bg-[#FFB300] transition-all duration-300 group-hover:w-full"
                      whileHover={{ width: "100%" }}
                    />
                  )}
                </motion.a>
              )
            )}
          </nav>

          {/* Mobile menu button with enhanced touch target */}
          <motion.button 
            className="md:hidden flex flex-col w-8 h-8 sm:w-10 sm:h-10 justify-center items-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <motion.span 
              className="w-5 h-0.5 bg-[#0D1A3A] rounded-full transition-colors duration-200"
              animate={{ 
                rotate: isMenuOpen ? 45 : 0, 
                y: isMenuOpen ? 2 : 0 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.span 
              className="w-5 h-0.5 bg-[#0D1A3A] rounded-full absolute transition-all duration-200"
              animate={{ 
                opacity: isMenuOpen ? 0 : 1,
                width: isMenuOpen ? 0 : 20
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-5 h-0.5 bg-[#0D1A3A] rounded-full transition-colors duration-200"
              animate={{ 
                rotate: isMenuOpen ? -45 : 0, 
                y: isMenuOpen ? -2 : 0 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.button>
        </div>

        {/* Mobile menu with enhanced animation and accessibility */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 py-5 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                {/* Backdrop for better separation */}
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm -z-10"></div>
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.subItems ? (
                    <div className="border-b border-gray-100 last:border-b-0">
                      <button 
                        className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={toggleMobileSolutions}
                        aria-expanded={mobileSolutionsOpen}
                        aria-haspopup="true"
                      >
                        <span className="text-sm">{item.label}</span>
                        <motion.span
                          className="text-gray-500"
                          animate={{ rotate: mobileSolutionsOpen ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          &#9662;
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="pl-5 pr-2 pt-1 pb-2 space-y-1 bg-gray-50 rounded-lg mb-2"
                          >
                            {item.subItems.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="block py-2.5 px-3 text-xs text-gray-700 hover:bg-white hover:text-[#FFB300] rounded-md transition-colors duration-200"
                                onClick={closeMobileMenu}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`block py-3 px-2 rounded-lg text-sm font-medium transition-colors duration-200 ${item.cta ? "text-[#FFB300] hover:bg-orange-50" : "text-gray-800 hover:bg-gray-50"}`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}