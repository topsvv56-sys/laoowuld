"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ViewType, LanguageType, UserProfile, I18N } from "@/data/jobsData";
import {
  Menu,
  X,
  LogOut,
} from "lucide-react";

interface NavbarProps {
  currentView: ViewType;
  navigateTo: (view: ViewType) => void;
  currentLang: LanguageType;
  setCurrentLang: (lang: LanguageType) => void;
  appliedCount?: number;
  currentUser: UserProfile | null;
  onLogout: () => void;
  showToast: (msg: string) => void;
  t?: (typeof I18N)["lo"];
}

export default function Navbar({
  currentView,
  navigateTo,
  currentLang,
  setCurrentLang,
  currentUser,
  onLogout,
  showToast,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewType) => {
    navigateTo(view);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    if (currentLang === "lo") {
      setCurrentLang("en");
      showToast("Switched to English");
    } else {
      setCurrentLang("lo");
      showToast("ປ່ຽນເປັນພາສາລາວແລ້ວ");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={() => handleNavClick("jobs")}
            className="flex items-center group py-1 text-left focus:outline-none hover:opacity-90 transition"
          >
            <Image
              src="/lao-world-logo-cropped.png"
              alt="Lao World Public Company"
              width={160}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[13px] font-medium text-slate-700">
          <button
            onClick={() => handleNavClick("jobs")}
            className={`transition pb-1 ${currentView === "jobs" || currentView === "detail"
              ? "text-[#0070ba] font-bold border-b-2 border-[#0070ba]"
              : "text-slate-700 hover:text-[#0070ba]"
              }`}
          >
            {currentLang === "lo" ? "ໜ້າຫຼັກ" : "Home"}
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className={`transition pb-1 ${currentView === "about"
              ? "text-[#0070ba] font-bold border-b-2 border-[#0070ba]"
              : "text-slate-700 hover:text-[#0070ba]"
              }`}
          >
            {currentLang === "lo" ? "ກ່ຽວກັບພວກເຮົາ" : "Company"}
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`transition pb-1 ${currentView === "contact"
              ? "text-[#0070ba] font-bold border-b-2 border-[#0070ba]"
              : "text-slate-700 hover:text-[#0070ba]"
              }`}
          >
            {currentLang === "lo" ? "ຕິດຕໍ່ພວກເຮົາ" : "Contact"}
          </button>
        </nav>

        {/* Right: Actions (Language Switcher Button & Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center px-3.5 py-1.5 sm:py-2 bg-[#0070ba] hover:bg-[#005ea6] text-white text-xs sm:text-[13px] font-bold rounded-md shadow-2xs transition active:scale-95"
            title={currentLang === "lo" ? "Switch to English" : "ປ່ຽນເປັນພາສາລາວ"}
          >
            {currentLang === "lo" ? "English" : "ພາສາລາວ"}
          </button>

          {/* User Profile (if logged in) */}
          {currentUser && (
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 py-1 px-2.5 rounded-full">
              <div className="w-6 h-6 rounded-full bg-[#0070ba] text-white flex items-center justify-center font-bold text-xs">
                {currentUser.name.charAt(0)}
              </div>
              <span className="text-xs font-bold text-slate-800 hidden sm:inline max-w-[120px] truncate">
                {currentUser.name}
              </span>
              <button
                onClick={onLogout}
                title={currentLang === "lo" ? "ອອກຈາກລະບົບ" : "Logout"}
                className="text-slate-400 hover:text-rose-500 p-1 rounded"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNavClick("jobs")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${currentView === "jobs" || currentView === "detail"
              ? "text-[#0070ba] bg-blue-50"
              : "text-slate-700"
              }`}
          >
            {currentLang === "lo" ? "ໜ້າຫຼັກ" : "Home"}
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${currentView === "about"
              ? "text-[#0070ba] bg-blue-50 font-bold"
              : "text-slate-700"
              }`}
          >
            {currentLang === "lo" ? "ກ່ຽວກັບພວກເຮົາ" : "About Lao World"}
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${currentView === "contact"
              ? "text-[#0070ba] bg-blue-50 font-bold"
              : "text-slate-700"
              }`}
          >
            {currentLang === "lo" ? "ຕິດຕໍ່ພວກເຮົາ" : "Contact"}
          </button>

          {currentUser && (
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={onLogout}
                className="w-full text-center py-2 text-rose-600 bg-rose-50 rounded-md text-xs font-bold"
              >
                {currentLang === "lo" ? "ອອກຈາກລະບົບ" : "Log Out"}
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
