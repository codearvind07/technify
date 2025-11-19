"use client";

import Image from "next/image";
import logo from "../../assets/Technify-logo1.png";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    href: "/products",
    subItems: [
      {
        label: "Transport",
        href: "/products/transport",
        subItems: [
          {
            label: "Airport",
            href: "/products/airport",
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
            href: "/products/railway",
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
        href: "/products/hospital",
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
        href: "/products/enterprise",
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

  // Desktop recursive dropdown renderer
  const renderDesktopDropdown = (items: NavItem[], level: number) => {
    const isFirstLevel = level === 1;
    const containerClass = isFirstLevel
      ? "absolute left-0 top-full bg-white/90 backdrop-blur-xl shadow-2xl border border-white/30 rounded-2xl min-w-[280px] overflow-hidden"
      : "absolute top-0 left-full ml-2 bg-white/90 backdrop-blur-xl shadow-2xl border border-white/30 rounded-2xl min-w-[250px] whitespace-nowrap overflow-hidden";

    return (
      <motion.div
        key={`${level}-${items.map(i => i.label).join("-")}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.14 }}
        className={containerClass}
        style={{ overflow: "visible", zIndex: 999999 }}
      >
        <div className="py-0.5">
          {items.map((it) => (
            <div
              key={it.label}
              className="relative"
              onMouseEnter={() => {
                if (level === 1) {
                  // hovered a first-level item (e.g. Transport, Hospital)
                  if (it.subItems) {
                    setActiveSubDropdown(it.label);
                  } else {
                    setActiveSubDropdown(null);
                  }
                } else if (level === 2) {
                  // hovered a second-level item (e.g. Airport, Railway)
                  if (it.subItems) {
                    setActiveThirdDropdown(it.label);
                  } else {
                    setActiveThirdDropdown(null);
                  }
                }
              }}
              onMouseLeave={() => {
                // do not aggressively clear here — let top-level handlers control close
              }}
            >
              <a
                href={it.href}
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-300 rounded-lg mx-1 my-0.5"
                onClick={() => {
                  // close dropdowns on navigation
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                  setActiveThirdDropdown(null);
                }}
              >
                <span className="truncate font-medium">{it.label}</span>
                {it.subItems && <span className="text-xs text-gray-400 ml-2">▸</span>}
              </a>

              {/* Render next level if active */}
              {it.subItems && (
                <>
                  {level === 1 && activeSubDropdown === it.label && renderDesktopDropdown(it.subItems, 2)}
                  {level === 2 && activeThirdDropdown === it.label && renderDesktopDropdown(it.subItems, 3)}
                </>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Mobile renderer - Fixed version
  const renderMobileDropdown = (items: NavItem[], level: number, parentLabel: string) => {
    const getStateSetter = (level: number) => {
      if (level === 1) return setMobileActiveSubDropdown;
      if (level === 2) return setMobileActiveThirdDropdown;
      return () => {};
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
          transition={{ duration: 0.18 }}
          className={`overflow-hidden ${level === 1 ? "ml-2" : level === 2 ? "ml-3" : "ml-4"}`}
        >
          <div className="py-0.5">
            {items.map((item) =>
              item.subItems ? (
                <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="flex justify-between w-full py-3 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg px-3"
                    onClick={() => setState((prev) => (prev === item.label ? null : item.label))}
                  >
                    <span>{item.label}</span>
                    <span className="text-gray-400 ml-2">
                      {activeState === item.label ? "▾" : "▸"}
                    </span>
                  </button>

                  {item.subItems && activeState === item.label && renderMobileDropdown(item.subItems, level + 1, item.label)}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-all duration-300 border-b border-gray-100 last:border-b-0 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-3 rounded-sm mx-0.5"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileActiveDropdown(null);
                    setMobileActiveSubDropdown(null);
                    setMobileActiveThirdDropdown(null);
                  }}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md z-[99999] shadow-sm">
      <div className={`w-full transition-all duration-300 ${scrolled ? "py-1 shadow-md" : "py-1"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image src={logo} alt="Technify Logo" width={220} height={75} priority />
          </div>

          {/* DESKTOP NAV */}
          <nav ref={navRef} className="hidden md:flex items-center gap-8 font-semibold text-[#111] flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  // close all when leaving the top-level item area
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                  setActiveThirdDropdown(null);
                }}
              >
                <a
                  href={item.href}
                  className="hover:text-[#1F6FEB] transition-all duration-300 py-2 block font-semibold relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.subItems && <span className="ml-1 text-xs opacity-60">▾</span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Render first-level dropdown directly (no extra wrapper/gap) */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.subItems && renderDesktopDropdown(item.subItems, 1)}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => setMobileOpen((s) => !s)}>
            <span className={`w-6 h-0.5 bg-black transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/30 shadow-2xl overflow-hidden rounded-b-2xl">
              <div className="px-4 py-3 space-y-0">
                {NAV_ITEMS.map((item) =>
                  item.subItems ? (
                    <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                      <button
                        className="flex justify-between w-full py-4 font-medium text-gray-800 hover:text-blue-600 transition-colors duration-150"
                        onClick={() => setMobileActiveDropdown((prev) => (prev === item.label ? null : item.label))}
                      >
                        <span>{item.label}</span>
                        <span className="text-gray-400 ml-2">{mobileActiveDropdown === item.label ? "▾" : "▸"}</span>
                      </button>

                      {mobileActiveDropdown === item.label &&
                        renderMobileDropdown(item.subItems, 1, item.label)}
                    </div>
                  ) : (
                    <a key={item.label} href={item.href} className="block py-4 font-medium text-gray-800 hover:text-blue-600 transition-colors duration-150" onClick={() => setMobileOpen(false)}>
                      {item.label}
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