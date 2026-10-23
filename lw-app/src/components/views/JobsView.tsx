import React from "react";
import {
  Job,
  CATEGORIES,
  LocationFilter,
  LanguageType,
  I18N,
  getJobTitle,
  getJobLocation,
  getJobType,
  getCategoryTitle,
} from "@/data/jobsData";
import {
  Search,
  MapPin,
  FolderSearch,
  Briefcase,
  Laptop,
  Megaphone,
  FileText,
  ConciergeBell,
} from "lucide-react";

interface JobsViewProps {
  filteredJobs: Job[];
  currentLocFilter: LocationFilter;
  setCurrentLocFilter: (loc: LocationFilter) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onViewDetails: (jobId: string) => void;
  onOpenApplyModal: (jobId: string) => void;
  currentLang: LanguageType;
  t: (typeof I18N)["lo"];
}

export default function JobsView({
  filteredJobs,
  currentLocFilter,
  setCurrentLocFilter,
  searchQuery,
  setSearchQuery,
  onViewDetails,
  onOpenApplyModal,
  currentLang,
  t,
}: JobsViewProps) {
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "briefcase":
        return <Briefcase className="w-3.5 h-3.5" />;
      case "laptop":
        return <Laptop className="w-3.5 h-3.5" />;
      case "megaphone":
        return <Megaphone className="w-3.5 h-3.5" />;
      case "file-text":
        return <FileText className="w-3.5 h-3.5" />;
      case "concierge-bell":
        return <ConciergeBell className="w-3.5 h-3.5" />;
      default:
        return <Briefcase className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-6">
      {/* Title and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/90 pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {t.hero_title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {t.hero_subtitle}
          </p>
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search_placeholder}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lw-blue focus:border-lw-blue shadow-2xs"
          />
        </div>
      </div>

      {/* 5 Facility Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setCurrentLocFilter("all")}
          className={`px-4 py-2 rounded-xl transition whitespace-nowrap flex items-center gap-1.5 ${
            currentLocFilter === "all"
              ? "font-bold bg-lw-blue text-white shadow-2xs"
              : "font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span>{t.tab_all}</span>
        </button>
        <button
          onClick={() => setCurrentLocFilter("headquarters")}
          className={`px-4 py-2 rounded-xl transition whitespace-nowrap flex items-center gap-1.5 ${
            currentLocFilter === "headquarters"
              ? "font-bold bg-lw-blue text-white shadow-2xs"
              : "font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span>{t.tab_hq}</span>
        </button>
        <button
          onClick={() => setCurrentLocFilter("thongkhankham")}
          className={`px-4 py-2 rounded-xl transition whitespace-nowrap flex items-center gap-1.5 ${
            currentLocFilter === "thongkhankham"
              ? "font-bold bg-lw-blue text-white shadow-2xs"
              : "font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span>{t.tab_thong}</span>
        </button>
        <button
          onClick={() => setCurrentLocFilter("itecc_exhibit")}
          className={`px-4 py-2 rounded-xl transition whitespace-nowrap flex items-center gap-1.5 ${
            currentLocFilter === "itecc_exhibit"
              ? "font-bold bg-lw-blue text-white shadow-2xs"
              : "font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span>{t.tab_exhibit}</span>
        </button>
        <button
          onClick={() => setCurrentLocFilter("itecc_mall")}
          className={`px-4 py-2 rounded-xl transition whitespace-nowrap flex items-center gap-1.5 ${
            currentLocFilter === "itecc_mall"
              ? "font-bold bg-lw-blue text-white shadow-2xs"
              : "font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span>{t.tab_mall}</span>
        </button>
      </div>

      {/* Categorized Jobs */}
      {filteredJobs.length === 0 ? (
        <div className="py-16 bg-white rounded-2xl border border-slate-200 text-center text-slate-400">
          <FolderSearch className="w-12 h-12 mx-auto text-slate-300 mb-2" />
          <p className="text-sm font-bold text-slate-700">{t.no_jobs_found}</p>
          <p className="text-xs text-slate-400 mt-1">
            {t.try_search_again}
          </p>
        </div>
      ) : (
        <div className="space-y-6 pt-2">
          {CATEGORIES.map((cat) => {
            const jobsInCat = filteredJobs.filter(
              (j) => j.categoryKey === cat.key
            );
            if (jobsInCat.length === 0) return null;

            return (
              <div key={cat.key} className="space-y-3">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm sm:text-base border-b border-slate-200/80 pb-2">
                  <span
                    className={`w-6 h-6 rounded-lg ${cat.color} flex items-center justify-center shrink-0`}
                  >
                    {renderCategoryIcon(cat.icon)}
                  </span>
                  <span>{getCategoryTitle(cat.key, currentLang)}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {jobsInCat.map((job) => {
                    return (
                      <div
                        key={job.id}
                        className="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-2xs hover:shadow-xs hover:border-blue-300 transition flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-xs font-bold text-slate-900 line-clamp-1 leading-snug">
                            {job.no}. {getJobTitle(job, currentLang)}
                          </h3>

                          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 mb-2">
                            <span className="flex items-center gap-1 truncate max-w-32.5">
                              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                              <span className="truncate">{getJobLocation(job, currentLang)}</span>
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 shrink-0">
                              {getJobType(job, currentLang)}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2.5 pt-1.5 border-t border-dashed border-slate-100">
                            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {t.job_status_open}
                            </span>
                            <span className="text-slate-400">
                              {t.job_deadline} {job.endDate ? job.endDate.split(" ")[0] : "30/11/2026"}
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
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
