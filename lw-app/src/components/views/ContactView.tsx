"use client";

import React, { useState } from "react";
import { LanguageType, I18N } from "@/data/jobsData";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

interface ContactViewProps {
  currentLang: LanguageType;
  showToast: (msg: string) => void;
  t: (typeof I18N)["lo"];
}

export default function ContactView({
  currentLang,
  showToast,
  t,
}: ContactViewProps) {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactName("");
    setContactPhone("");
    setContactSubject("");
    setContactMessage("");
    showToast(
      currentLang === "lo"
        ? `ຂໍຂອບໃຈທ່ານ ${contactName}! ທີມງານ HR ຈະຕິດຕໍ່ກັບໂດຍໄວ`
        : `Thank you ${contactName}! Our recruitment team will reply shortly.`
    );
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-10">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="px-3.5 py-1 bg-blue-100 text-lw-blue rounded-full text-xs font-bold uppercase tracking-wider">
          Contact Recruitment Team
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {t.contact_title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          {t.contact_desc}
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            <PhoneCall className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">ສາຍດ່ວນ HR</h3>
          <p className="text-xs text-slate-600">021 415 555 / 020 5551 2345</p>
          <span className="text-[10px] text-slate-400 block">
            ຈັນ - ສຸກ: 8:00 - 17:00
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">ອີເມວສັນຫາວຽກ</h3>
          <p className="text-xs text-slate-600">hr.careers@laoworld.la</p>
          <span className="text-[10px] text-slate-400 block">
            ສົ່ງ CV ໄດ້ຕະຫຼອດ 24 ຊມ
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">ຫ້ອງການໃຫຍ່</h3>
          <p className="text-xs text-slate-600">
            ຖະໜົນກຳແພງເມືອງ, ບ້ານໂພນທັນ, ເມືອງໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">WhatsApp / Page</h3>
          <p className="text-xs text-slate-600">FB: Lao World Public Company</p>
          <span className="text-[10px] text-slate-400 block">
            ຕອບກັບພາຍໃນ 24 ຊົ່ວໂມງ
          </span>
        </div>
      </div>

      {/* Quick Message Form & Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Send className="w-4 h-4 text-lw-blue" />
            <span>{t.contact_send_msg}</span>
          </h2>
          <form onSubmit={handleContactSubmit} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="ຊື່ ແລະ ນາມສະກຸນຂອງທ່ານ"
                className="px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
              />
              <input
                type="tel"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="ເບີໂທລະສັບຕິດຕໍ່"
                className="px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
              />
            </div>
            <input
              type="text"
              required
              value={contactSubject}
              onChange={(e) => setContactSubject(e.target.value)}
              placeholder="ຫົວຂໍ້ທີ່ຕ້ອງການສອບຖາມ (ເຊັ່ນ: ສອບຖາມຕຳແໜ່ງ IT Support)"
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
            />
            <textarea
              rows={4}
              required
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="ພິມຂໍ້ຄວາມຂອງທ່ານທີ່ນີ້..."
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2.5 bg-lw-blue hover:bg-lw-lightBlue text-white font-bold rounded-xl transition text-xs shadow-2xs"
            >
              ສົ່ງຂໍ້ຄວາມ
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 bg-slate-100/70 rounded-3xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            4 ສະຖານທີ່ປະຈຳການ
          </h2>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                1. ຫ້ອງການໃຫຍ່ (Headquarters)
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                ບ້ານໂພນທັນ, ເມືອງໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ (10 ຕຳແໜ່ງ)
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                2. ສູນການຄ້າທົ່ງຂັນຄຳ (Thongkhankham)
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                ບ້ານທົ່ງຂັນຄຳ, ເມືອງຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ (5 ຕຳແໜ່ງ)
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                3. ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ (Lao-ITECC)
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                ຖະໜົນກຳແພງເມືອງ, ເມືອງໄຊເສດຖາ (9 ຕຳແໜ່ງ)
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                4. ໄອເຕັກມໍ (ITECC Mall)
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                ສູນການຄ້າ ແລະ ບັນເທີງຄົບວົງຈອນ ຕິດກັບ ລາວ-ໄອເຕັກ (9 ຕຳແໜ່ງ)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
