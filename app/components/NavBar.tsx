"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TiMediaPlay } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherNight } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import navItems from "@/app/lib/navItems";
// Navigation items

export default function NavBar() {
  const pathname = usePathname();
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // ✅ Move state outside of useEffect
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // ✅ Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // ✅ Rotate logo on hover
  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    const handleMouseOver = () => {
      gsap.to(logoElement, {
        rotation: 360,
        duration: 1,
        ease: "power3.inOut",
      });
    };

    const handleMouseOut = () => {
      gsap.to(logoElement, { rotation: 0, duration: 1, ease: "power3.inOut" });
    };

    logoElement.addEventListener("mouseover", handleMouseOver);
    logoElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      logoElement.removeEventListener("mouseover", handleMouseOver);
      logoElement.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // ✅ Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // ✅ Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.5 });
    } else {
      gsap.to(menuRef.current, { height: "auto", opacity: 1, duration: 0.5 });
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link href="/">
              <img src="/globe.svg" alt="logo" className="w-10" ref={logoRef} />
            </Link>
            <Button
              id="product-button"
              title="Contact Us"
              src="/contact"
              rightIcon={<TiMail />}
              className="bg-white md:flex hidden items-center justify-center gap-1"
              textSize="text-xs"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={`${item.href.toLowerCase()}`}
                    className={clsx("nav-hover-btn", {
                      "nav-btn-active":
                        pathname.toLowerCase() === item.href.toLowerCase(),
                    })}
                  >
                    
                    {item.name}
                   
                  </Link>
                  {item.submenu && (
                    <div
                      className="absolute left-auto  hidden group-hover:flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-md pointer-events-auto z-50"
                      onMouseEnter={(e) =>
                        e.currentTarget.classList.add("flex")
                      }
                      onMouseLeave={(e) =>
                        e.currentTarget.classList.remove("flex")
                      }
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block w-auto px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 ml-4 border rounded-full dark:bg-gray-800 dark:text-white"
          >
            {isDarkMode ? <TiWeatherNight /> : <TiWeatherSunny />}
          </button>
        </nav>
      </header>
    </div>
  );
}
