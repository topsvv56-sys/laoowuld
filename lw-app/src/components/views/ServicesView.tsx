"use client";

import React, { useState } from "react";
import { LanguageType, ViewType } from "@/data/jobsData";
import {
  Building2,
  Store,
  Calendar,
  Sparkles,
  ShieldCheck,
  Utensils,
  Car,
  PhoneCall,
  MessageCircle,
  Mail,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Tv,
  Users,
  Compass,
} from "lucide-react";

interface ServicesViewProps {
  currentLang?: LanguageType;
  navigateTo?: (view: ViewType) => void;
  showToast?: (msg: string) => void;
}

export default function ServicesView({
  currentLang = "lo",
  navigateTo,
  showToast,
}: ServicesViewProps) {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>("all");

  const services = [
    {
      id: "exhibition",
      category: "events",
      icon: Calendar,
      accentColor: "bg-blue-500",
      lightBg: "bg-blue-50 dark:bg-blue-950/30",
      textColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-100 dark:border-blue-900/40",
      title: {
        lo: "ສູນວາງສະແດງສິນຄ້າ ແລະ ງານປະຊຸມລະດັບຊາດ (Lao-ITECC)",
        en: "Exhibition & Convention Center Services (Lao-ITECC)",
      },
      subtitle: {
        lo: "ຮອງຮັບງານວາງສະແດງລະດັບສາກົນ, ງານ Expo, ງານຄອນເສີດ, ງານລ້ຽງ ແລະ ງານດອງຂະໜາດໃຫຍ່",
        en: "Premier venue for international expos, trade fairs, concerts, banquets, and major conferences",
      },
      features: {
        lo: [
          "ຫ້ອງໂຖງວາງສະແດງຂະໜາດໃຫຍ່ພື້ນທີ່ກວ່າ 10,000+ ຕາແມັດ ພ້ອມເຄື່ອງປັບອາກາດຄົບຊຸດ",
          "ລະບົບແສງ, ສີ, ສຽງ ແລະ ເວທີມາດຕະຖານສາກົນ ສຳລັບງານຄອນເສີດ ແລະ ການສະແດງ",
          "ຫ້ອງປະຊຸມສຳມະນາ (Meeting & Seminar Rooms) ຫຼາຍຂະໜາດ ຮອງຮັບແຕ່ 50 - 3,000 ທ່ານ",
          "ຫ້ອງຈັດງານດອງ ແລະ ງານລ້ຽງສັງສັນ (Grand Banquet Hall) ພ້ອມທີມງານບໍລິການມືອາຊີບ",
        ],
        en: [
          "Massive pillar-less exhibition halls exceeding 10,000+ sqm with full climate control",
          "State-of-the-art audiovisual, staging, and rigging equipment for mega concerts and shows",
          "Flexible meeting and conference rooms accommodating 50 to 3,000 delegates",
          "Grand ballroom for wedding celebrations, corporate galas, and state banquets",
        ],
      },
      badge: {
        lo: "ສະຖານທີ່ອັນດັບ 1 ຂອງລາວ",
        en: "Lao PDR's #1 Venue",
      },
    },
    {
      id: "retail",
      category: "commercial",
      icon: Store,
      accentColor: "bg-emerald-500",
      lightBg: "bg-emerald-50 dark:bg-emerald-950/30",
      textColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-100 dark:border-emerald-900/40",
      title: {
        lo: "ການໃຫ້ເຊົ່າພື້ນທີ່ສູນການຄ້າ ແລະ ທຸລະກິດ (Retail & Mall Leasing)",
        en: "Shopping Mall & Commercial Space Leasing",
      },
      subtitle: {
        lo: "ພື້ນທີ່ຮ້ານຄ້າ, ບູດຂາຍເຄື່ອງ ແລະ ຄີອອສກ໌ ທີ່ ໄອເຕັກມໍ ແລະ ສູນການຄ້າທົ່ງຂັນຄຳ",
        en: "Retail shop lots, pop-up kiosks, and commercial units at ITECC Mall & Thongkhankham Mall",
      },
      features: {
        lo: [
          "ພື້ນທີ່ຮ້ານຄ້າແບຣນເນມ, ແຟຊັ່ນ, ເຄື່ອງສຳອາງ, ເຄື່ອງປະດັບ ແລະ ທະນາຄານ",
          "ບູດຂາຍສິນຄ້າ ແລະ ຄີອອສກ໌ (Kiosks) ແບບລາຍວັນ, ລາຍເດືອນ ແລະ ລາຍປີ",
          "ທຳເລຍຸດທະສາດໃຈກາງນະຄອນຫຼວງ ພ້ອມຖານລູກຄ້າ ແລະ ຜູ້ມາໃຊ້ບໍລິການໜາແໜ້ນ",
          "ລະບົບໄຟຟ້າ, ນ້ຳປະປາ, ອິນເຕີເນັດຄວາມໄວສູງ ແລະ ການຕະຫຼາດຊ່ວຍໂປຣໂມດຮ້ານ",
        ],
        en: [
          "Prime retail spaces for brand names, cosmetics, gold/jewelry, fashion, and banking branches",
          "Flexible promotional booths and pop-up kiosks on daily, monthly, or annual leases",
          "High-footfall strategic central locations in Vientiane Capital with ready customer traffic",
          "Full utilities infrastructure, high-speed fiber connectivity, and joint marketing campaigns",
        ],
      },
      badge: {
        lo: "ທຳເລທຸລະກິດຊັ້ນນຳ",
        en: "Prime Business Locations",
      },
    },
    {
      id: "entertainment",
      category: "entertainment",
      icon: Utensils,
      accentColor: "bg-amber-500",
      lightBg: "bg-amber-50 dark:bg-amber-950/30",
      textColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-100 dark:border-amber-900/40",
      title: {
        lo: "ສູນອາຫານ ແລະ ຄວາມບັນເທີງຄົບວົງຈອນ (Food & Family Entertainment)",
        en: "Food Court, Dining & Family Entertainment Complex",
      },
      subtitle: {
        lo: "ສະຖານທີ່ພັກຜ່ອນຢ່ອນອາລົມສຳລັບທຸກຄອບຄົວ ພ້ອມອາຫານຫຼາກຫຼາຍຊາດ",
        en: "Vibrant dining, leisure, and family entertainment amenities all under one roof",
      },
      features: {
        lo: [
          "ສູນອາຫານສາກົນ (Food Center) ທີ່ສະອາດ, ປອດໄພ ແລະ ລາຄາເປັນກັນເອງ",
          "ສວນນ້ຳ Ocean Park ສວນນ້ຳຂະໜາດໃຫຍ່ພ້ອມເຄື່ອງຫຼິ້ນມ່ວນຊື່ນສຳລັບເດັກ ແລະ ຜູ້ໃຫຍ່",
          "ITECC Bowling ລານໂບລິ້ງມາດຕະຖານ ສຳລັບການແຂ່ງຂັນ ແລະ ກິດຈະກຳສັງສັນ",
          "ໂຮງຮູບເງົາທັນສະໄໝ ແລະ ສູນເກມເຄື່ອງຫຼິ້ນເດັກ (Kids Zone / Game Arcade)",
        ],
        en: [
          "Large international food court offering diverse local, regional, and global cuisine",
          "Ocean Park Waterpark featuring thrilling slides, wave pools, and kids splash zones",
          "Professional standard bowling alley (ITECC Bowling) for casual fun and tournaments",
          "Modern multiplex cinemas and high-tech amusement arcade for families and teens",
        ],
      },
      badge: {
        lo: "ຄວາມສຸກສຳລັບຄອບຄົວ",
        en: "Family Leisure Hub",
      },
    },
    {
      id: "advertising",
      category: "media",
      icon: Tv,
      accentColor: "bg-purple-500",
      lightBg: "bg-purple-50 dark:bg-purple-950/30",
      textColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-100 dark:border-purple-900/40",
      title: {
        lo: "ພື້ນທີ່ຈັດກິດຈະກຳ ແລະ ສື່ໂຄສະນາປະຊາສຳພັນ (Advertising & Media)",
        en: "Event Spaces & Outdoor / Indoor Advertising Media",
      },
      subtitle: {
        lo: "ຈໍ LED ຂະໜາດຍັກ, ປ້າຍບິລບອດ ແລະ ລານກິດຈະກຳກາງແຈ້ງສຳລັບການຕະຫຼາດ",
        en: "Giant LED digital screens, billboards, and open plazas for brand activations",
      },
      features: {
        lo: [
          "ຈໍດິຈິຕອນ LED ຂະໜາດໃຫຍ່ຕິດຕັ້ງຕາມຈຸດຍຸດທະສາດສຳຄັນທັງພາຍໃນ ແລະ ພາຍນອກອາຄານ",
          "ປ້າຍໂຄສະນາ Billboard ແລະ Lightbox ທີ່ເຫັນໄດ້ຊັດເຈນຈາກເສັ້ນທາງຫຼັກ",
          "ລານກິດຈະກຳກາງແຈ້ງ (Outdoor Plaza) ສຳລັບງານເປີດໂຕສິນຄ້າ, ມິນິຄອນເສີດ ແລະ ຕະຫຼາດນັດ",
          "ການໂຄສະນາຜ່ານສື່ປະຊາສຳພັນ ແລະ ສື່ສັງຄົມອອນລາຍຂອງເຄືອຂ່າຍ ລາວເວີລ",
        ],
        en: [
          "High-definition giant outdoor and indoor LED billboards reaching hundreds of thousands weekly",
          "Prominent lightbox and static advertising banners along major arterial traffic routes",
          "Spacious outdoor plaza suitable for motor showcases, weekend bazaars, and product launches",
          "Co-promotional opportunities across Lao World Public Company digital channels",
        ],
      },
      badge: {
        lo: "ເຂົ້າເຖິງກຸ່ມເປົ້າໝາຍສູງ",
        en: "Maximum Visibility",
      },
    },
    {
      id: "facility",
      category: "facility",
      icon: ShieldCheck,
      accentColor: "bg-indigo-500",
      lightBg: "bg-indigo-50 dark:bg-indigo-950/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-100 dark:border-indigo-900/40",
      title: {
        lo: "ການຄຸ້ມຄອງອາຄານ, ບ່ອນຈອດລົດ ແລະ ຄວາມປອດໄພ (Facility & Security)",
        en: "Facility Management, Parking & 24/7 Security Services",
      },
      subtitle: {
        lo: "ມາດຕະຖານການຮັກສາຄວາມປອດໄພ, ບ່ອນຈອດລົດກວ້າງຂວາງ ແລະ ການດູແລລະດັບມືອາຊີບ",
        en: "Extensive parking capacity, round-the-clock surveillance, and professional property care",
      },
      features: {
        lo: [
          "ລານຈອດລົດກວ້າງຂວາງ ຮອງຮັບລົດໃຫຍ່ ແລະ ລົດຈັກໄດ້ຫຼາຍກວ່າ 3,000+ ຄັນ",
          "ໜ່ວຍງານຮັກສາຄວາມປອດໄພປະຈຳການ ແລະ ກ້ອງວົງຈອນປິດ (CCTV) ຕະຫຼອດ 24 ຊົ່ວໂມງ",
          "ລະບົບປ້ອງກັນ ແລະ ດັບເພີງມາດຕະຖານ ພ້ອມທີມງານຊ່າງເຕັກນິກ ແລະ ວິສະວະກອນປະຈຳອາຄານ",
          "ທີມງານອະນາໄມ ແລະ ຄຸ້ມຄອງສິ່ງແວດລ້ອມທີ່ຮັກສາຄວາມສະອາດຢ່າງຕໍ່ເນື່ອງ",
        ],
        en: [
          "Spacious parking infrastructure accommodating over 3,000 cars and motorcycles",
          "Dedicated 24/7 on-site security patrol team and comprehensive CCTV coverage",
          "Standard fire safety, automated sprinkler systems, and on-call engineering maintenance",
          "Professional sanitization and janitorial teams ensuring top hygiene around the clock",
        ],
      },
      badge: {
        lo: "ມາດຕະຖານຄວາມປອດໄພ 100%",
        en: "100% Secure & Managed",
      },
    },
  ];

  const filteredServices =
    selectedServiceCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedServiceCategory);

  const stats = [
    {
      value: "4",
      label: currentLang === "lo" ? "ສູນການຄ້າ & ສາຂາໃຫຍ່" : "Major Facilities",
      sub: currentLang === "lo" ? "ທົ່ວ ນະຄອນຫຼວງວຽງຈັນ" : "Across Vientiane",
    },
    {
      value: "10,000+",
      label: currentLang === "lo" ? "ຕາແມັດ ພື້ນທີ່ຈັດງານ" : "Sqm Event Space",
      sub: currentLang === "lo" ? "ຮອງຮັບງານລະດັບຊາດ" : "National Standards",
    },
    {
      value: "500+",
      label: currentLang === "lo" ? "ຮ້ານຄ້າ & ພັນທະມິດ" : "Retail Partners",
      sub: currentLang === "lo" ? "ແບຣນຊັ້ນນຳ & ທຸລະກິດ" : "Leading Brands",
    },
    {
      value: "3,000+",
      label: currentLang === "lo" ? "ບ່ອນຈອດລົດສະດວກ" : "Parking Capacity",
      sub: currentLang === "lo" ? "ປອດໄພ 24 ຊົ່ວໂມງ" : "24/7 Monitored",
    },
  ];

  const handleInquiryClick = (serviceTitle: string) => {
    if (showToast) {
      showToast(
        currentLang === "lo"
          ? `ກຳລັງເຊື່ອມຕໍ່ສອບຖາມຂໍ້ມູນ: ${serviceTitle}`
          : `Connecting to inquiry for: ${serviceTitle}`
      );
    }
    const mailto = `mailto:leasing@laoworld.la?subject=${encodeURIComponent(
      `[Service Inquiry] ${serviceTitle}`
    )}&body=${encodeURIComponent(
      currentLang === "lo"
        ? `ສະບາຍດີ ທີມງານບໍລິຫານພື້ນທີ່ ແລະ ການບໍລິການ Lao World,\n\nຂ້າພະເຈົ້າມີຄວາມສົນໃຈໃນການບໍລິການ: ${serviceTitle}\nກະລຸນາຕິດຕໍ່ກັບເພື່ອໃຫ້ລາຍລະອຽດເພີ່ມເຕີມ.\n\nຂອບໃຈ.`
        : `Hello Lao World Services Team,\n\nI am interested in inquiring about: ${serviceTitle}.\nPlease provide further details and rate cards.\n\nThank you.`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-12 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-blue-50 dark:bg-zinc-800 text-[#0070ba] dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-zinc-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{currentLang === "lo" ? "ການບໍລິການທັງໝົດ" : "Our Business & Services"}</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {currentLang === "lo"
            ? "ການບໍລິການຄົບວົງຈອນ ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ"
            : "Comprehensive Services of Lao World Public Company"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          {currentLang === "lo"
            ? "ຜູ້ນຳດ້ານການຄຸ້ມຄອງສູນການຄ້າ, ສູນວາງສະແດງລະດັບຊາດ, ສູນອາຫານ ແລະ ຄວາມບັນເທີງໃນ ສປປ ລາວ ພາຍໃຕ້ຄຳຂວັນ “Together, We create a world”"
            : "A pioneer and industry leader in commercial retail management, national exhibition venues, international banquets, and family entertainment complexes in Lao PDR."}
        </p>
      </div>

      {/* Highlights / Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xs text-center space-y-1 transition hover:-translate-y-0.5"
          >
            <div className="text-2xl sm:text-3xl font-black text-[#0070ba] dark:text-blue-400">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-200">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-400 dark:text-zinc-500">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          onClick={() => setSelectedServiceCategory("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
            selectedServiceCategory === "all"
              ? "bg-[#0070ba] text-white shadow-2xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
          }`}
        >
          {currentLang === "lo" ? "ທຸກການບໍລິການ (5)" : "All Services (5)"}
        </button>
        <button
          onClick={() => setSelectedServiceCategory("events")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
            selectedServiceCategory === "events"
              ? "bg-[#0070ba] text-white shadow-2xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
          }`}
        >
          {currentLang === "lo" ? "ງານວາງສະແດງ & ປະຊຸມ" : "Exhibitions & Events"}
        </button>
        <button
          onClick={() => setSelectedServiceCategory("commercial")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
            selectedServiceCategory === "commercial"
              ? "bg-[#0070ba] text-white shadow-2xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
          }`}
        >
          {currentLang === "lo" ? "ເຊົ່າພື້ນທີ່ສູນການຄ້າ" : "Mall & Retail Leasing"}
        </button>
        <button
          onClick={() => setSelectedServiceCategory("entertainment")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
            selectedServiceCategory === "entertainment"
              ? "bg-[#0070ba] text-white shadow-2xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
          }`}
        >
          {currentLang === "lo" ? "ອາຫານ & ຄວາມບັນເທີງ" : "Dining & Entertainment"}
        </button>
        <button
          onClick={() => setSelectedServiceCategory("media")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
            selectedServiceCategory === "media"
              ? "bg-[#0070ba] text-white shadow-2xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
          }`}
        >
          {currentLang === "lo" ? "ສື່ໂຄສະນາ LED & Event" : "Media & Advertising"}
        </button>
        <button
          onClick={() => setSelectedServiceCategory("facility")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
            selectedServiceCategory === "facility"
              ? "bg-[#0070ba] text-white shadow-2xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
          }`}
        >
          {currentLang === "lo" ? "ບ່ອນຈອດລົດ & ຄວາມປອດໄພ" : "Facility & Security"}
        </button>
      </div>

      {/* Services List Grid */}
      <div className="space-y-6">
        {filteredServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-200 space-y-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-zinc-800 pb-5">
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${service.lightBg} ${service.textColor} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                        {service.badge[currentLang]}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {service.title[currentLang]}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
                      {service.subtitle[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => handleInquiryClick(service.title[currentLang])}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0070ba] hover:bg-[#005ea6] text-white rounded-xl text-xs font-bold shadow-2xs transition active:scale-95 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === "lo" ? "ສອບຖາມລາຄາ / ຈອງພື້ນທີ່" : "Inquire / Book Space"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.features[currentLang].map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Facilities Quick Access Banner */}
      <div className="bg-gradient-to-br from-[#0070ba] to-[#004f85] rounded-3xl p-6 sm:p-10 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-bold text-blue-100">
            <Building2 className="w-3.5 h-3.5" />
            <span>{currentLang === "lo" ? "4 ສາຂາ ແລະ ສະຖານທີ່ຫຼັກ" : "4 Operating Venues"}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black leading-tight">
            {currentLang === "lo"
              ? "ພ້ອມໃຫ້ບໍລິການທຸກພື້ນທີ່ ແລະ ທຸລະກິດຂອງທ່ານ"
              : "Ready to Host and Elevate Your Business Today"}
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            {currentLang === "lo"
              ? "ຫ້ອງການໃຫຍ່ (ໂພນທັນ), ສູນການຄ້າທົ່ງຂັນຄຳ, ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ ແລະ ສູນການຄ້າ ໄອເຕັກມໍ ພ້ອມໃຫ້ຄຳປຶກສາ ແລະ ອຳນວຍຄວາມສະດວກຢ່າງດີທີ່ສຸດ."
              : "Headquarters (Phonthan), Thongkhankham Mall, Lao-ITECC Exhibition Center, and ITECC Mall are ready to provide top-tier support and leasing solutions."}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="tel:021415555"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0070ba] font-bold text-xs hover:bg-blue-50 transition active:scale-95 shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>021 415 555 / 020 5551 2345</span>
            </a>

            <a
              href="https://wa.me/8562055512345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition active:scale-95 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +856 20 5551 2345</span>
            </a>

            {navigateTo && (
              <button
                onClick={() => navigateTo("contact")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition active:scale-95"
              >
                <span>{currentLang === "lo" ? "ໜ້າຕິດຕໍ່ສອບຖາມ" : "Contact Details"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
