"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ViewType, LanguageType, UserProfile, I18N } from "@/data/jobsData";
import {
  Menu,
  X,
  LogOut,
  Moon,
  Sun,
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
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({
  currentView,
  navigateTo,
  currentLang,
  setCurrentLang,
  currentUser,
  onLogout,
  showToast,
  isDarkMode,
  toggleDarkMode,
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
    <header className="sticky top-0 z-40 bg-white dark:bg-black border-b border-slate-200/80 dark:border-zinc-800 shadow-2xs transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={() => handleNavClick("jobs")}
            className="flex items-center group py-1 text-left focus:outline-none hover:opacity-90 transition"
          >
            <div className="rounded-xl p-1 transition-all duration-200 dark:bg-white/95 dark:shadow-xs">
              <Image
                src="/lao-world-logo-cropped.png"
                alt="Lao World Public Company"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-200"
                priority
              />
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[13px] font-medium text-slate-700 dark:text-zinc-300">
          <button
            onClick={() => handleNavClick("jobs")}
            className={`transition pb-1 cursor-pointer ${currentView === "jobs" || currentView === "detail"
              ? "text-[#0070ba] dark:text-blue-400 font-bold border-b-2 border-[#0070ba] dark:border-blue-400"
              : "text-slate-700 dark:text-zinc-300 hover:text-[#0070ba] dark:hover:text-blue-400"
              }`}
          >
            {currentLang === "lo" ? "ໜ້າຫຼັກ" : "Home"}
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className={`transition pb-1 cursor-pointer ${currentView === "about"
              ? "text-[#0070ba] dark:text-blue-400 font-bold border-b-2 border-[#0070ba] dark:border-blue-400"
              : "text-slate-700 dark:text-zinc-300 hover:text-[#0070ba] dark:hover:text-blue-400"
              }`}
          >
            {currentLang === "lo" ? "ກ່ຽວກັບພວກເຮົາ" : "Company"}
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className={`transition pb-1 cursor-pointer ${currentView === "services"
              ? "text-[#0070ba] dark:text-blue-400 font-bold border-b-2 border-[#0070ba] dark:border-blue-400"
              : "text-slate-700 dark:text-zinc-300 hover:text-[#0070ba] dark:hover:text-blue-400"
              }`}
          >
            {currentLang === "lo" ? "ການບໍລິການ" : "Services"}
          </button>

          <button
            onClick={() => handleNavClick("regulations")}
            className={`transition pb-1 cursor-pointer ${currentView === "regulations"
              ? "text-[#0070ba] dark:text-blue-400 font-bold border-b-2 border-[#0070ba] dark:border-blue-400"
              : "text-slate-700 dark:text-zinc-300 hover:text-[#0070ba] dark:hover:text-blue-400"
              }`}
          >
            {currentLang === "lo" ? "ກົດລະບຽບ" : "Regulations"}
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`transition pb-1 cursor-pointer ${currentView === "contact"
              ? "text-[#0070ba] dark:text-blue-400 font-bold border-b-2 border-[#0070ba] dark:border-blue-400"
              : "text-slate-700 dark:text-zinc-300 hover:text-[#0070ba] dark:hover:text-blue-400"
              }`}
          >
            {currentLang === "lo" ? "ຕິດຕໍ່ພວກເຮົາ" : "Contact"}
          </button>
        </nav>

        {/* Right: Actions (Dark Mode Toggle & Language Switcher & User & Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Dark Mode Toggle Button - Placed right next to Language Switcher */}
          <button
            id="theme-toggle-btn"
            onClick={toggleDarkMode}
            className={`inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-[13px] font-bold rounded-md shadow-2xs transition active:scale-95 border cursor-pointer ${
              isDarkMode
                ? "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
                : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
            }`}
            title={
              currentLang === "lo"
                ? isDarkMode
                  ? "ປ່ຽນເປັນໂໝດສະຫວ່າງ (Light Mode)"
                  : "ປ່ຽນເປັນໂໝດມືດ (Dark Mode)"
                : isDarkMode
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 transition-transform duration-200 hover:rotate-45" />
                <span>{currentLang === "lo" ? "ສະຫວ່າງ" : "Light"}</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
                <span>{currentLang === "lo" ? "ມືດ" : "Dark"}</span>
              </>
            )}
          </button>

          {/* Language Switcher */}
          <button
            id="lang-toggle-btn"
            onClick={toggleLanguage}
            className={`inline-flex items-center justify-center px-3 sm:px-3.5 py-1.5 sm:py-2 text-white text-xs sm:text-[13px] font-bold rounded-md shadow-2xs transition active:scale-95 cursor-pointer ${
              isDarkMode
                ? "bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
                : "bg-[#0070ba] hover:bg-[#005ea6] text-white"
            }`}
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
            className="lg:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg ml-0.5 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-slate-100 dark:border-zinc-800 px-4 py-3 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNavClick("jobs")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold cursor-pointer ${currentView === "jobs" || currentView === "detail"
              ? "text-[#0070ba] bg-blue-50 dark:bg-zinc-800 dark:text-blue-400"
              : "text-slate-700 dark:text-zinc-200"
              }`}
          >
            {currentLang === "lo" ? "ໜ້າຫຼັກ" : "Home"}
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium cursor-pointer ${currentView === "about"
              ? "text-[#0070ba] bg-blue-50 dark:bg-zinc-800 dark:text-blue-400 font-bold"
              : "text-slate-700 dark:text-zinc-200"
              }`}
          >
            {currentLang === "lo" ? "ກ່ຽວກັບພວກເຮົາ" : "About Lao World"}
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium cursor-pointer ${currentView === "services"
              ? "text-[#0070ba] bg-blue-50 dark:bg-zinc-800 dark:text-blue-400 font-bold"
              : "text-slate-700 dark:text-zinc-200"
              }`}
          >
            {currentLang === "lo" ? "ການບໍລິການ" : "Services"}
          </button>

          <button
            onClick={() => handleNavClick("regulations")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium cursor-pointer ${currentView === "regulations"
              ? "text-[#0070ba] bg-blue-50 dark:bg-zinc-800 dark:text-blue-400 font-bold"
              : "text-slate-700 dark:text-zinc-200"
              }`}
          >
            {currentLang === "lo" ? "ກົດລະບຽບ" : "Regulations"}
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium cursor-pointer ${currentView === "contact"
              ? "text-[#0070ba] bg-blue-50 dark:bg-zinc-800 dark:text-blue-400 font-bold"
              : "text-slate-700 dark:text-zinc-200"
              }`}
          >
            {currentLang === "lo" ? "ຕິດຕໍ່ພວກເຮົາ" : "Contact"}
          </button>

          {/* Mobile Dark Mode Toggle */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">
              {currentLang === "lo" ? "ໂໝດມືດ (Dark Mode)" : "Dark Mode"}
            </span>
            <button
              onClick={toggleDarkMode}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition active:scale-95 cursor-pointer ${
                isDarkMode
                  ? "bg-zinc-800 text-white border-zinc-700"
                  : "bg-slate-100 text-slate-800 border-slate-300"
              }`}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>{currentLang === "lo" ? "ສະຫວ່າງ" : "Light"}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                  <span>{currentLang === "lo" ? "ມືດ" : "Dark"}</span>
                </>
              )}
            </button>
          </div>

          {currentUser && (
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={onLogout}
                className="w-full text-center py-2 text-rose-600 bg-rose-50 rounded-md text-xs font-bold cursor-pointer"
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
