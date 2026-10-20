"use client";

import React from "react";
import { Application } from "@/data/jobsData";
import { ClipboardList } from "lucide-react";

interface TrackerViewProps {
  appliedJobs: Application[];
}

export default function TrackerView({ appliedJobs }: TrackerViewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          ຕິດຕາມສະຖານະໃບສະໝັກ (Application Tracker)
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          ກວດສອບຂັ້ນຕອນ ແລະ ຄວາມຄືບໜ້າຂອງຕຳແໜ່ງທີ່ທ່ານໄດ້ຍື່ນສະໝັກໄວ້ກັບ ລາວເວີລ ມະຫາຊົນ
        </p>
      </div>

      {appliedJobs.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-400">
          <ClipboardList className="w-12 h-12 mx-auto text-slate-300 mb-2" />
          <h3 className="text-sm font-bold text-slate-700">
            ຍັງບໍ່ມີປະຫວັດການສະໝັກ
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            ກະລຸນາເລືອກຕຳແໜ່ງ ແລະ ກົດ &quot;ສະໝັກດ່ວນ&quot; ເພື່ອສົ່ງໃບສະໝັກ
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {appliedJobs.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-slate-400">
                    ເລກທີໃບສະໝັກ: {app.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{app.title}</h3>
                  <p className="text-xs text-slate-500">
                    {app.location} • ຍື່ນເມື່ອ: {app.date}
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
                    1. ຍື່ນແລ້ວ
                  </span>
                </div>
                <div>
                  <div className="h-2 rounded-full bg-blue-200"></div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    2. ກວດສອບ
                  </span>
                </div>
                <div>
                  <div className="h-2 rounded-full bg-slate-100"></div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    3. ສຳພາດ
                  </span>
                </div>
                <div>
                  <div className="h-2 rounded-full bg-slate-100"></div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    4. ຜົນການຄັດເລືອກ
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
