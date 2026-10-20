"use client";

import React from "react";
import { ViewType } from "@/data/jobsData";

interface FooterProps {
  navigateTo: (view: ViewType) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => navigateTo("jobs")}
            className="flex items-center group text-left focus:outline-none hover:opacity-90 transition"
          >
            <img
              src="/lao-world-logo-cropped.png"
              alt="Lao World Public Company"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </button>
        </div>
        <div>
          <p className="font-bold text-slate-700">“Together, We create a world”</p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            © 2026 ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ. ສະຫງວນລິຂະສິດ.
          </p>
        </div>
        <div className="text-xs text-slate-400">Careers &amp; Recruitment Portal</div>
      </div>
    </footer>
  );
}
