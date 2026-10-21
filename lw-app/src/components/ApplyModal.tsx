"use client";

import React from "react";
import {
  ALL_JOBS,
  LanguageType,
  getJobTitle,
  getJobLocation,
} from "@/data/jobsData";
import { X, UploadCloud } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  setJobId: (id: string) => void;
  applicantName: string;
  setApplicantName: (name: string) => void;
  applicantEmail: string;
  setApplicantEmail: (email: string) => void;
  applicantPhone: string;
  setApplicantPhone: (phone: string) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  currentLang?: LanguageType;
}

export default function ApplyModal({
  isOpen,
  onClose,
  jobId,
  setJobId,
  applicantName,
  setApplicantName,
  applicantEmail,
  setApplicantEmail,
  applicantPhone,
  setApplicantPhone,
  isSubmitting,
  onSubmit,
  currentLang = "lo",
}: ApplyModalProps) {
  if (!isOpen) return null;

  const currentJob = ALL_JOBS.find((j) => j.id === jobId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200">
      <div className="bg-[#242b35] text-white rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
          <div>
            <h3 className="text-lg font-bold text-white">
              {currentLang === "lo" ? "ສະໝັກດ່ວນ" : "Easy Apply"}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {currentJob ? getJobTitle(currentJob, currentLang) : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3-Step Progress Bar */}
        <div className="py-3 border-b border-slate-700/80">
          <div className="flex items-center justify-between text-[11px] text-slate-300 font-medium mb-1.5">
            <span className="text-blue-400 font-bold">
              {currentLang === "lo" ? "1. ຂໍ້ມູນສ່ວນຕົວ" : "1. Personal Info"}
            </span>
            <span>&gt;</span>
            <span className="text-slate-400">
              {currentLang === "lo" ? "2. ອັບໂຫຼດຊີວະປະຫວັດ" : "2. Upload Resume"}
            </span>
            <span>&gt;</span>
            <span className="text-slate-400">
              {currentLang === "lo" ? "3. ສົ່ງໃບສະໝັກ" : "3. Submit"}
            </span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-1/3 rounded-full"></div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="overflow-y-auto flex-1 py-4 space-y-3.5 text-xs text-slate-200"
        >
          <div>
            <label className="block font-semibold mb-1 text-slate-300">
              {currentLang === "lo"
                ? "ເລືອກຕຳແໜ່ງງານທີ່ຕ້ອງການສະໝັກ"
                : "Select Position to Apply"}{" "}
              <span className="text-rose-400">*</span>
            </label>
            <select
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
              required
              className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            >
              {ALL_JOBS.map((j) => (
                <option key={j.id} value={j.id}>
                  [{getJobLocation(j, currentLang)}] • {j.no}. {getJobTitle(j, currentLang)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-300">
              {currentLang === "lo" ? "ຊື່ ແລະ ນາມສະກຸນ" : "Full Name"}{" "}
              <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              required
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              placeholder={currentLang === "lo" ? "ປ້ອນຊື່ ແລະ ນາມສະກຸນ" : "Enter your full name"}
              className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-300">
              {currentLang === "lo" ? "ອີເມວ" : "Email Address"}{" "}
              <span className="text-rose-400">*</span>
            </label>
            <input
              type="email"
              required
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-300">
              {currentLang === "lo" ? "ເບີໂທລະສັບ" : "Phone Number"}{" "}
              <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              required
              value={applicantPhone}
              onChange={(e) => setApplicantPhone(e.target.value)}
              placeholder="020 xxxx xxxx"
              className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-300">
              {currentLang === "lo"
                ? "ອັບໂຫຼດຊີວະປະຫວັດ (.pdf, .docx)"
                : "Upload Resume (.pdf, .docx)"}
            </label>
            <div className="border-2 border-dashed border-slate-600 bg-slate-800/80 rounded-xl p-4 text-center hover:bg-slate-800 transition cursor-pointer">
              <UploadCloud className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <p className="font-bold text-white text-xs">
                {currentLang === "lo" ? "ລາກ & ວາງໄຟລ໌ທີ່ນີ້" : "Drag & drop file here"}
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {currentLang === "lo"
                  ? "ຫຼື ຄລິກເພື່ອເລືອກໄຟລ໌ (.pdf, .docx)"
                  : "or click to browse (.pdf, .docx)"}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-700 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl transition text-xs"
            >
              {currentLang === "lo" ? "ຍົກເລີກ" : "Cancel"}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition text-xs shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>
                {isSubmitting
                  ? (currentLang === "lo" ? "ກຳລັງສົ່ງ..." : "Submitting...")
                  : (currentLang === "lo" ? "ສົ່ງໃບສະໝັກ" : "Submit Application")}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
