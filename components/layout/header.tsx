"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/Technify-logo.png";

type TimeoutRef = ReturnType<typeof setTimeout> | null;

const NAV_ITEMS = [
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
  { label: "Get Technified", href: "/contact#technified", cta: true },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<TimeoutRef>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown and mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        dropdownPanelRef.current &&
        !dropdownPanelRef.current.contains(target)
      ) {
        setSolutionsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target) && open) {
        setOpen(false);
        setMobileSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 300);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSolutionsOpen((v) => !v);
  };

  const handleSubItemClick = () => {
    setSolutionsOpen(false);
    setOpen(false);
    setMobileSolutionsOpen(false);
  };

  const handleMobileSolutionsClick = () => setMobileSolutionsOpen((v) => !v);

  const handleMobileLinkClick = () => {
    setOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
      scrolled ? "bg-[#0D1117]/95 backdrop-blur-2xl py-3 shadow-2xl shadow-[#0D1117]/50 border-b border-[#1F6FEB]/20" : "bg-transparent py-5"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling and larger size */}
          <Link href="/" className="flex items-center group" aria-label="Home">
            <span className="relative block h-16 w-16 sm:h-20 sm:w-20 transition-all duration-500 group-hover:scale-110">
              <Image
                src={logo}
                alt="Technify logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 64px, 80px"
              />
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#1F6FEB]/30 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            </span>
            
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (item.subItems) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={dropdownRef}
                  >
                    <button
                      aria-haspopup="menu"
                      aria-expanded={solutionsOpen}
                      className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center group ${
                        active 
                          ? "text-white bg-gradient-to-r from-[#1F6FEB]/30 to-[#FFB300]/30 backdrop-blur-xl shadow-lg shadow-[#1F6FEB]/20" 
                          : "text-[#C9D1D9]/80 hover:text-white hover:bg-[#0D1117]/40"
                      }`}
                      onClick={handleDropdownClick}
                      type="button"
                    >
                      {item.label}
                      <svg className={`ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${active ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {solutionsOpen && (
                      <div
                        ref={dropdownPanelRef}
                        className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#0D1117] backdrop-blur-2xl shadow-2xl shadow-[#0D1117]/50 border border-[#1F6FEB]/20 overflow-hidden animate-in slide-in-from-top-2 duration-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        role="menu"
                        aria-label="Solutions submenu"
                      >
                        <div className="py-3">
                          {item.subItems.map((subItem) => {
                            const subActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                role="menuitem"
                                className={`block px-5 py-3.5 text-sm transition-all duration-300 hover:translate-x-1 ${
                                  subActive
                                    ? "text-white bg-gradient-to-r from-[#1F6FEB]/20 to-[#FFB300]/20"
                                    : "text-[#C9D1D9]/80 hover:text-white hover:bg-[#0D1117]/30"
                                }`}
                                onClick={handleSubItemClick}
                              >
                                <div className="flex items-center">
                                  <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                                    subActive ? "bg-[#1F6FEB] shadow-lg shadow-[#1F6FEB]/50" : "bg-[#C9D1D9]/40"
                                  }`}></div>
                                  {subItem.label}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    active 
                      ? "text-white bg-gradient-to-r from-[#1F6FEB]/30 to-[#FFB300]/30 backdrop-blur-xl shadow-lg shadow-[#1F6FEB]/20" 
                      : "text-[#C9D1D9]/80 hover:text-white hover:bg-[#0D1117]/40 hover:-translate-y-0.5"
                  } ${
                    item.cta
                      ? "bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] text-white shadow-lg shadow-[#1F6FEB]/30 hover:shadow-xl hover:shadow-[#1F6FEB]/40 hover:from-[#1a5fd4] hover:to-[#e09f00] transform hover:-translate-y-0.5"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button with enhanced styling */}
          <button
            className="lg:hidden p-3 rounded-xl text-[#C9D1D9] hover:bg-[#0D1117]/40 hover:text-white transition-all duration-300"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                d={open ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu with enhanced styling */}
        {open && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden mt-4 rounded-2xl bg-[#0D1117] backdrop-blur-2xl shadow-2xl shadow-[#0D1117]/50 border border-[#1F6FEB]/20 overflow-hidden animate-in slide-in-from-top-2 duration-300"
          >
            <div className="py-3">
              {NAV_ITEMS.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                if (item.subItems) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={handleMobileSolutionsClick}
                        className={`flex items-center justify-between w-full px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                          active ? "text-white bg-gradient-to-r from-[#1F6FEB]/20 to-[#FFB300]/20" : "text-[#C9D1D9]/80 hover:bg-[#0D1117]/30"
                        }`}
                        type="button"
                        aria-expanded={mobileSolutionsOpen}
                      >
                        {item.label}
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            mobileSolutionsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {mobileSolutionsOpen && (
                        <div className="pl-8 py-3 space-y-1 bg-[#0D1117]/50">
                          {item.subItems.map((subItem) => {
                            const subActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-5 py-3.5 text-sm transition-all duration-300 ${
                                  subActive 
                                    ? "text-white bg-gradient-to-r from-[#1F6FEB]/20 to-[#FFB300]/20" 
                                    : "text-[#C9D1D9]/80 hover:bg-[#0D1117]/30"
                                }`}
                                onClick={handleMobileLinkClick}
                              >
                                <div className="flex items-center">
                                  <div className={`w-2 h-2 rounded-full mr-3 ${
                                    subActive ? "bg-[#1F6FEB] shadow-lg shadow-[#1F6FEB]/50" : "bg-[#C9D1D9]/40"
                                  }`}></div>
                                  {subItem.label}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                      active 
                        ? "text-white bg-gradient-to-r from-[#1F6FEB]/20 to-[#FFB300]/20" 
                        : "text-[#C9D1D9]/80 hover:bg-[#0D1117]/30"
                    } ${
                      item.cta
                        ? "bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] text-white"
                        : ""
                    }`}
                    onClick={handleMobileLinkClick}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}