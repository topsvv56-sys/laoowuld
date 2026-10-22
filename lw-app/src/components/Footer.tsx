"use client";

import React from "react";
import { ViewType, LanguageType, I18N } from "@/data/jobsData";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Building2,
  ChevronRight,
  ShieldCheck,
  Briefcase,
  Users,
  Code2,
} from "lucide-react";

interface FooterProps {
  navigateTo: (view: ViewType) => void;
  currentLang?: LanguageType;
}

export default function Footer({ navigateTo, currentLang = "lo" }: FooterProps) {
  const t = I18N[currentLang];

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto text-xs text-slate-600">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Company Info & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => navigateTo("jobs")}
              className="flex items-center text-left focus:outline-none hover:opacity-90 transition"
            >
              <img
                src="/lao-world-logo-cropped.png"
                alt="Lao World Public Company"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </button>

            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-900">
                {currentLang === "lo" ? "ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ" : "Lao World Public Company"}
              </p>
              <p className="text-[11px] font-semibold text-[#0070ba] tracking-wide">
                “Together, We create a world”
              </p>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              {t.footer_company_desc}
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-50 text-[#0070ba] border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070ba]" />
              <span>{t.footer_lsx}</span>
            </div>
          </div>

          {/* Column 2: Our Facilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 pb-1 border-b border-slate-100">
              <Building2 className="w-3.5 h-3.5 text-[#0070ba]" />
              <span>{t.footer_facilities_title}</span>
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo("jobs")}
                  className="flex items-center justify-between w-full text-left text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                    <span>{currentLang === "lo" ? "ຫ້ອງການໃຫຍ່" : "Headquarters"}</span>
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {t.footer_pos_count_10}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("jobs")}
                  className="flex items-center justify-between w-full text-left text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                    <span>{currentLang === "lo" ? "ສູນການຄ້າທົ່ງຂັນຄຳ" : "Thongkhankham Mall"}</span>
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {t.footer_pos_count_5}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("jobs")}
                  className="flex items-center justify-between w-full text-left text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                    <span>{currentLang === "lo" ? "ສູນວາງສະແດງ ລາວ-ໄອເຕັກ" : "Lao-ITECC Exhibit"}</span>
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {t.footer_pos_count_9}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("jobs")}
                  className="flex items-center justify-between w-full text-left text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                    <span>{currentLang === "lo" ? "ສູນການຄ້າ ໄອເຕັກມໍ" : "ITECC Mall"}</span>
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {t.footer_pos_count_9}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 pb-1 border-b border-slate-100">
              <Briefcase className="w-3.5 h-3.5 text-[#0070ba]" />
              <span>{t.footer_quick_menu}</span>
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo("jobs")}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                  <span>{t.footer_all_jobs}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("talent")}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                  <span>{t.footer_talent}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("about")}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                  <span>{t.footer_about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("contact")}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-[#0070ba] transition py-1 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070ba] group-hover:translate-x-0.5 transition-transform" />
                  <span>{t.footer_contact_hr}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact HR (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 pb-1 border-b border-slate-100">
              <Users className="w-3.5 h-3.5 text-[#0070ba]" />
              <span>{t.footer_contact_title}</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#0070ba] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:021415555" className="font-bold text-slate-800 hover:text-[#0070ba] transition block">
                    021 415 555 / 020 5551 2345
                  </a>
                  <span className="text-[10px] text-slate-400">{t.card_hotline_title}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#0070ba] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:hr.careers@laoworld.la" className="font-bold text-slate-800 hover:text-[#0070ba] transition block">
                    hr.careers@laoworld.la
                  </a>
                  <span className="text-[10px] text-slate-400">{t.card_email_title}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 fill-[#1877F2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div>
                  <a
                    href="https://www.facebook.com/laoworldpublic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-800 hover:text-[#1877F2] transition block"
                  >
                    FB: Lao World Public Company
                  </a>
                  <span className="text-[10px] text-slate-400">{t.card_social_title}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0070ba] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-slate-700 block">
                    {t.footer_hours_text}
                  </span>
                  <span className="text-[10px] text-slate-400">{t.footer_hours_label}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0070ba] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-500 leading-tight block">
                    {t.card_hq_sub}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Developer Credit */}
      <div className="border-t border-slate-100 bg-slate-50/70 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-slate-500">
          <div>
            <span>© 2026 </span>
            <span className="font-semibold text-slate-700">
              {currentLang === "lo" ? "ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ" : "Lao World Public Company"}.
            </span>
            <span> {t.footer_copyright}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 shadow-2xs font-medium">
              <Code2 className="w-3.5 h-3.5 text-[#0070ba]" />
              <span className="text-slate-500">{t.footer_developer}:</span>
              <span className="font-semibold text-slate-900">{t.developer_name}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {currentLang === "lo" ? "ລະບົບຮັບສະໝັກງານອອນລາຍ" : "Careers Portal Online"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
