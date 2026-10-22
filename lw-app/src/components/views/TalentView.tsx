"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  LanguageType,
  I18N,
  Job,
  Application,
  UserProfile,
  getJobTitle,
  getJobLocation,
} from "@/data/jobsData";
import { FileUp, Send, ArrowLeft, CheckCircle2, X } from "lucide-react";

interface TalentViewProps {
  currentLang: LanguageType;
  showToast: (msg: string) => void;
  onSuccess: () => void;
  onBack?: () => void;
  t: (typeof I18N)["lo"];
  targetJob?: Job | null;
  onClearTargetJob?: () => void;
  onApplySuccess?: (app: Application) => void;
  currentUser?: UserProfile | null;
}

export default function TalentView({
  currentLang,
  showToast,
  onSuccess,
  onBack,
  t,
  targetJob,
  onClearTargetJob,
  onApplySuccess,
  currentUser,
}: TalentViewProps) {
  const [talentFullName, setTalentFullName] = useState("");
  const [talentPhone, setTalentPhone] = useState("");
  const [talentEmail, setTalentEmail] = useState("");
  const [talentLocation, setTalentLocation] = useState(currentLang === "lo" ? "ທຸກສາຂາ" : "All Facilities");
  const [talentCategory, setTalentCategory] = useState(
    currentLang === "lo"
      ? "ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ"
      : "Marketing & Sales"
  );
  const [talentNotes, setTalentNotes] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmittingTalent, setIsSubmittingTalent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with target job or logged in user
  useEffect(() => {
    if (targetJob) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTalentLocation(getJobLocation(targetJob, currentLang));
      setTalentCategory(`${targetJob.no}. ${getJobTitle(targetJob, currentLang)}`);
    }
    if (currentUser) {
      if (currentUser.name) setTalentFullName(currentUser.name);
      if (currentUser.phone) setTalentPhone(currentUser.phone);
      if (currentUser.email) setTalentEmail(currentUser.email);
    }
  }, [targetJob, currentUser, currentLang]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTalentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingTalent(true);
    setTimeout(() => {
      setIsSubmittingTalent(false);

      if (onApplySuccess && targetJob) {
        onApplySuccess({
          id: "LW-" + Math.floor(10000 + Math.random() * 90000),
          title: getJobTitle(targetJob, currentLang),
          location: getJobLocation(targetJob, currentLang),
          candidateName: talentFullName,
          date: new Date().toLocaleDateString(currentLang === "lo" ? "lo-LA" : "en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          status: currentLang === "lo" ? "HR ກຳລັງກວດສອບ CV" : "HR Screening CV",
        });
      }

      const jobTitle = targetJob ? getJobTitle(targetJob, currentLang) : "";
      showToast(
        currentLang === "lo"
          ? (targetJob
              ? `ສົ່ງໃບສະໝັກຕຳແໜ່ງ ${jobTitle} ສຳເລັດແລ້ວ!`
              : `ຂໍຂອບໃຈ ${talentFullName}! CV ຂອງທ່ານຖືກບັນທຶກເຂົ້າຄັງບຸກຄະລາກອນແລ້ວ`)
          : (targetJob
              ? `Application for ${jobTitle} submitted successfully!`
              : `Thank you ${talentFullName}! Your CV is saved to Lao World Talent Pool`)
      );

      setTalentFullName("");
      setTalentPhone("");
      setTalentEmail("");
      setTalentNotes("");
      setSelectedFile(null);
      onSuccess();
    }, 700);
  };

  return (
    <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Back button */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0070ba] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentLang === "lo" ? "ກັບຄືນໜ້າລາຍການວຽກ" : "Back to Openings"}</span>
        </button>
      )}

      {/* Header section */}
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 bg-blue-100 text-[#0070ba] rounded-full text-xs font-bold uppercase tracking-wider inline-block">
          {t.talent_badge}
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {t.talent_title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.talent_desc}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <form onSubmit={handleTalentSubmit} className="space-y-5 text-xs text-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1.5">
                {t.label_fullname} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={talentFullName}
                onChange={(e) => setTalentFullName(e.target.value)}
                placeholder={currentLang === "lo" ? "ປ້ອນຊື່ ແລະ ນາມສະກຸນ" : "Enter your full name"}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
              />
            </div>
            <div>
              <label className="block font-bold mb-1.5">
                {t.label_phone} <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={talentPhone}
                onChange={(e) => setTalentPhone(e.target.value)}
                placeholder="020 xxxx xxxx"
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1.5">
                {t.label_email} <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={talentEmail}
                onChange={(e) => setTalentEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
              />
            </div>
            <div>
              <label className="block font-bold mb-1.5">
                {targetJob ? (currentLang === "lo" ? "ສາຂາປະຈຳການ" : "Facility") : t.talent_pref_loc}
              </label>
              {targetJob ? (
                <input
                  type="text"
                  readOnly
                  value={getJobLocation(targetJob, currentLang)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-slate-800 font-medium focus:outline-none cursor-default select-none transition shadow-2xs"
                />
              ) : (
                <select
                  value={talentLocation}
                  onChange={(e) => setTalentLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
                >
                  {currentLang === "lo" ? (
                    <>
                      <option value="ທຸກສາຂາ">ທຸກສາຂາ</option>
                      <option value="ຫ້ອງການໃຫຍ່">ຫ້ອງການໃຫຍ່</option>
                      <option value="ສູນການຄ້າທົ່ງຂັນຄຳ">ສູນການຄ້າທົ່ງຂັນຄຳ</option>
                      <option value="ລາວ-ໄອເຕັກ">ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ</option>
                      <option value="ໄອເຕັກມໍ">ສູນການຄ້າ ໄອເຕັກມໍ</option>
                    </>
                  ) : (
                    <>
                      <option value="All Facilities">All Facilities</option>
                      <option value="Headquarters">Headquarters</option>
                      <option value="Thongkhankham Mall">Thongkhankham Mall</option>
                      <option value="Lao-ITECC Exhibition Center">Lao-ITECC Exhibition Center</option>
                      <option value="ITECC Mall">ITECC Mall</option>
                    </>
                  )}
                </select>
              )}
            </div>
          </div>

          <div>
            <label className="block font-bold mb-1.5">
              {targetJob ? (currentLang === "lo" ? "ຕຳແໜ່ງທີ່ສະໝັກ" : "Applying Position") : t.talent_field}
            </label>
            {targetJob ? (
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={`${targetJob.no}. ${getJobTitle(targetJob, currentLang)}`}
                  className="w-full px-3.5 py-2.5 pr-10 border border-slate-200 rounded-xl bg-slate-50 text-slate-800 font-medium focus:outline-none cursor-default select-none transition shadow-2xs"
                />
                {onClearTargetJob && (
                  <button
                    type="button"
                    onClick={onClearTargetJob}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-lg transition"
                    title={currentLang === "lo" ? "ລຶບຕຳແໜ່ງ (ສະໝັກທົ່ວໄປ)" : "Clear position (General Application)"}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <select
                value={talentCategory}
                onChange={(e) => setTalentCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
              >
                {currentLang === "lo" ? (
                  <>
                    <option value="ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ">
                      ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ
                    </option>
                    <option value="ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ">
                      ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ
                    </option>
                    <option value="ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ">
                      ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ
                    </option>
                    <option value="ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ">
                      ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ
                    </option>
                    <option value="ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ">
                      ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ
                    </option>
                  </>
                ) : (
                  <>
                    <option value="Marketing & Sales">Marketing &amp; Sales</option>
                    <option value="IT, Creative & Media">IT, Creative &amp; Media</option>
                    <option value="Finance, Legal & Administration">Finance, Legal &amp; Administration</option>
                    <option value="Management & Executives">Management &amp; Executives</option>
                    <option value="Frontline Services & Operations">Frontline Services &amp; Operations</option>
                  </>
                )}
              </select>
            )}
          </div>

          <div>
            <label className="block font-bold mb-1.5">
              {t.talent_upload}
            </label>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-slate-300 hover:border-[#0070ba] bg-slate-50/70 hover:bg-slate-100/70 rounded-2xl p-6 text-center cursor-pointer transition"
            >
              {selectedFile ? (
                <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-xs bg-emerald-50 py-2.5 px-4 rounded-xl border border-emerald-200 max-w-md mx-auto">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">{selectedFile.name}</span>
                  <span className="text-[10px] text-emerald-600">
                    ({(selectedFile.size / 1024).toFixed(1)} KB)
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFile(null);
                    }}
                    className="text-slate-400 hover:text-rose-500 ml-2 p-1"
                    title="Remove file"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <FileUp className="w-8 h-8 text-[#0070ba] mx-auto mb-1.5" />
                  <p className="font-bold text-slate-800 text-xs">
                    {t.talent_upload_drag}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {t.talent_upload_hint}
                  </p>
                </>
              )}
            </div>
          </div>

          <div>
            <label className="block font-bold mb-1.5">
              {t.talent_notes}
            </label>
            <textarea
              rows={3}
              value={talentNotes}
              onChange={(e) => setTalentNotes(e.target.value)}
              placeholder={t.talent_notes_placeholder}
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmittingTalent}
            className="w-full py-3.5 bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold rounded-2xl transition shadow-xs text-xs sm:text-sm active:scale-98 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>
              {isSubmittingTalent
                ? t.talent_submitting
                : targetJob
                  ? (currentLang === "lo"
                      ? `ສົ່ງໃບສະໝັກຕຳແໜ່ງ: ${getJobTitle(targetJob, currentLang)}`
                      : `Submit Application: ${getJobTitle(targetJob, currentLang)}`)
                  : t.talent_submit_btn}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
