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

    const useSingleRowLayout = isFirstLevel && parentLabel === "Products";

    const containerClass = isFirstLevel
      ? `absolute top-full mt-4 bg-white/95 backdrop-blur-lg shadow-2xl border border-slate-100 rounded-2xl overflow-hidden ${
          parentLabel === "Products"
            ? "left-0 -translate-x-8 min-w-[520px]"
            : "left-0 min-w-[280px]"
        }`
      : "absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-lg shadow-2xl border border-slate-100 rounded-2xl min-w-[260px] whitespace-nowrap overflow-hidden";

    if (useSingleRowLayout) {
      const singleRowItems = getSingleRowLayout(items);

      return (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={containerClass}
          style={{ overflow: "visible", zIndex: 999999 + level }}
        >
          <div className="p-4">
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
                    className={`flex items-center justify-between p-3 text-[13px] tracking-wide rounded-xl border border-transparent transition-all duration-300 ${
                      it.subItems
                        ? "text-slate-900 font-semibold bg-slate-50/60 hover:bg-blue-50/80 hover:border-blue-500/60 hover:pl-4"
                        : "text-slate-700 font-medium bg-white hover:bg-slate-50/80 hover:border-blue-500/40 hover:pl-4"
                    }`}
                    onClick={() => {
                      setActiveDropdown(null);
                      setActiveSubDropdown(null);
                      setActiveThirdDropdown(null);
                    }}
                  >
                    <span className="truncate">{it.label}</span>
                    {it.subItems && (
                      <span className="text-slate-400 ml-2 text-xs">▸</span>
                    )}
                  </a>

                  {it.subItems && activeSubDropdown === it.label && (
                    <div className="absolute top-full left-0 w-full mt-2 z-50">
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

    return (
      <motion.div
        key={`${level}-${items.map((i) => i.label).join("-")}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className={containerClass}
        style={{ overflow: "visible", zIndex: 999999 + level }}
      >
        {isSecondLevel && parentLabel && (
          <div className="px-4 py-2 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
            <h3 className="text-xs font-semibold text-slate-900 tracking-wide uppercase">
              {parentLabel}
            </h3>
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
                className={`flex items-center justify-between px-4 py-2 text-[13px] tracking-wide rounded-xl mx-1 my-0.5 transition-all duration-250 ${
                  it.subItems
                    ? "text-slate-900 font-medium hover:bg-blue-50/80 hover:pl-4"
                    : "text-slate-700 font-normal hover:bg-slate-50/90 hover:pl-4"
                }`}
                onClick={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                  setActiveThirdDropdown(null);
                }}
              >
                <span className="truncate">{it.label}</span>
                {it.subItems && (
                  <span className="text-slate-400 ml-2 text-xs">▸</span>
                )}
              </a>

              {it.subItems && (
                <>
                  {level === 1 && activeSubDropdown === it.label && (
                    <div className="absolute top-full left-0 w-full mt-2 z-50">
                      {renderDesktopDropdown(it.subItems, 2, it.label)}
                    </div>
                  )}
                  {level === 2 && activeThirdDropdown === it.label && (
                    <div className="absolute top-full left-0 w-full mt-2 z-50">
                      {renderDesktopDropdown(it.subItems, 3, it.label)}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Mobile renderer
  const renderMobileDropdown = (items: NavItem[], level: number) => {
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
          initial={{ height: 0, opacity: 0, y: -4 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`overflow-hidden ${
            level === 1
              ? "ml-3 bg-slate-50/70 rounded-2xl mt-2 border border-slate-100/80"
              : level === 2
              ? "ml-4 bg-slate-50/60 rounded-2xl mt-2 border border-slate-100/70"
              : "ml-5 bg-slate-50/50 rounded-2xl mt-2 border border-slate-100/60"
          }`}
        >
          <div className="py-1">
            {items.map((item) =>
              item.subItems ? (
                <div
                  key={item.label}
                  className="border-b border-slate-100/60 last:border-b-0"
                >
                  <button
                    className="flex justify-between w-full py-3.5 text-[15px] font-medium text-slate-900 hover:text-blue-600 transition-all duration-200 hover:bg-white/80 rounded-2xl px-4"
                    onClick={() =>
                      setState((prev) => (prev === item.label ? null : item.label))
                    }
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-slate-400 ml-2 text-sm">
                      {activeState === item.label ? "▾" : "▸"}
                    </span>
                  </button>

                  {item.subItems && activeState === item.label &&
                    renderMobileDropdown(item.subItems, level + 1)}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-[15px] font-normal text-slate-800 hover:text-blue-600 transition-all duration-200 border-b border-slate-100/60 last:border-b-0 hover:bg-white/80 px-4"
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
    <header className="fixed top-0 left-0 right-0 z-[99999]">
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/90 shadow-[0_10px_40px_rgba(15,23,42,0.12)] border-slate-200"
            : "backdrop-blur-lg bg-white/70 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Technify Logo"
              width={220}
              height={90}
              priority
              className="transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-8 flex-1 justify-center"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`relative group py-2 block text-[15px] tracking-wide font-medium transition-all duration-300 ${
                    pathname === item.href ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.label}
                    {item.subItems && (
                      <span className="text-[11px] opacity-60 transition-transform duration-300 group-hover:rotate-180">
                        ▾
                      </span>
                    )}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
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
            className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm hover:shadow-md transition-all duration-200"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 rounded-full bg-slate-800 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2 bg-blue-600" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full bg-slate-800 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full bg-slate-800 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2 bg-blue-600" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.16)] overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_ITEMS.map((item) =>
                  item.subItems ? (
                    <div
                      key={item.label}
                      className="border-b border-slate-100 last:border-b-0 pb-1"
                    >
                      <button
                        className="flex justify-between w-full py-3.5 text-[15px] font-semibold text-slate-900 hover:text-blue-600 transition-all duration-200"
                        onClick={() =>
                          setMobileActiveDropdown((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-400 text-sm">
                          {mobileActiveDropdown === item.label ? "▾" : "▸"}
                        </span>
                      </button>

                      {mobileActiveDropdown === item.label &&
                        renderMobileDropdown(item.subItems, 1)}
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-3 text-[15px] font-medium text-slate-900 hover:text-blue-600 border-b border-slate-100 last:border-b-0 transition-all duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
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
