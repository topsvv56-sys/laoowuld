"use client";

import React, { useState } from "react";
import { LanguageType, ViewType } from "@/data/jobsData";
import {
  ShieldAlert,
  Scale,
  Clock,
  Shirt,
  UserCheck,
  AlertTriangle,
  HeartHandshake,
  FileText,
  CheckCircle2,
  Lock,
  PhoneCall,
  Mail,
  ChevronDown,
  Info,
  BadgeCheck,
} from "lucide-react";

interface RegulationsViewProps {
  currentLang?: LanguageType;
  navigateTo?: (view: ViewType) => void;
  showToast?: (msg: string) => void;
}

export default function RegulationsView({
  currentLang = "lo",
  navigateTo,
  showToast,
}: RegulationsViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const sections = [
    {
      id: "code-of-conduct",
      icon: HeartHandshake,
      badge: currentLang === "lo" ? "ໝວດທີ 1" : "Section 1",
      title: {
        lo: "ຈັນຍາບັນວິຊາຊີບ ແລະ ວັດທະນະທຳອົງກອນ",
        en: "Professional Code of Conduct & Corporate Culture",
      },
      subtitle: {
        lo: "ຫຼັກການເຮັດວຽກຮ່ວມກັນພາຍໃຕ້ຄຳຂວັນ “Together, We create a world”",
        en: "Core working principles under the motto “Together, We create a world”",
      },
      rules: {
        lo: [
          "ຄວາມຊື່ສັດ ແລະ ໂປ່ງໃສ: ປະຕິບັດໜ້າທີ່ດ້ວຍຄວາມສັດຊື່ບໍລິສຸດ, ບໍ່ສວຍໃຊ້ອຳນາດ ຫຼື ຕຳແໜ່ງໜ້າທີ່ເພື່ອຜົນປະໂຫຍດສ່ວນຕົນ.",
          "ຄວາມສາມັກຄີ ແລະ ການໃຫ້ກຽດ: ເຮັດວຽກເປັນທີມ, ເຄົາລົບເພື່ອນຮ່ວມງານ, ລູກຄ້າ ແລະ ຄູ່ຮ່ວມທຸລະກິດ ໂດຍປາສະຈາກການຈຳແນກ.",
          "ການຮັກສາຄວາມລັບ (Confidentiality): ຫ້າມເປີດເຜີຍຂໍ້ມູນພາຍໃນ, ຄວາມລັບທາງທຸລະກິດ ຫຼື ຂໍ້ມູນສ່ວນຕົວຂອງລູກຄ້າ ແລະ ພະນັກງານຕໍ່ບຸກຄົນພາຍນອກ.",
          "ການປົກປ້ອງຊັບສິນບໍລິສັດ: ນຳໃຊ້ອຸປະກອນ, ອາຄານສະຖານທີ່ ແລະ ຊັບພະຍາກອນຂອງບໍລິສັດຢ່າງປະຢັດ ແລະ ເກີດປະໂຫຍດສູງສຸດ.",
        ],
        en: [
          "Integrity & Honesty: Carry out duties faithfully without abusing authority or positions for personal gain.",
          "Unity & Mutual Respect: Foster teamwork, respect colleagues, customers, and business partners without discrimination.",
          "Confidentiality & Data Privacy: Strictly safeguard trade secrets, strategic plans, and proprietary company & customer data.",
          "Safeguarding Company Property: Use organizational equipment, facilities, and resources efficiently and with utmost care.",
        ],
      },
    },
    {
      id: "working-hours",
      icon: Clock,
      badge: currentLang === "lo" ? "ໝວດທີ 2" : "Section 2",
      title: {
        lo: "ເວລາການເຮັດວຽກ ແລະ ການແຕ່ງກາຍ",
        en: "Working Hours, Attendance & Professional Dress Code",
      },
      subtitle: {
        lo: "ມາດຕະຖານການລົງເວລາ, ຄວາມກົງຕໍ່ເວລາ ແລະ ພາບພົດອົງກອນ",
        en: "Punctuality, time tracking standards, and corporate professional image",
      },
      rules: {
        lo: [
          "ເວລາເຮັດວຽກຫ້ອງການໃຫຍ່ (HQ): ວັນຈັນ ເຖິງ ວັນສຸກ ເວລາ 08:30 - 17:30 (ພັກທ່ຽງ 12:00 - 13:00).",
          "ເວລາເຮັດວຽກສາຂາ ແລະ ສູນການຄ້າ: ປະຕິບັດຕາມຕາຕະລາງກະ (Shift Schedule) ທີ່ຫົວໜ້າພະແນກກຳນົດໄວ້ຢ່າງເຄັ່ງຄັດ.",
          "ການລົງເວລາເຮັດວຽກ: ພະນັກງານທຸກຄົນຕ້ອງສະແກນນິ້ວມື ຫຼື ບັດພະນັກງານ ເມື່ອມາຮອດ ແລະ ເລີກວຽກທຸກຄັ້ງ.",
          "ການແຕ່ງກາຍ: ນຸ່ງເຄື່ອງສຸພາບຮຽບຮ້ອຍ, ໃສ່ຊຸດຢູນິຟອມ (ສຳລັບພະແນກທີ່ມີກຳນົດ) ແລະ ຕ້ອງຕິດບັດພະນັກງານຕະຫຼອດເວລາປະຕິບັດໜ້າທີ່.",
        ],
        en: [
          "Headquarters (HQ) Standard Hours: Monday through Friday from 08:30 to 17:30 (Lunch break 12:00 - 13:00).",
          "Facilities & Malls Shift Hours: Strictly adhere to assigned department shift rosters at shopping malls and exhibition venues.",
          "Attendance Verification: All staff members must check-in and check-out using designated biometrics or access cards daily.",
          "Dress Code & ID Cards: Wear formal attire or company uniforms (as specified by department) with employee ID badge displayed at all times.",
        ],
      },
    },
    {
      id: "recruitment-transparency",
      icon: UserCheck,
      badge: currentLang === "lo" ? "ໝວດທີ 3" : "Section 3",
      title: {
        lo: "ນະໂຍບາຍການຮັບສະໝັກງານທີ່ໂປ່ງໃສ (Zero-Fee Policy)",
        en: "Fair Recruitment & Zero-Recruitment-Fee Policy",
      },
      subtitle: {
        lo: "ການສະໝັກງານກັບ Lao World ບໍ່ມີການຮຽກເກັບຄ່າທຳນຽມໃດໆທັງສິ້ນ",
        en: "Committed to equal opportunity, meritocracy, and 100% free application process",
      },
      rules: {
        lo: [
          "ບໍ່ມີຄ່າທຳນຽມ (Zero Fee): ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ ບໍ່ມີນະໂຍບາຍຮຽກເກັບເງິນ ຫຼື ຄ່າທຳນຽມໃດໆ ຈາກຜູ້ສະໝັກງານໃນທຸກຂັ້ນຕອນ.",
          "ຄວາມສະເໝີພາບ (Equal Opportunity): ເປີດໂອກາດໃຫ້ທຸກຄົນຢ່າງເທົ່າທຽມກັນ ໂດຍພິຈາລະນາຈາກຄວາມຮູ້, ທັກສະ ແລະ ປະສົບການທີ່ແທ້ຈິງ.",
          "ຄວາມໂປ່ງໃສໃນການສຳພາດ: ຂະບວນການສອບເສັງ ແລະ ສຳພາດດຳເນີນໂດຍຄະນະກຳມະການ HR ແລະ ຫົວໜ້າພະແນກທີ່ກ່ຽວຂ້ອງຢ່າງຍຸດຕິທຳ.",
          "ການແຈ້ງເຕືອນການຫຼອກລວງ: ຫາກພົບເຫັນບຸກຄົນໃດແອບອ້າງຮຽກເກັບເງິນເພື່ອແລກກັບການໄດ້ເຂົ້າເຮັດວຽກ, ກະລຸນາແຈ້ງຝ່າຍ HR ດ່ວນ.",
        ],
        en: [
          "Zero Recruitment Fees: Lao World Public Company never charges applicants any fees for applications, tests, or interviews.",
          "Equal Opportunity Employer: Selection is based strictly on merit, demonstrated competencies, integrity, and qualifications.",
          "Transparent Assessment: Interview and evaluation stages are conducted professionally by HR panels and department heads.",
          "Fraud Prevention Alert: Please immediately report any unauthorized individuals or brokers requesting payments for job guarantees.",
        ],
      },
    },
    {
      id: "safety-environment",
      icon: ShieldAlert,
      badge: currentLang === "lo" ? "ໝວດທີ 4" : "Section 4",
      title: {
        lo: "ຄວາມປອດໄພ, ສຸຂະອະນາໄມ ແລະ ສິ່ງແວດລ້ອມ",
        en: "Occupational Health, Safety & Workplace Environment",
      },
      subtitle: {
        lo: "ສ້າງສະພາບແວດລ້ອມການເຮັດວຽກທີ່ປອດໄພ ແລະ ປອດສານເສບຕິດ 100%",
        en: "Ensuring accident-free operations, high sanitation, and zero tolerance for illicit substances",
      },
      rules: {
        lo: [
          "ມາດຕະການຄວາມປອດໄພ: ປະຕິບັດຕາມກົດລະບຽບຄວາມປອດໄພຂອງອາຄານ, ການນຳໃຊ້ອຸປະກອນປ້ອງກັນໄພ (PPE) ໃນພື້ນທີ່ສ່ຽງ.",
          "ການປ້ອງກັນອັກຄີໄພ: ຫ້າມວາງສິ່ງກີດຂວາງທາງໜີໄຟ, ປະຕູສຸກເສີນ ແລະ ຕູ້ດັບເພີງຢ່າງເດັດຂາດ.",
          "ເຂດປອດຄວັນຢາສູບ: ຫ້າມສູບຢາພາຍໃນອາຄານ ແລະ ຫ້ອງການ (ອະນຸຍາດສະເພາະຈຸດທີ່ກຳນົດໄວ້ພາຍນອກເທົ່ານັ້ນ).",
          "ຫ້າມສິ່ງເສບຕິດ ແລະ ຂອງມຶນເມົາ: ຫ້າມເສບ, ຄອບຄອງ ຫຼື ນຳເອົາສິ່ງເສບຕິດ, ເຫຼົ້າ, ເບຍ ຫຼື ອາວຸດເຂົ້າມາໃນສະຖານທີ່ເຮັດວຽກຢ່າງເດັດຂາດ.",
        ],
        en: [
          "Safety Compliance: Strictly adhere to facility safety protocols and wear required Personal Protective Equipment (PPE) in operational areas.",
          "Fire Safety Regulations: Emergency exit pathways, fire extinguishers, and alarms must remain unblocked at all times.",
          "Smoke-Free Workplace: Smoking and vaping are strictly prohibited inside all offices, malls, and halls (permitted only at outdoor designated zones).",
          "Zero Substance Tolerance: Illicit drugs, alcoholic beverages, and hazardous weapons are strictly banned from company premises.",
        ],
      },
    },
    {
      id: "labor-rights",
      icon: Scale,
      badge: currentLang === "lo" ? "ໝວດທີ 5" : "Section 5",
      title: {
        lo: "ສິດທິແຮງງານ, ສະຫວັດດີການ ແລະ ວັນພັກ",
        en: "Labor Rights, Social Welfare & Employee Leave Entitlements",
      },
      subtitle: {
        lo: "ປະຕິບັດຕາມກົດໝາຍແຮງງານ ແຫ່ງ ສປປ ລາວ ຢ່າງຄົບຖ້ວນ",
        en: "Full compliance with the Lao PDR Labor Law and statutory social security benefits",
      },
      rules: {
        lo: [
          "ການປະຕິບັດຕາມກົດໝາຍ: ບໍລິສັດເຄົາລົບ ແລະ ປະຕິບັດຕາມກົດໝາຍວ່າດ້ວຍແຮງງານ ແຫ່ງ ສປປ ລາວ ຢ່າງຖືກຕ້ອງຕາມລະບຽບການ.",
          "ປະກັນສັງຄົມ (NSSF): ພະນັກງານທຸກຄົນໄດ້ຮັບການຂຶ້ນທະບຽນກອງທຶນປະກັນສັງຄົມແຫ່ງຊາດ ເພື່ອຄຸ້ມຄອງການປິ່ນປົວ ແລະ ສະຫວັດດີການ.",
          "ວັນພັກປະຈຳປີ ແລະ ວັນພັກທາງລັດຖະການ: ພະນັກງານມີສິດໄດ້ຮັບວັນພັກບຸນປະເພນີ, ວັນພັກລັດຖະການ ແລະ ວັນພັກປະຈຳປີຕາມກຳນົດ.",
          "ການລາພັກປ່ວຍ ແລະ ລາພັກເກີດລູກ: ປະຕິບັດຕາມໃບຢັ້ງຢືນແພດ ແລະ ລະບຽບການລາພັກຕາມກົດໝາຍແຮງງານ.",
        ],
        en: [
          "Labor Law Adherence: Employment contracts, working hours, and benefits strictly conform to the national Labor Law of Lao PDR.",
          "National Social Security Fund (NSSF): Every employee is enrolled in the NSSF for medical care, illness, and retirement coverage.",
          "Paid Public Holidays & Annual Leave: Staff are entitled to statutory public holidays and earned annual paid vacation days.",
          "Sick & Maternity Leaves: Medically certified sickness leave and statutory maternity leave are fully recognized and supported.",
        ],
      },
    },
    {
      id: "whistleblowing",
      icon: Info,
      badge: currentLang === "lo" ? "ໝວດທີ 6" : "Section 6",
      title: {
        lo: "ຊ່ອງທາງຮັບຟັງ ແລະ ແຈ້ງເຫດຄວາມບໍ່ໂປ່ງໃສ (Whistleblowing)",
        en: "Whistleblowing Channel & Grievance Mechanism",
      },
      subtitle: {
        lo: "ຊ່ອງທາງປອດໄພ ແລະ ຮັກສາຄວາມລັບສຳລັບພະນັກງານ ແລະ ຜູ້ສະໝັກງານ",
        en: "Confidential and secure direct channel to report unethical behavior or file constructive feedback",
      },
      rules: {
        lo: [
          "ການຮັກສາຄວາມລັບ 100%: ຂໍ້ມູນຂອງຜູ້ແຈ້ງເບາະແສ ຫຼື ຜູ້ຮ້ອງຮຽນຈະຖືກເກັບຮັກສາເປັນຄວາມລັບສູງສຸດ ແລະ ໄດ້ຮັບການປົກປ້ອງຈາກບໍລິສັດ.",
          "ການສືບສວນຢ່າງຍຸດຕິທຳ: ທຸກໆຂໍ້ຮ້ອງຮຽນທີ່ມີຫຼັກຖານຈະຖືກກວດສອບໂດຍກົງຈາກຄະນະກຳມະການກວດກາ ແລະ ຝ່າຍບໍລິຫານ.",
          "ຊ່ອງທາງແຈ້ງເຫດໂດຍກົງ: ສາມາດສົ່ງອີເມວໂດຍກົງຫາ internal.audit@laoworld.la ຫຼື ຝາກຈົດໝາຍໃນຕູ້ຮັບຄຳຄິດເຫັນທີ່ຫ້ອງການໃຫຍ່.",
        ],
        en: [
          "100% Confidentiality: Identities of whistleblowers and feedback submitters are protected with strict non-retaliation policies.",
          "Impartial Investigation: Verified reports of misconduct or policy violations are scrutinized independently by audit executives.",
          "Direct Whistleblower Contacts: Email internal.audit@laoworld.la or deposit confidential notes in HQ suggestion boxes.",
        ],
      },
    },
  ];

  const faqs = [
    {
      q: {
        lo: "ການສະໝັກວຽກກັບ Lao World ມີຄ່າໃຊ້ຈ່າຍ ຫຼື ບໍ່?",
        en: "Are there any fees or charges when applying for jobs at Lao World?",
      },
      a: {
        lo: "ບໍ່ມີຄ່າໃຊ້ຈ່າຍໃດໆທັງໝົດ. ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ ບໍ່ເຄີຍຮຽກເກັບເງິນ ຫຼື ຄ່າທຳນຽມຈາກຜູ້ສະໝັກງານ. ການສະໝັກຜ່ານເວັບໄຊ, ການຍື່ນ CV, ການສອບເສັງ ແລະ ສຳພາດ ແມ່ນຟຣີ 100%.",
        en: "No fees whatsoever. Lao World Public Company never charges applicants. Application submissions, CV reviews, testing, and interviews are 100% free of charge.",
      },
    },
    {
      q: {
        lo: "ພະນັກງານໃໝ່ຈະໄດ້ຮັບການຝຶກອົບຮົມ (Training) ຫຼື ບໍ່?",
        en: "Do new employees receive training and onboarding?",
      },
      a: {
        lo: "ແມ່ນແລ້ວ, ພະນັກງານໃໝ່ທຸກຄົນຈະໄດ້ເຂົ້າຮ່ວມໂຄງການປະຖົມນິເທດ (Onboarding Program) ແລະ ການຝຶກອົບຮົມໜ້າວຽກຕົວຈິງ (On-the-job Training) ພ້ອມທັງມີພີ່ລ້ຽງ (Mentor) ຄອຍໃຫ້ຄຳແນະນຳ.",
        en: "Yes, every newly joined employee goes through a comprehensive onboarding program, safety briefings, and hands-on mentorship.",
      },
    },
    {
      q: {
        lo: "ຫາກພົບເຫັນການກະທຳທີ່ຜິດກົດລະບຽບ ສາມາດແຈ້ງໃຜໄດ້ແດ່?",
        en: "Who should I contact if I notice unethical conduct or regulation violations?",
      },
      a: {
        lo: "ທ່ານສາມາດແຈ້ງຫົວໜ້າພະແນກ, ພະແນກບຸກຄະລາກອນ (HR), ຫຼື ສົ່ງຂໍ້ມູນຫາອີເມວ internal.audit@laoworld.la ໂດຍຂໍ້ມູນຂອງທ່ານຈະຖືກຮັກສາເປັນຄວາມລັບສູງສຸດ.",
        en: "You can notify your department manager, contact the HR department directly, or email internal.audit@laoworld.la with full confidentiality protection.",
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-12 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-blue-50 dark:bg-zinc-800 text-[#0070ba] dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-zinc-700">
          <BadgeCheck className="w-3.5 h-3.5" />
          <span>{currentLang === "lo" ? "ກົດລະບຽບ & ນະໂຍບາຍ" : "Regulations & Policies"}</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {currentLang === "lo"
            ? "ກົດລະບຽບພາຍໃນ ແລະ ມາດຕະຖານການເຮັດວຽກ"
            : "Internal Regulations & Workplace Standards"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          {currentLang === "lo"
            ? "ຄູ່ມືລະບຽບການ, ຈັນຍາບັນວິຊາຊີບ ແລະ ຫຼັກການເຮັດວຽກຮ່ວມກັນຂອງ ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ ເພື່ອສ້າງສະພາບແວດລ້ອມທີ່ປອດໄພ, ຍຸດຕິທຳ ແລະ ພັດທະນາໄປພ້ອມກັນ."
            : "Official handbook of corporate regulations, professional conduct, safety standards, and labor policies at Lao World Public Company."}
        </p>
      </div>

      {/* Zero Fee Guarantee Alert Card */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 dark:from-emerald-950/40 dark:to-blue-950/40 border border-emerald-300 dark:border-emerald-800 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-300">
            {currentLang === "lo"
              ? "ນະໂຍບາຍການສະໝັກງານຟຣີ 100% (Zero-Fee Policy)"
              : "100% Free Job Applications (Zero-Fee Policy)"}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-900/80 dark:text-emerald-400/90 leading-relaxed">
            {currentLang === "lo"
              ? "ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ ບໍ່ມີນະໂຍບາຍຮຽກເກັບຄ່າທຳນຽມໃດໆທັງສິ້ນ ຈາກຜູ້ສະໝັກງານໃນທຸກຂັ້ນຕອນ. ຫາກມີບຸກຄົນໃດແອບອ້າງຮຽກເກັບເງິນ ກະລຸນາແຈ້ງຝ່າຍ HR ດ່ວນທີ່ 021 415 555."
              : "Lao World Public Company never charges applicants any fees at any stage of recruitment. If anyone solicits money claiming to represent us, please notify HR immediately at 021 415 555."}
          </p>
        </div>
      </div>

      {/* Regulation Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-zinc-800 text-[#0070ba] dark:text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {sec.badge}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {sec.title[currentLang]}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    {sec.subtitle[currentLang]}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800">
                {sec.rules[currentLang].map((rule, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070ba] dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span className="text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {currentLang === "lo"
              ? "ຄຳຖາມທີ່ພົບເລື້ອຍກ່ຽວກັບກົດລະບຽບ (FAQ)"
              : "Frequently Asked Questions on Regulations (FAQ)"}
          </h3>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            {currentLang === "lo"
              ? "ຂໍ້ສົງໄສທົ່ວໄປກ່ຽວກັບການສະໝັກງານ, ສະພາບແວດລ້ອມ ແລະ ລະບຽບການເຮັດວຽກ"
              : "Common questions regarding hiring ethics, workplace protocols, and employee policies"}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, fIdx) => {
            const isOpen = openFaqIndex === fIdx;
            return (
              <div
                key={fIdx}
                className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                  className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-4 bg-slate-50/60 dark:bg-zinc-800/50 hover:bg-slate-100/70 dark:hover:bg-zinc-800 transition cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-zinc-100">
                    {faq.q[currentLang]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-4.5 bg-white dark:bg-zinc-900 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800 animate-in fade-in duration-150">
                    {faq.a[currentLang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* HR Whistleblower Contact CTA */}
      <div className="bg-slate-900 dark:bg-black rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400">
            <Lock className="w-3.5 h-3.5" />
            <span>{currentLang === "lo" ? "ຊ່ອງທາງຮັກສາຄວາມລັບສູງສຸດ" : "Strictly Confidential Channel"}</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black">
            {currentLang === "lo"
              ? "ຕ້ອງການສອບຖາມເພີ່ມເຕີມ ຫຼື ແຈ້ງຂໍ້ສະເໜີແນະ?"
              : "Have Questions or Need to File Confidential Feedback?"}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {currentLang === "lo"
              ? "ພະແນກບຸກຄະລາກອນ ແລະ ຝ່າຍກວດກາພາຍໃນ ພ້ອມຮັບຟັງ ແລະ ໃຫ້ຄຳຕອບເພື່ອຄວາມໂປ່ງໃສ."
              : "Our HR management and internal audit team are available to assist and uphold organizational ethics."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="mailto:hr.careers@laoworld.la?subject=[Regulation Inquiry]"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold text-xs transition active:scale-95 shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>hr.careers@laoworld.la</span>
          </a>

          {navigateTo && (
            <button
              onClick={() => navigateTo("contact")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition active:scale-95 border border-slate-700"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{currentLang === "lo" ? "ຕິດຕໍ່ຝ່າຍ HR" : "Contact HR"}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
