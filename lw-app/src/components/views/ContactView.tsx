"use client";

import React, { useState } from "react";
import { LanguageType, I18N } from "@/data/jobsData";
import {
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
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

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!contactName.trim() || !contactMessage.trim()) {
      showToast(
        currentLang === "lo"
          ? "ກະລຸນາໃສ່ຊື່ ແລະ ຂໍ້ຄວາມຂອງທ່ານກ່ອນ"
          : "Please enter your name and message first"
      );
      return;
    }

    const emailTo = "hr.careers@laoworld.la";
    const subject = `[Lao World Careers Inquire] ${contactSubject || "ສອບຖາມວຽກ"}`;
    const body = `ສະບາຍດີ ທີມງານ HR ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ,

ຊື່ ແລະ ນາມສະກຸນ: ${contactName}
ເບີໂທລະສັບ: ${contactPhone || "-"}
ຫົວຂໍ້: ${contactSubject || "-"}

ຂໍ້ຄວາມສອບຖາມ:
${contactMessage}
`;

    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    showToast(
      currentLang === "lo"
        ? `ກຳລັງເປີດໂປຣແກຣມ Email ເພື່ອສົ່ງຫາ HR...`
        : `Opening your email application to send message...`
    );
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!contactName.trim() || !contactMessage.trim()) {
      showToast(
        currentLang === "lo"
          ? "ກະລຸນາໃສ່ຊື່ ແລະ ຂໍ້ຄວາມຂອງທ່ານກ່ອນ"
          : "Please enter your name and message first"
      );
      return;
    }

    const waPhone = "8562055512345";
    const text = `*ສອບຖາມຂໍ້ມູນຮັບສະໝັກວຽກ - Lao World Public Company*
• ຊື່: ${contactName}
• ເບີໂທ: ${contactPhone || "-"}
• ຫົວຂໍ້: ${contactSubject || "-"}

*ຂໍ້ຄວາມ:*
${contactMessage}`;

    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    showToast(
      currentLang === "lo"
        ? `ກຳລັງເປີດ WhatsApp ເພື່ອສົ່ງຂໍ້ຄວາມຫາ HR...`
        : `Opening WhatsApp chat with HR team...`
    );
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-10 animate-in fade-in duration-200">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="px-3.5 py-1 bg-blue-100 text-lw-blue rounded-full text-xs font-bold uppercase tracking-wider inline-block">
          {t.contact_badge}
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
        <a
          href="tel:021415555"
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 hover:border-[#0070ba]/40 hover:shadow-xs transition block text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue group-hover:bg-[#0070ba] group-hover:text-white flex items-center justify-center font-bold transition-colors">
            <PhoneCall className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0070ba] transition-colors">{t.card_hotline_title}</h3>
          <p className="text-xs text-slate-600">021 415 555 / 020 5551 2345</p>
          <span className="text-[10px] text-slate-400 block">
            {t.card_hotline_sub}
          </span>
        </a>

        <a
          href="mailto:hr.careers@laoworld.la"
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 hover:border-[#0070ba]/40 hover:shadow-xs transition block text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue group-hover:bg-[#0070ba] group-hover:text-white flex items-center justify-center font-bold transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0070ba] transition-colors">{t.card_email_title}</h3>
          <p className="text-xs text-slate-600">hr.careers@laoworld.la</p>
          <span className="text-[10px] text-slate-400 block">
            {t.card_email_sub}
          </span>
        </a>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-lw-blue flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{t.card_hq_title}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t.card_hq_sub}
          </p>
        </div>

        <a
          href="https://www.facebook.com/laoworldpublic/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 hover:border-[#1877F2]/50 hover:shadow-md transition-all group block text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white flex items-center justify-center font-bold transition-all shadow-2xs">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#1877F2] transition-colors">
              {t.card_social_title}
            </h3>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1877F2] transition-colors" />
          </div>
          <p className="text-xs text-[#1877F2] font-semibold group-hover:underline">
            FB: Lao World Public Company
          </p>
          <span className="text-[10px] text-slate-400 block">
            {t.card_social_sub}
          </span>
        </a>
      </div>

      {/* Quick Message Form & Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Send className="w-4 h-4 text-lw-blue" />
            <span>{t.contact_send_msg}</span>
          </h2>
          <form onSubmit={handleSendEmail} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder={t.placeholder_fullname}
                className="px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
              />
              <input
                type="tel"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder={t.placeholder_phone}
                className="px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
              />
            </div>
            <input
              type="text"
              required
              value={contactSubject}
              onChange={(e) => setContactSubject(e.target.value)}
              placeholder={t.placeholder_subject}
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
            />
            <textarea
              rows={4}
              required
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder={t.placeholder_msg}
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lw-blue bg-white"
            ></textarea>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleSendEmail}
                className="flex-1 py-2.5 px-4 bg-[#0070ba] hover:bg-[#005a96] text-white font-bold rounded-xl transition text-xs shadow-2xs flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>{t.btn_send_email}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition text-xs shadow-2xs flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.btn_send_whatsapp}</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center sm:text-left pt-1">
              {currentLang === "lo"
                ? "💡 ກົດເລືອກສົ່ງຜ່ານ Email ຫຼື WhatsApp ເພື່ອສົ່ງຂໍ້ຄວາມຫາ HR ໂດຍກົງ"
                : "💡 Choose Email or WhatsApp to send your inquiry directly to HR"}
            </p>
          </form>
        </div>

        <div className="lg:col-span-5 bg-slate-100/70 rounded-3xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            {t.facilities_title}
          </h2>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                {currentLang === "lo" ? "1. ຫ້ອງການໃຫຍ່" : "1. Headquarters"}
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                {currentLang === "lo"
                  ? "ບ້ານໂພນທັນ, ເມືອງໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ (10 ຕຳແໜ່ງ)"
                  : "Phonthan Village, Xaysettha District, Vientiane Capital (10 Openings)"}
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                {currentLang === "lo" ? "2. ສູນການຄ້າທົ່ງຂັນຄຳ" : "2. Thongkhankham Mall"}
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                {currentLang === "lo"
                  ? "ບ້ານທົ່ງຂັນຄຳ, ເມືອງຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ (5 ຕຳແໜ່ງ)"
                  : "Thongkhankham Village, Chanthabouly District, Vientiane Capital (5 Openings)"}
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                {currentLang === "lo" ? "3. ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ" : "3. Lao-ITECC Exhibition Center"}
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                {currentLang === "lo"
                  ? "ຖະໜົນກຳແພງເມືອງ, ເມືອງໄຊເສດຖາ (9 ຕຳແໜ່ງ)"
                  : "Kamphengmeuang Road, Xaysettha District (9 Openings)"}
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-lw-blue block">
                {currentLang === "lo" ? "4. ສູນການຄ້າ ໄອເຕັກມໍ" : "4. ITECC Mall"}
              </strong>
              <p className="text-slate-500 text-[11px] mt-0.5">
                {currentLang === "lo"
                  ? "ສູນການຄ້າ ແລະ ບັນເທີງຄົບວົງຈອນ ຕິດກັບ ລາວ-ໄອເຕັກ (9 ຕຳແໜ່ງ)"
                  : "Premier shopping & entertainment mall adjacent to Lao-ITECC (9 Openings)"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
