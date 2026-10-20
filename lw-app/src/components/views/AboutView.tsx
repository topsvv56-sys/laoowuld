"use client";

import React from "react";

export default function AboutView() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1 bg-blue-100 text-lw-blue rounded-full text-xs font-bold uppercase tracking-wider">
          About Lao World
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ ເປັນກຸ່ມບໍລິສັດຊັ້ນນຳຂອງ ສປປ ລາວ
          ທີ່ດຳເນີນທຸລະກິດດ້ານການບໍລິຫານສູນການຄ້າ, ສູນວາງສະແດງສິນຄ້າລະດັບຊາດ ແລະ
          ສາກົນ, ສູນອາຫານ ແລະ ຄວາມບັນເທີງຄົບວົງຈອນ ພາຍໃຕ້ຄຳຂວັນ “Together, We create a world”.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900">ຫ້ອງການໃຫຍ່</h3>
          <p className="text-xs text-slate-500">
            ສູນກາງການບໍລິຫານຍຸດທະສາດ, ບຸກຄະລາກອນ, ການເງິນ ແລະ ນິຕິກຳ (10 ຕຳແໜ່ງ).
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900">
            ສູນການຄ້າທົ່ງຂັນຄຳ
          </h3>
          <p className="text-xs text-slate-500">
            ສູນການຄ້າ ແລະ ຕະຫຼາດທັນສະໄໝໃຈກາງນະຄອນຫຼວງ (5 ຕຳແໜ່ງ).
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900">
            ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ
          </h3>
          <p className="text-xs text-slate-500">
            ສູນວາງສະແດງສິນຄ້າ, ງານປະຊຸມ, ງານລ້ຽງ ແລະ ອີເວັ້ນລະດັບຊາດ (9 ຕຳແໜ່ງ).
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            04
          </div>
          <h3 className="text-base font-bold text-slate-900">
            ໄອເຕັກມໍ (ITECC Mall)
          </h3>
          <p className="text-xs text-slate-500">
            ສູນການຄ້າ, ສູນອາຫານ ແລະ ຄວາມບັນເທີງຄົບວົງຈອນ (9 ຕຳແໜ່ງ).
          </p>
        </div>
      </div>
    </div>
  );
}
