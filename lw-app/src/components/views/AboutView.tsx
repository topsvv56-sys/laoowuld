"use client";

import React from "react";
import { LanguageType, I18N } from "@/data/jobsData";

interface AboutViewProps {
  currentLang?: LanguageType;
}

export default function AboutView({ currentLang = "lo" }: AboutViewProps) {
  const t = I18N[currentLang];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in duration-200">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1 bg-blue-100 text-lw-blue rounded-full text-xs font-bold uppercase tracking-wider inline-block">
          {t.about_badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {t.about_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {t.about_desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {currentLang === "lo" ? "ຫ້ອງການໃຫຍ່" : "Headquarters"}
          </h3>
          <p className="text-xs text-slate-500">
            {currentLang === "lo"
              ? "ສູນກາງການບໍລິຫານຍຸດທະສາດ, ບຸກຄະລາກອນ, ການເງິນ ແລະ ນິຕິກຳ (10 ຕຳແໜ່ງ)."
              : "Center for strategic management, human resources, finance, and legal affairs (10 Openings)."}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {currentLang === "lo" ? "ສູນການຄ້າທົ່ງຂັນຄຳ" : "Thongkhankham Mall"}
          </h3>
          <p className="text-xs text-slate-500">
            {currentLang === "lo"
              ? "ສູນການຄ້າ ແລະ ຕະຫຼາດທັນສະໄໝໃຈກາງນະຄອນຫຼວງ (5 ຕຳແໜ່ງ)."
              : "Modern commercial shopping complex and market in central Vientiane (5 Openings)."}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {currentLang === "lo" ? "ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ" : "Lao-ITECC Exhibition Center"}
          </h3>
          <p className="text-xs text-slate-500">
            {currentLang === "lo"
              ? "ສູນວາງສະແດງສິນຄ້າ, ງານປະຊຸມ, ງານລ້ຽງ ແລະ ອີເວັ້ນລະດັບຊາດ (9 ຕຳແໜ່ງ)."
              : "National trade exhibition, conventions, banquets, and major event venue (9 Openings)."}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            04
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {currentLang === "lo" ? "ສູນການຄ້າ ໄອເຕັກມໍ" : "ITECC Mall"}
          </h3>
          <p className="text-xs text-slate-500">
            {currentLang === "lo"
              ? "ສູນການຄ້າ, ສູນອາຫານ ແລະ ຄວາມບັນເທີງຄົບວົງຈອນ (9 ຕຳແໜ່ງ)."
              : "Premier shopping mall, dining, and family entertainment complex (9 Openings)."}
          </p>
        </div>
      </div>
    </div>
  );
}
