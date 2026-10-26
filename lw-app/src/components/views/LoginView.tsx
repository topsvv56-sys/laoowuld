"use client";

import React, { useState } from "react";
import { ViewType, UserProfile, LanguageType, I18N } from "@/data/jobsData";
import { Phone, Mail, Lock, Eye, EyeOff } from "lucide-react";

interface LoginViewProps {
  onLoginSuccess: (profile: UserProfile) => void;
  navigateTo: (view: ViewType) => void;
  showToast: (msg: string) => void;
  currentLang?: LanguageType;
  t: (typeof I18N)["lo"];
}

export default function LoginView({
  onLoginSuccess,
  navigateTo,
  showToast,
  currentLang = "lo",
  t,
}: LoginViewProps) {
  const [loginMode, setLoginMode] = useState<"phone" | "email">("phone");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginInput.trim()) {
      showToast(
        loginMode === "phone"
          ? (currentLang === "lo" ? "ກະລຸນາປ້ອນເບີໂທລະສັບ" : "Please enter your phone number")
          : (currentLang === "lo" ? "ກະລຸນາປ້ອນອີເມວ" : "Please enter your email")
      );
      return;
    }
    const profile: UserProfile = {
      name: currentLang === "lo" ? "ຜູ້ຊອກວຽກ (Lao World)" : "Candidate (Lao World)",
      phone: loginMode === "phone" ? "020 " + loginInput : "020 5555 1234",
      email: loginMode === "email" ? loginInput : "user@laoworld.la",
    };
    onLoginSuccess(profile);
    showToast(
      currentLang === "lo"
        ? "ເຂົ້າສູ່ລະບົບສຳເລັດແລ້ວ! ຍິນດີຕ້ອນຮັບກັບຄືນ"
        : "Signed in successfully! Welcome back"
    );
    navigateTo("jobs");
  };

  const handleSocialAuth = (platform: string) => {
    showToast(
      currentLang === "lo"
        ? `ກຳລັງເຊື່ອມຕໍ່ກັບບັນຊີ ${platform}...`
        : `Connecting with ${platform}...`
    );
    setTimeout(() => {
      onLoginSuccess({
        name: currentLang === "lo" ? `ຜູ້ໃຊ້ ${platform}` : `${platform} User`,
        phone: "020 5555 8899",
        email: `candidate.${platform.toLowerCase()}@laoworld.la`,
      });
      showToast(
        currentLang === "lo"
          ? `ເຂົ້າສູ່ລະບົບດ້ວຍ ${platform} ສຳເລັດ!`
          : `Signed in with ${platform} successfully!`
      );
      navigateTo("jobs");
    }, 600);
  };

  return (
    <div className="py-10 px-4 sm:px-6 animate-in fade-in duration-200">
      <div className="max-w-115 mx-auto bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200/90 dark:border-zinc-800 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl font-black text-lw-blue tracking-tight">
            {t.login_title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            {t.login_subtitle}
          </p>
          <div className="w-12 h-1 bg-lw-blue rounded-full mx-auto mt-2"></div>
        </div>

        {/* Mode Tabs */}
        <div className="grid grid-cols-2 p-1 bg-blue-50/70 border border-blue-100 rounded-2xl gap-1">
          <button
            type="button"
            onClick={() => setLoginMode("phone")}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              loginMode === "phone"
                ? "bg-white text-lw-blue shadow-xs border border-blue-200"
                : "text-slate-600 hover:text-lw-blue"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t.login_tab_phone}</span>
          </button>
          <button
            type="button"
            onClick={() => setLoginMode("email")}
            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 ${
              loginMode === "email"
                ? "bg-white text-lw-blue shadow-xs border border-blue-200 font-bold"
                : "text-slate-600 hover:text-lw-blue"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.login_tab_email}</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          {loginMode === "phone" ? (
            <div>
              <label className="block font-bold text-slate-800 mb-1.5 text-xs">
                {t.label_phone_num}
              </label>
              <div className="flex rounded-2xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-lw-blue focus-within:border-lw-blue bg-white">
                <span className="px-4 py-3 bg-slate-100/90 text-slate-800 font-bold text-xs flex items-center border-r border-slate-200 whitespace-nowrap">
                  +856 20
                </span>
                <input
                  type="tel"
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                  placeholder="920-xxx-xxx"
                  className="w-full px-3.5 py-3 text-xs bg-white text-slate-800 focus:outline-none"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block font-bold text-slate-800 mb-1.5 text-xs">
                {t.label_email_addr}
              </label>
              <div className="flex rounded-2xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-lw-blue focus-within:border-lw-blue bg-white">
                <span className="px-4 py-3 bg-slate-100/90 text-slate-800 font-bold text-xs flex items-center border-r border-slate-200">
                  <Mail className="w-4 h-4 text-slate-500" />
                </span>
                <input
                  type="email"
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-3 text-xs bg-white text-slate-800 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-bold text-slate-800 text-xs">{t.label_password}</label>
              <button
                type="button"
                onClick={() =>
                  showToast(
                    currentLang === "lo"
                      ? "ກະລຸນາຕິດຕໍ່ຝ່າຍ HR ເພື່ອຣີເຊັດລະຫັດຜ່ານ: 021 415 555"
                      : "Please contact HR department to reset password: +856 21 415 555"
                  )
                }
                className="text-amber-600 hover:text-amber-700 font-bold text-[11px]"
              >
                {currentLang === "lo" ? "ລືມລະຫັດຜ່ານ?" : "Forgot password?"}
              </button>
            </div>
            <div className="flex items-center rounded-2xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-lw-blue focus-within:border-lw-blue bg-white px-3 py-1">
              <Lock className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type={showLoginPassword ? "text" : "password"}
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full py-2 text-xs bg-white text-slate-800 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                {showLoginPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-lw-blue hover:bg-lw-lightBlue text-white font-bold rounded-2xl transition shadow-xs text-xs active:scale-98 flex items-center justify-center gap-2"
          >
            <span>{t.btn_login_submit}</span>
          </button>

          <div className="relative py-2 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative px-3 bg-white text-[11px] text-slate-400 font-semibold">
              {t.or_continue_with}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialAuth("Google")}
              className="py-2.5 px-3 border border-slate-200 hover:bg-slate-50 rounded-xl flex items-center justify-center gap-2 text-slate-700 font-semibold text-xs transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => handleSocialAuth("Facebook")}
              className="py-2.5 px-3 border border-slate-200 hover:bg-slate-50 rounded-xl flex items-center justify-center gap-2 text-slate-700 font-semibold text-xs transition"
            >
              <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <span className="text-slate-500">{t.no_account_yet} </span>
            <button
              type="button"
              onClick={() => navigateTo("signup")}
              className="text-lw-blue font-bold hover:underline"
            >
              {t.btn_go_signup}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
