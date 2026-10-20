"use client";

import React, { useState, useEffect, useRef } from "react";
import { LanguageType, I18N, Job, Application, UserProfile } from "@/data/jobsData";
import { FileUp, Send, ArrowLeft, CheckCircle2, X, Briefcase } from "lucide-react";

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
  const [talentLocation, setTalentLocation] = useState("ທຸກສາຂາ");
  const [talentCategory, setTalentCategory] = useState("ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ");
  const [talentNotes, setTalentNotes] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmittingTalent, setIsSubmittingTalent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with target job or logged in user
  useEffect(() => {
    if (targetJob) {
      if (targetJob.locKey === "headquarters") setTalentLocation("ຫ້ອງການໃຫຍ່");
      else if (targetJob.locKey === "thongkhankham") setTalentLocation("ສູນການຄ້າທົ່ງຂັນຄຳ");
      else if (targetJob.locKey === "itecc_exhibit") setTalentLocation("ລາວ-ໄອເຕັກ");
      else if (targetJob.locKey === "itecc_mall") setTalentLocation("ໄອເຕັກມໍ");

      setTalentCategory(`${targetJob.no}. ${targetJob.title}`);
    }
    if (currentUser) {
      if (currentUser.name) setTalentFullName(currentUser.name);
      if (currentUser.phone) setTalentPhone(currentUser.phone);
      if (currentUser.email) setTalentEmail(currentUser.email);
    }
  }, [targetJob, currentUser]);

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
          title: targetJob.title,
          location: targetJob.location,
          candidateName: talentFullName,
          date: new Date().toLocaleDateString("lo-LA", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          status: "HR ກຳລັງກວດສອບ CV",
        });
      }

      showToast(
        currentLang === "lo"
          ? (targetJob
              ? `ສົ່ງໃບສະໝັກຕຳແໜ່ງ ${targetJob.title} ສຳເລັດແລ້ວ!`
              : `ຂໍຂອບໃຈ ${talentFullName}! CV ຂອງທ່ານຖືກບັນທຶກເຂົ້າ Talent Pool ແລ້ວ`)
          : (targetJob
              ? `Application for ${targetJob.title} submitted successfully!`
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
          <span>{currentLang === "lo" ? "ກັບຄືນໜ້າລາຍການວຽກ (Back to Jobs)" : "Back to Jobs"}</span>
        </button>
      )}

      {/* Header section matching screenshot */}
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 bg-blue-100 text-[#0070ba] rounded-full text-xs font-bold uppercase tracking-wider inline-block">
          Lao World Talent Network
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {t.talent_title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.talent_desc}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">

        {/* Form matching screenshot */}
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
                placeholder="ປ້ອນຊື່ ແລະ ນາມສະກຸນ"
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
                {targetJob ? (currentLang === "lo" ? "ສາຂາປະຈຳການ (Facility)" : "Facility") : t.talent_pref_loc}
              </label>
              {targetJob ? (
                <input
                  type="text"
                  readOnly
                  value={targetJob.location}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-slate-800 font-medium focus:outline-none cursor-default select-none transition shadow-2xs"
                />
              ) : (
                <select
                  value={talentLocation}
                  onChange={(e) => setTalentLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
                >
                  <option value="ທຸກສາຂາ">ທຸກສາຂາ (Any Facility)</option>
                  <option value="ຫ້ອງການໃຫຍ່">ຫ້ອງການໃຫຍ່ (Headquarters)</option>
                  <option value="ສູນການຄ້າທົ່ງຂັນຄຳ">ສູນການຄ້າທົ່ງຂັນຄຳ (Thongkhankham)</option>
                  <option value="ລາວ-ໄອເຕັກ">ສູນວາງສະແດງສິນຄ້າ ລາວ-ໄອເຕັກ (Lao-ITECC)</option>
                  <option value="ໄອເຕັກມໍ">ໄອເຕັກມໍ (ITECC Mall)</option>
                </select>
              )}
            </div>
          </div>

          <div>
            <label className="block font-bold mb-1.5">
              {targetJob ? (currentLang === "lo" ? "ຕຳແໜ່ງທີ່ສະໝັກ (Job Position)" : "Applying Position") : t.talent_field}
            </label>
            {targetJob ? (
              <input
                type="text"
                readOnly
                value={`${targetJob.no}. ${targetJob.title}`}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-slate-800 font-medium focus:outline-none cursor-default select-none transition shadow-2xs"
              />
            ) : (
              <select
                value={talentCategory}
                onChange={(e) => setTalentCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070ba] bg-white transition"
              >
                <option value="ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ (Marketing & Sales)">
                  ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ (Marketing &amp; Sales)
                </option>
                <option value="ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ (IT & Creative Media)">
                  ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ (IT &amp; Creative Media)
                </option>
                <option value="ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ (Finance & Admin)">
                  ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ (Finance &amp; Admin)
                </option>
                <option value="ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ (Management)">
                  ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ (Management)
                </option>
                <option value="ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ (Operations & Services)">
                  ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ (Operations &amp; Services)
                </option>
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
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
                    {currentLang === "lo" ? "ຄລິກ ຫຼື ລາກໄຟລ໌ CV ມາວາງທີ່ນີ້" : "Click or drag & drop CV here"}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {currentLang === "lo" ? "ຮອງຮັບໄຟລ໌ PDF, DOCX (ຂະໜາດບໍ່ເກີນ 10MB)" : "Supports PDF, DOCX (up to 10MB)"}
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
              placeholder="ບອກພວກເຮົາສັ້ນໆກ່ຽວກັບປະສົບການ ແລະ ເປົ້າໝາຍອາຊີບຂອງທ່ານ..."
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
                ? (currentLang === "lo" ? "ກຳລັງສົ່ງຂໍ້ມູນ..." : "Submitting...")
                : targetJob
                  ? (currentLang === "lo" ? `ສົ່ງໃບສະໝັກຕຳແໜ່ງ: ${targetJob.title}` : `Submit Application: ${targetJob.title}`)
                  : (currentLang === "lo" ? "ສົ່ງຊີວະປະຫວັດ (Submit CV)" : "Submit CV")}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
