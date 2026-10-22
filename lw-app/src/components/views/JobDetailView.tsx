"use client";

import React from "react";
import {
  Job,
  LanguageType,
  I18N,
  getJobTitle,
  getJobLocation,
  getJobType,
  getJobResponsibilities,
  getJobRequirements,
} from "@/data/jobsData";
import {
  ArrowLeft,
  CheckSquare,
  UserCheck,
  Gift,
  MapPin,
  Clock,
  Banknote,
  Send,
  Calendar,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

interface JobDetailViewProps {
  job: Job;
  onBack: () => void;
  onOpenApplyModal: (jobId: string) => void;
  currentLang: LanguageType;
  t: (typeof I18N)["lo"];
}

export default function JobDetailView({
  job,
  onBack,
  onOpenApplyModal,
  currentLang,
  t,
}: JobDetailViewProps) {
  const jobTitle = getJobTitle(job, currentLang);
  const jobLocation = getJobLocation(job, currentLang);
  const jobType = getJobType(job, currentLang);
  const responsibilities = getJobResponsibilities(job, currentLang);
  const requirements = getJobRequirements(job, currentLang);

  const formattedDeadline = job.endDate
    ? currentLang === "lo"
      ? job.endDate
      : `${job.endDate.split(" ")[0]} (or until filled)`
    : currentLang === "lo"
    ? "30/11/2026 (ຫຼື ຈົນກວ່າຈະຄົບ)"
    : "30/11/2026 (or until filled)";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-lw-blue hover:text-lw-lightBlue transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back_to_jobs}</span>
        </button>
        <span className="text-xs text-slate-400">
          {t.breadcrumb_position}{" "}
          <span className="text-slate-700 font-semibold">{jobTitle}</span>
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Details */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-lw-blue">
                {currentLang === "lo" ? `ປະຈຳ ${jobLocation}` : jobLocation}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {t.job_status_open}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                <CalendarCheck className="w-3.5 h-3.5 text-rose-500" />
                {t.job_deadline} {formattedDeadline}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {job.no}. {jobTitle}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {t.company_name_full}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <CheckSquare className="w-4 h-4 text-lw-blue" />
              {t.responsibilities_title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pl-2">
              {responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lw-blue mt-2 flex-shrink-0"></span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <UserCheck className="w-4 h-4 text-lw-blue" />
              {t.requirements_title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pl-2">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Gift className="w-4 h-4 text-lw-blue" />
              {t.benefits_title}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>{t.benefit_social_security}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>{t.benefit_bonus}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>{t.benefit_leave}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>{t.benefit_training}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.summary_title}
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {t.label_facility}
                  </span>
                  <span className="font-bold text-slate-800">{jobLocation}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {t.label_job_type}
                  </span>
                  <span className="font-bold text-slate-800">{jobType}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Banknote className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.label_salary}</span>
                  <span className="font-bold text-emerald-600">
                    {t.salary_structure}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80"></div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {t.label_open_date}
                  </span>
                  <span className="font-bold text-slate-800">
                    {job.startDate || "01/10/2026"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarCheck className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {t.label_deadline}
                  </span>
                  <span className="font-bold text-rose-600">
                    {formattedDeadline}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {t.label_status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {t.job_status_open}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={() => onOpenApplyModal(job.id)}
                className="w-full py-3 bg-lw-blue hover:bg-lw-lightBlue text-white font-bold rounded-xl text-xs transition shadow-sm active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{t.btn_easy_apply}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/50 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-lw-blue block">
              {t.inquire_more}
            </span>
            <p className="text-[11px] text-slate-500">
              {t.inquire_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
