"use client";

import React from "react";
import {
  Job,
  LanguageType,
  I18N,
  getJobTitle,
  getJobLocation,
  getJobType,
} from "@/data/jobsData";
import { Heart, MapPin } from "lucide-react";

interface SavedJobsViewProps {
  savedJobs: Job[];
  onToggleSave: (jobId: string, e?: React.MouseEvent) => void;
  onViewDetails: (jobId: string) => void;
  onOpenApplyModal: (jobId: string) => void;
  onBackToJobs: () => void;
  currentLang: LanguageType;
  t: (typeof I18N)["lo"];
}

export default function SavedJobsView({
  savedJobs,
  onToggleSave,
  onViewDetails,
  onOpenApplyModal,
  onBackToJobs,
  currentLang,
  t,
}: SavedJobsViewProps) {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-6 animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-slate-200/90 pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {t.saved_title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {t.saved_desc}
          </p>
        </div>
        <button
          onClick={onBackToJobs}
          className="text-xs font-bold text-lw-blue hover:underline"
        >
          &larr; <span>{t.btn_back_jobs}</span>
        </button>
      </div>

      {savedJobs.length === 0 ? (
        <div className="py-16 bg-white rounded-3xl border border-slate-200 text-center text-slate-400">
          <Heart className="w-12 h-12 mx-auto text-slate-300 mb-2" />
          <p className="text-sm font-bold text-slate-700">
            {t.saved_empty_title}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {t.saved_empty_desc}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:shadow-xs hover:border-blue-300 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-1 leading-snug">
                    {job.no}. {getJobTitle(job, currentLang)}
                  </h3>
                  <button
                    onClick={(e) => onToggleSave(job.id, e)}
                    className="text-rose-500 hover:text-rose-600 p-1 -mr-1"
                    title={currentLang === "lo" ? "ຍົກເລີກການບັນທຶກ" : "Remove from saved"}
                  >
                    <Heart className="w-4 h-4 fill-rose-500" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 mb-3">
                  <span className="flex items-center gap-1 truncate max-w-[130px]">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{getJobLocation(job, currentLang)}</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 shrink-0">
                    {getJobType(job, currentLang)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => onViewDetails(job.id)}
                  className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl text-slate-700 font-semibold text-[11px] text-center transition"
                >
                  {t.btn_details}
                </button>
                <button
                  onClick={() => onOpenApplyModal(job.id)}
                  className="py-1.5 px-2 bg-lw-blue hover:bg-lw-lightBlue text-white rounded-xl font-bold text-[11px] text-center transition shadow-2xs active:scale-95"
                >
                  {t.btn_easy_apply}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
