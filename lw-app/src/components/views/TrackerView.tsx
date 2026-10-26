"use client";

import React from "react";
import { Application, LanguageType, I18N } from "@/data/jobsData";
import { ClipboardList } from "lucide-react";

interface TrackerViewProps {
  appliedJobs: Application[];
  currentLang?: LanguageType;
  t: (typeof I18N)["lo"];
}

export default function TrackerView({
  appliedJobs,
  t,
}: TrackerViewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {t.tracker_title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {t.tracker_desc}
        </p>
      </div>

      {appliedJobs.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 p-12 text-center text-slate-400 dark:text-zinc-500">
          <ClipboardList className="w-12 h-12 mx-auto text-slate-300 dark:text-zinc-600 mb-2" />
          <h3 className="text-sm font-bold text-slate-700 dark:text-zinc-300">
            {t.tracker_empty_title}
          </h3>
          <p className="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">
            {t.tracker_empty_desc}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {appliedJobs.map((app) => (
            <div
              key={app.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 p-6 space-y-4 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {t.app_id_label} {app.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{app.title}</h3>
                  <p className="text-xs text-slate-500">
                    {app.location} • {t.app_submitted_date} {app.date}
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold self-start sm:self-center">
                  ● {app.status}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div>
                  <div className="h-2 rounded-full bg-lw-blue"></div>
                  <span className="text-[10px] font-bold text-lw-blue mt-1 block">
                    {t.step_submitted}
                  </span>
                </div>
                <div>
                  <div className="h-2 rounded-full bg-blue-200"></div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {t.step_reviewing}
                  </span>
                </div>
                <div>
                  <div className="h-2 rounded-full bg-slate-100"></div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {t.step_interview}
                  </span>
                </div>
                <div>
                  <div className="h-2 rounded-full bg-slate-100"></div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {t.step_offer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
