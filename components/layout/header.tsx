"use client";

import Image from "next/image";
import logo from "../../assets/Technify-logo.png";
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
        label: "Airport Solutions",
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
        label: "Railway Solutions",
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
      {
        label: "Hospital Solutions",
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
        label: "Enterprise Solutions",
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // top-level desktop
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null); // second-level desktop
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null); // top-level mobile
  const [mobileActiveSubDropdown, setMobileActiveSubDropdown] = useState<string | null>(null); // second-level mobile
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  // shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route change
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setMobileOpen(false);
    setMobileActiveDropdown(null);
    setMobileActiveSubDropdown(null);
  }, [pathname]);

  // close dropdown on outside click (desktop)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* MAIN WRAPPER (NO WHITE SPACE) */}
      <div
        className={`w-full transition-all duration-300 ${scrolled ? "py-1 shadow-md" : "py-1"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Image
            src={logo}
            alt="Technify Logo"
            width={130}
            height={45}
            className="cursor-pointer"
            priority
          />

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center gap-6 font-semibold text-[#111]">
            {NAV_ITEMS.map((item) =>
              item.subItems ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => {
                    setActiveDropdown((prev) => (prev === item.label ? null : prev));
                    setActiveSubDropdown(null);
                  }}
                  className="relative"
                >
                  <button className="flex items-center gap-1 hover:text-[#1F6FEB]">
                    {item.label}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg min-w-[200px] z-40"
                      >
                        {item.subItems.map((sub) =>
                          sub.subItems ? (
                            <div
                              key={sub.label}
                              onMouseEnter={() => setActiveSubDropdown(sub.label)}
                              onMouseLeave={() => setActiveSubDropdown((prev) => (prev === sub.label ? null : prev))}
                              className="relative"
                            >
                              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center">
                                <span>{sub.label}</span>
                                <span className="text-xs opacity-60">▸</span>
                              </button>

                              <AnimatePresence>
                                {activeSubDropdown === sub.label && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -6 }}
                                    transition={{ duration: 0.12 }}
                                    className="absolute left-full top-0 ml-2 mt-0 bg-white shadow-lg border rounded-lg min-w-[220px] z-50"
                                  >
                                    {sub.subItems.map((child) => (
                                      <a key={child.label} href={child.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                        {child.label}
                                      </a>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <a key={sub.label} href={sub.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                              {sub.label}
                            </a>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={item.label} href={item.href} className="hover:text-[#1F6FEB] transition">
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden flex flex-col gap-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-white border-t shadow-sm"
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_ITEMS.map((item) =>
                  item.subItems ? (
                    <div key={item.label}>
                      <button
                        className="flex justify-between w-full py-2 font-medium"
                        onClick={() =>
                          setMobileActiveDropdown((prev) => (prev === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <span className="opacity-60">{mobileActiveDropdown === item.label ? "▾" : "▸"}</span>
                      </button>

                      <AnimatePresence>
                        {mobileActiveDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="ml-3 overflow-hidden"
                          >
                            {item.subItems.map((sub) =>
                              sub.subItems ? (
                                <div key={sub.label} className="mb-1">
                                  <button
                                    className="flex justify-between w-full py-2 text-sm font-medium"
                                    onClick={() =>
                                      setMobileActiveSubDropdown((prev) => (prev === sub.label ? null : sub.label))
                                    }
                                  >
                                    {sub.label}
                                    <span className="opacity-60">{mobileActiveSubDropdown === sub.label ? "▾" : "▸"}</span>
                                  </button>

                                  <AnimatePresence>
                                    {mobileActiveSubDropdown === sub.label && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="ml-4 overflow-hidden"
                                      >
                                        {sub.subItems.map((child) => (
                                          <a
                                            key={child.label}
                                            href={child.href}
                                            className="block py-2 text-sm text-gray-700"
                                            onClick={() => {
                                              setMobileOpen(false);
                                              setMobileActiveDropdown(null);
                                              setMobileActiveSubDropdown(null);
                                            }}
                                          >
                                            {child.label}
                                          </a>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="block py-2 text-sm text-gray-700"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileActiveDropdown(null);
                                  }}
                                >
                                  {sub.label}
                                </a>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-2 font-medium"
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
