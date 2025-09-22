"use client";
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
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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
    setSolutionsOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => setSolutionsOpen(false), 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans">
      {/* Top info bar with enhanced animation */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.1 
        }}
        className="bg-gradient-to-r from-[#0D1A3A] to-[#1a2f6d] text-white text-sm py-2 px-4 flex justify-between items-center relative overflow-hidden"
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
        
        <div className="flex items-center gap-6 font-semibold text-[#FFB300] z-10">
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
            <a href="tel:9999769378" className="hover:underline">
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
            <a href="mailto:info@technify.com" className="hover:underline">
              info@technify.com
            </a>
          </motion.span>
        </div>
        
        <div className="flex items-center gap-4 z-10">
          {[faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faGooglePlusG].map((icon, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB300] hover:text-white bg-[#ffffff08] rounded-full p-2 w-8 h-8 flex items-center justify-center"
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
            >
              <FontAwesomeIcon icon={icon} className="text-[#FFB300] text-sm" />
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
          scrolled ? "py-2 shadow-2xl border-b border-[#e5e7eb]" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={logo.src}
              alt="Logo"
              className="h-12 w-auto cursor-pointer"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[#222] font-medium">
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.span
                      animate={{ rotate: solutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      &#9662;
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-3 bg-white shadow-xl rounded-lg z-40 min-w-[200px] overflow-hidden border border-gray-100"
                      >
                        {item.subItems.map((sub, subIndex) => (
                          <motion.a
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-3 hover:bg-[#FFB300]/10 hover:text-[#FFB300] transition-colors border-b border-gray-100 last:border-b-0"
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
                  className={`hover:text-[#FFB300] relative group transition-colors duration-300 ${item.cta ? "bg-[#FFB300] text-white px-4 py-2 rounded-full hover:bg-[#e5a000]" : ""}`}
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
                      className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB300] transition-all duration-300 group-hover:w-full"
                      whileHover={{ width: "100%" }}
                    />
                  )}
                </motion.a>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden flex flex-col w-6 h-5 justify-between items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="w-full h-0.5 bg-[#0D1A3A] rounded"
              animate={{ 
                rotate: isMenuOpen ? 45 : 0, 
                y: isMenuOpen ? 8 : 0 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-[#0D1A3A] rounded"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-[#0D1A3A] rounded"
              animate={{ 
                rotate: isMenuOpen ? -45 : 0, 
                y: isMenuOpen ? -8 : 0 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-3 flex flex-col gap-3">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.subItems ? (
                      <div>
                        <button 
                          className="flex items-center justify-between w-full py-2 font-medium"
                          onClick={() => setSolutionsOpen(!solutionsOpen)}
                        >
                          <span>{item.label}</span>
                          <motion.span
                            animate={{ rotate: solutionsOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            &#9662;
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {solutionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {item.subItems.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="block py-2 text-gray-600"
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
                        className={`block py-2 font-medium ${item.cta ? "text-[#FFB300]" : ""}`}
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