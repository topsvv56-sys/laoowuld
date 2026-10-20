"use client";

import React from "react";
import { Job } from "@/data/jobsData";
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
}

export default function JobDetailView({
  job,
  onBack,
  onOpenApplyModal,
}: JobDetailViewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-lw-blue hover:text-lw-lightBlue"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ກັບຄືນໜ້າຕຳແໜ່ງວຽກ</span>
        </button>
        <span className="text-xs text-slate-400">
          ຕຳແໜ່ງ &gt;{" "}
          <span className="text-slate-700 font-semibold">{job.title}</span>
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Details */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-lw-blue">
                ປະຈຳ {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ກຳລັງເປີດຮັບສະໝັກ (Open)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                <CalendarCheck className="w-3.5 h-3.5 text-rose-500" />
                ປິດຮັບ: {job.endDate || "30/11/2026 (ຫຼື ຈົນກວ່າຈະຄົບ)"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {job.no}. {job.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ (LAO WORLD PUBLIC COMPANY)
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <CheckSquare className="w-4 h-4 text-lw-blue" />
              ໜ້າທີ່ຮັບຜິດຊອບ (Responsibilities)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pl-2">
              {job.responsibilities.map((r, i) => (
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
              ຄຸນສົມບັດສະເພາະ (Requirements)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pl-2">
              {job.requirements.map((req, i) => (
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
              ຜົນປະໂຫຍດ ແລະ ສະຫວັດດີການ (Benefits)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>ປະກັນສັງຄົມ ແລະ ປະກັນໄພສຸຂະພາບຕາມລະບຽບກົດໝາຍແຮງງານ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>ໂບນັດປະຈຳປີ ແລະ ເງິນລາງວັນຕາມຜົນງານ (KPI Bonus)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>ວັນພັກປະຈຳປີ, ວັນພັກບຸນປະເພນີ ແລະ ວັນລາພັກພິເສດ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>ໂອກາດຝຶກອົບຮົມ ແລະ ເຕີບໂຕໃນສາຍອາຊີບກັບກຸ່ມບໍລິສັດ ລາວເວີລ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              ຂໍ້ມູນສະຫຼຸບ
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    ສະຖານທີ່ປະຈຳການ:
                  </span>
                  <span className="font-bold text-slate-800">{job.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    ປະເພດການຈ້າງ:
                  </span>
                  <span className="font-bold text-slate-800">{job.type}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Banknote className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">ເງິນເດືອນ:</span>
                  <span className="font-bold text-emerald-600">
                    ອີງຕາມປະສົບການ &amp; ໂຄງສ້າງ
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80"></div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    ວັນທີເປີດຮັບສະໝັກ:
                  </span>
                  <span className="font-bold text-slate-800">
                    {job.startDate || "01/10/2026"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarCheck className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    ວັນທີປິດຮັບສະໝັກ:
                  </span>
                  <span className="font-bold text-rose-600">
                    {job.endDate || "30/11/2026 (ຫຼື ຈົນກວ່າຈະຄົບ)"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    ສະຖານະ:
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ກຳລັງເປີດຮັບສະໝັກ
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={() => onOpenApplyModal(job.id)}
                className="w-full py-3 bg-lw-blue hover:bg-lw-lightBlue text-white font-bold rounded-xl text-xs transition shadow-sm active:scale-95 flex items-center justify-center gap-2"
              >
                <span>ສະໝັກດ່ວນ (Easy Apply)</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/50 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-lw-blue block">
              ຕ້ອງການສອບຖາມເພີ່ມເຕີມ?
            </span>
            <p className="text-[11px] text-slate-500">
              ຕິດຕໍ່ຝ່າຍບຸກຄົນ: 021 415 555 ຫຼື ອີເມວ hr.recruitment@laoworld.la
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
