"use client";

import Image from "next/image";
import logo from "../../assets/Technify-logo1.png";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
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
  {
    label: "Products",
    href: "#", // Disabled link
    subItems: [
      {
        label: "Transport",
        href: "/products/transport",
        subItems: [
          {
            label: "Airport",
            href: "#", // Disabled link
            subItems: [
              { label: "CCTV Surveillance Systems", href: "/products/airport/cctv" },
              { label: "Public Address System (PAS)", href: "/products/airport/pas" },
              { label: "Fire Alarm System", href: "/products/airport/fire-alarm" },
              { label: "FIDS (Flight Information Display System)", href: "/products/airport/fids" },
              { label: "Vehicle / Parking Management System", href: "/products/airport/parking" },
              { label: "IP PBX & Communication System", href: "/products/airport/ip-pbx" },
              { label: "Audio-Visual (AV) Solutions", href: "/products/airport/av" },
            ],
          },
          {
            label: "Railway",
            href: "#", // Disabled link
            subItems: [
              { label: "CCTV Surveillance Systems", href: "/products/railway/cctv" },
              { label: "Public Address System (PAS)", href: "/products/railway/pas" },
              { label: "Fire Alarm System", href: "/products/railway/fire-alarm" },
              { label: "PIDS (Passenger Information Display System)", href: "/products/railway/pids" },
              { label: "Vehicle / Parking Management System", href: "/products/railway/parking" },
              { label: "IP PBX & Communication System", href: "/products/railway/ip-pbx" },
              { label: "Audio-Visual (AV) Solutions", href: "/products/railway/av" },
            ],
          },
        ],
      },
      {
        label: "Hospital",
        href: "#", // Disabled link
        subItems: [
          { label: "CCTV Surveillance Systems", href: "/products/hospital/cctv" },
          { label: "Panic Alarm / Nurse Call System (NCS)", href: "/products/hospital/ncs" },
          { label: "Queue Management System", href: "/products/hospital/qms" },
          { label: "Parking Management System", href: "/products/hospital/parking" },
          { label: "HIMS (Hospital Information Management System)", href: "/products/hospital/hims" },
        ],
      },
      {
        label: "Enterprise",
        href: "#", // Disabled link
        subItems: [
          { label: "CCTV Surveillance Systems", href: "/products/enterprise/cctv" },
          { label: "Building Management System (BMS)", href: "/products/enterprise/bms" },
          { label: "Active & Passive Network Infrastructure", href: "/products/enterprise/network" },
          { label: "Fire Alarm System", href: "/products/enterprise/fire-alarm" },
          { label: "Audio-Visual (AV) Solutions", href: "/products/enterprise/av" },
          { label: "Parking Management System", href: "/products/enterprise/parking" },
        ],
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  // desktop state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeThirdDropdown, setActiveThirdDropdown] = useState<string | null>(null);

  // mobile state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSubDropdown, setMobileActiveSubDropdown] = useState<string | null>(null);
  const [mobileActiveThirdDropdown, setMobileActiveThirdDropdown] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setActiveThirdDropdown(null);
    setMobileOpen(false);
    setMobileActiveDropdown(null);
    setMobileActiveSubDropdown(null);
    setMobileActiveThirdDropdown(null);
  }, [pathname]);

  // outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setActiveThirdDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Function to split items into single row with Transport first
  const getSingleRowLayout = (items: NavItem[]) => {
    // Sort items: Hospital first, then Enterprise, then Transport
    const sortedItems = [...items].sort((a, b) => {
      if (a.label === "Hospital") return -1;
      if (b.label === "Hospital") return 1;
      if (a.label === "Enterprise") return -1;
      if (b.label === "Enterprise") return 1;
      if (a.label === "Transport") return -1;
      if (b.label === "Transport") return 1;
      return a.label.localeCompare(b.label);
    });

    return sortedItems;
  };

  // Desktop recursive dropdown renderer
  const renderDesktopDropdown = (items: NavItem[], level: number, parentLabel?: string) => {
    const isFirstLevel = level === 1;
    const isSecondLevel = level === 2;
    const isThirdLevel = level === 3;

    // For Products dropdown, use single row layout
    const useSingleRowLayout = isFirstLevel && parentLabel === "Products";

    // Container class - all dropdowns open below their parent
    const containerClass = isFirstLevel
      ? `absolute top-full mt-5 bg-white/90 backdrop-blur-md shadow-2xl border border-gray-100/50 rounded-xl overflow-hidden ${parentLabel === "Products"
        ? "left-0 transform -translate-x-8 min-w-[500px]"
        : "left-0 min-w-[280px]"
      }`
      : "absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-md shadow-2xl border border-gray-100/50 rounded-xl min-w-[260px] whitespace-nowrap overflow-hidden";

    // For Products dropdown, render single row layout
    if (useSingleRowLayout) {
      const singleRowItems = getSingleRowLayout(items);

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={containerClass}
          style={{ overflow: "visible", zIndex: 999999 + level }}
        >
          <div className="p-4">
            {/* Main row with Transport, Hospital, Enterprise */}
            <div className="flex gap-3">
              {singleRowItems.map((it) => (
                <div
                  key={it.label}
                  className="relative flex-1"
                  onMouseEnter={() => {
                    if (it.subItems) {
                      setActiveSubDropdown(it.label);
                    } else {
                      setActiveSubDropdown(null);
                    }
                  }}
                >
                  <a
                    href={it.href}
                    className={`flex items-center justify-between p-3 text-sm transition-all duration-300 rounded-lg border border-transparent ${it.subItems
                      ? "text-gray-900 font-semibold bg-gray-50/50 hover:bg-blue-100/80 hover:border-l-2 hover:border-l-blue-500 hover:pl-4"
                      : "text-gray-700 font-medium bg-white hover:bg-blue-50/80 hover:border-l-2 hover:border-l-blue-500 hover:pl-4"
                      }`}
                    onClick={() => {
                      setActiveDropdown(null);
                      setActiveSubDropdown(null);
                      setActiveThirdDropdown(null);
                    }}
                  >
                    <span className="truncate">{it.label}</span>
                    {it.subItems && (
                      <ChevronRight className="w-4 h-4 text-gray-400 ml-2 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </a>

                  {/* Render sub-dropdown below the parent item */}
                  {it.subItems && activeSubDropdown === it.label && (
                    <div className="absolute top-full left-0 w-full mt-1 z-50">
                      {renderDesktopDropdown(it.subItems, 2, it.label)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

    // Regular dropdown layout for other items
    return (
      <motion.div
        key={`${level}-${items.map(i => i.label).join("-")}`}
        initial={{ opacity: 0, x: level > 1 ? -10 : 0, y: level === 1 ? 10 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: level > 1 ? -10 : 0, y: level === 1 ? 10 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={containerClass}
        style={{ overflow: "visible", zIndex: 999999 + level }}
      >
        {/* Dropdown Header for better context */}
        {isSecondLevel && parentLabel && (
          <div className="px-4 py-2 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <h3 className="text-sm font-semibold text-gray-900 truncate">{parentLabel}</h3>
          </div>
        )}

        <div className="py-1">
          {items.map((it) => (
            <div
              key={it.label}
              className="relative"
              onMouseEnter={() => {
                if (level === 1) {
                  if (it.subItems) {
                    setActiveSubDropdown(it.label);
                  } else {
                    setActiveSubDropdown(null);
                  }
                } else if (level === 2) {
                  if (it.subItems) {
                    setActiveThirdDropdown(it.label);
                  } else {
                    setActiveThirdDropdown(null);
                  }
                }
              }}
            >
              <a
                href={it.href}
                className={`flex items-center justify-between px-4 py-2 text-sm transition-all duration-300 rounded-lg mx-1 my-0.5 ${it.subItems
                  ? "text-gray-900 font-medium hover:bg-blue-100/80 hover:border-l-2 hover:border-l-blue-500 hover:pl-4"
                  : "text-gray-700 font-normal hover:bg-blue-50/80 hover:border-l-2 hover:border-l-blue-500 hover:pl-4"
                  } ${it.href === "#" ? "cursor-default" : "cursor-pointer"}`}
                onClick={(e) => {
                  if (it.href === "#") e.preventDefault();
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                  setActiveThirdDropdown(null);
                }}
              >
                <span className="truncate">{it.label}</span>
                {it.subItems && (
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-2 transition-transform group-hover:translate-x-0.5" />
                )}
              </a>

              {/* Render next level dropdown below the parent item */}
              {it.subItems && (
                <>
                  {level === 1 && activeSubDropdown === it.label &&
                    <div className="absolute top-full left-0 w-full mt-1 z-50">
                      {renderDesktopDropdown(it.subItems, 2, it.label)}
                    </div>
                  }
                  {level === 2 && activeThirdDropdown === it.label &&
                    <div className="absolute top-0 left-full ml-2 z-50">
                      {renderDesktopDropdown(it.subItems, 3, it.label)}
                    </div>
                  }
                </>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Mobile renderer - Enhanced version
  const renderMobileDropdown = (items: NavItem[], level: number, parentLabel: string) => {
    const getStateSetter = (level: number) => {
      if (level === 1) return setMobileActiveSubDropdown;
      if (level === 2) return setMobileActiveThirdDropdown;
      return () => { };
    };

    const getActiveState = (level: number) => {
      if (level === 1) return mobileActiveSubDropdown;
      if (level === 2) return mobileActiveThirdDropdown;
      return null;
    };

    const activeState = getActiveState(level);
    const setState = getStateSetter(level);

    return (
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`overflow-hidden ${level === 1 ? "ml-3 bg-gray-50/50 rounded-lg mt-2" :
            level === 2 ? "ml-4 bg-gray-40/30 rounded-lg mt-2" :
              "ml-5 bg-gray-30/20 rounded-lg mt-2"
            }`}
        >
          <div className="py-1">
            {items.map((item) =>
              item.subItems ? (
                <div key={item.label} className="border-b border-gray-100/50 last:border-b-0">
                  <button
                    className="flex justify-between w-full py-3.5 text-sm font-medium text-gray-900 hover:text-blue-600 transition-all duration-200 hover:bg-white/50 rounded-lg px-4"
                    onClick={() => setState((prev) => (prev === item.label ? null : item.label))}
                  >
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-60"></span>
                      <span className="font-semibold text-sm">{item.label}</span>
                    </div>
                    <span className="text-gray-400 ml-2 transition-transform duration-200">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeState === item.label ? "rotate-180" : ""}`} />
                    </span>
                  </button>

                  {item.subItems && activeState === item.label &&
                    renderMobileDropdown(item.subItems, level + 1, item.label)}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center py-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 border-b border-gray-100/50 last:border-b-0 hover:bg-white/50 px-4 rounded-sm"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileActiveDropdown(null);
                    setMobileActiveSubDropdown(null);
                    setMobileActiveThirdDropdown(null);
                  }}
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                  <span className="font-medium text-sm">{item.label}</span>
                </a>
              )
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-[99999] border-b border-gray-100/80">
      <div className={`w-full transition-all duration-300 ${scrolled ? "py-0 shadow-lg" : "py-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Technify Logo"
              width={220}
              height={90}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-8 font-semibold text-[#111] flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown(item.label);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`hover:text-blue-600 transition-all duration-300 py-2 block font-semibold relative group text-sm ${pathname === item.href ? 'text-blue-600' : 'text-gray-800'
                    }`}
                >
                  <span className="relative z-10 flex items-center">
                    {item.label}
                    {item.subItems && <ChevronDown className="w-3.5 h-3.5 ml-1.5 opacity-60 transition-transform group-hover:rotate-180" />}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full ${pathname === item.href ? 'w-full' : ''
                    }`}></span>
                </a>

                <AnimatePresence>
                  {activeDropdown === item.label && item.subItems &&
                    renderDesktopDropdown(item.subItems, 1, item.label)}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-3 rounded-xl hover:bg-gray-100/80 transition-all duration-200 border border-transparent hover:border-gray-200"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2 bg-blue-600' : ''
              }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
              }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2 bg-blue-600' : ''
              }`}></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/98 border-t border-gray-100 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-2 space-y-0">
                {NAV_ITEMS.map((item) =>
                  item.subItems ? (
                    <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                      <button
                        className="flex justify-between w-full py-4 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 items-center"
                        onClick={() => setMobileActiveDropdown((prev) => (prev === item.label ? null : item.label))}
                      >
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="font-semibold text-sm">{item.label}</span>
                        </div>
                        <span className="text-gray-400 ml-2 transition-transform duration-200">
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileActiveDropdown === item.label ? "rotate-180" : ""}`} />
                        </span>
                      </button>

                      {mobileActiveDropdown === item.label &&
                        renderMobileDropdown(item.subItems, 1, item.label)}
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center py-4 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      <span className="font-semibold text-sm">{item.label}</span>
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}