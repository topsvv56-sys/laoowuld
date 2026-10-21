"use client";

import React, { useState, useMemo } from "react";
import {
  ALL_JOBS,
  I18N,
  Application,
  UserProfile,
  ViewType,
  LocationFilter,
  LanguageType,
  JOBS_EN_MAP,
  getJobTitle,
  getJobLocation,
} from "@/data/jobsData";
import { CheckCircle } from "lucide-react";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";

// Views
import JobsView from "@/components/views/JobsView";
import JobDetailView from "@/components/views/JobDetailView";
import SavedJobsView from "@/components/views/SavedJobsView";
import TrackerView from "@/components/views/TrackerView";
import TalentView from "@/components/views/TalentView";
import AboutView from "@/components/views/AboutView";
import ContactView from "@/components/views/ContactView";
import LoginView from "@/components/views/LoginView";
import SignupView from "@/components/views/SignupView";

export default function CareersPortal() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<ViewType>("jobs");
  const [currentLocFilter, setCurrentLocFilter] = useState<LocationFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLang, setCurrentLang] = useState<LanguageType>("lo");

  // User & Job State
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<Application[]>([]);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [currentDetailJobId, setCurrentDetailJobId] = useState<string>(ALL_JOBS[0].id);

  // Apply Modal State
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyModalJobId, setApplyModalJobId] = useState<string>(ALL_JOBS[0].id);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [isSubmittingApply, setIsSubmittingApply] = useState(false);
  const [pendingJobIdAfterAuth, setPendingJobIdAfterAuth] = useState<string | null>(null);

  // Toast State
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });

  const showToast = (msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => {
      setToast({ message: "", visible: false });
    }, 3200);
  };

  const t = I18N[currentLang];

  // Filtered jobs for Home/Jobs view
  const filteredJobs = useMemo(() => {
    return ALL_JOBS.filter((job) => {
      if (currentLocFilter !== "all" && job.locKey !== currentLocFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitleLo = job.title.toLowerCase().includes(q);
        const matchTitleEn = (JOBS_EN_MAP[job.id]?.title || "").toLowerCase().includes(q);
        const matchLocLo = job.location.toLowerCase().includes(q);
        const matchLocEn = (JOBS_EN_MAP[job.id]?.location || "").toLowerCase().includes(q);
        if (!matchTitleLo && !matchTitleEn && !matchLocLo && !matchLocEn) return false;
      }
      return true;
    });
  }, [currentLocFilter, searchQuery]);

  // Selected Detail Job
  const selectedJob = useMemo(() => {
    return ALL_JOBS.find((j) => j.id === currentDetailJobId) || ALL_JOBS[0];
  }, [currentDetailJobId]);

  // Saved Jobs List
  const savedJobs = useMemo(() => {
    return ALL_JOBS.filter((j) => savedJobIds.includes(j.id));
  }, [savedJobIds]);

  // Navigation Helper
  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle Save Job
  const toggleSaveJob = (jobId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const job = ALL_JOBS.find((j) => j.id === jobId);
    if (!job) return;

    const title = getJobTitle(job, currentLang);
    if (savedJobIds.includes(jobId)) {
      setSavedJobIds((prev) => prev.filter((id) => id !== jobId));
      showToast(
        currentLang === "lo"
          ? `ຍົກເລີກການບັນທຶກ ${title}`
          : `Removed ${title} from saved`
      );
    } else {
      setSavedJobIds((prev) => [...prev, jobId]);
      showToast(
        currentLang === "lo"
          ? `ບັນທຶກຕຳແໜ່ງ ${title} ແລ້ວ!`
          : `Saved ${title} to your bookmarks!`
      );
    }
  };

  // Open Apply (navigates to the Talent/Application page)
  const openApplyModal = (jobId?: string) => {
    const targetId = jobId || currentDetailJobId || ALL_JOBS[0].id;
    setApplyModalJobId(targetId);
    navigateTo("talent");
  };

  // Handle successful login/signup (resume application if pending)
  const handleAuthSuccess = (profile: UserProfile) => {
    setCurrentUser(profile);
    if (pendingJobIdAfterAuth) {
      const targetJob = ALL_JOBS.find((j) => j.id === pendingJobIdAfterAuth);
      setApplyModalJobId(pendingJobIdAfterAuth);
      setApplicantName(profile.name);
      setApplicantEmail(profile.email);
      setApplicantPhone(profile.phone);
      setIsApplyModalOpen(true);
      setPendingJobIdAfterAuth(null);
      if (targetJob) {
        showToast(
          currentLang === "lo"
            ? `ເຂົ້າສູ່ລະບົບສຳເລັດ! ພ້ອມສະໝັກຕຳແໜ່ງ: ${getJobTitle(targetJob, currentLang)}`
            : `Logged in! Ready to apply: ${getJobTitle(targetJob, currentLang)}`
        );
      }
    }
  };

  const closeApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  // Submit Job Application
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const job = ALL_JOBS.find((j) => j.id === applyModalJobId);
    if (!job) return;

    setIsSubmittingApply(true);
    setTimeout(() => {
      const newApp: Application = {
        id: "LW-" + Math.floor(10000 + Math.random() * 90000),
        title: getJobTitle(job, currentLang),
        location: getJobLocation(job, currentLang),
        candidateName: applicantName,
        date: new Date().toLocaleDateString(currentLang === "lo" ? "lo-LA" : "en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        status: currentLang === "lo" ? "HR ກຳລັງກວດສອບ CV" : "HR Screening CV",
      };

      setAppliedJobs((prev) => [newApp, ...prev]);
      setIsSubmittingApply(false);
      closeApplyModal();
      showToast(
        currentLang === "lo"
          ? `ສົ່ງໃບສະໝັກຕຳແໜ່ງ ${getJobTitle(job, currentLang)} ສຳເລັດແລ້ວ!`
          : `Application for ${getJobTitle(job, currentLang)} submitted successfully!`
      );
    }, 700);
  };

  // View details
  const viewJobDetails = (jobId: string) => {
    setCurrentDetailJobId(jobId);
    navigateTo("detail");
  };

  // Logout
  const handleLogout = () => {
    setCurrentUser(null);
    showToast(currentLang === "lo" ? "ທ່ານໄດ້ອອກຈາກລະບົບແລ້ວ" : "You have been logged out");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 antialiased selection:bg-lw-blue selection:text-white bg-slate-50">
      {/* Header / Navbar */}
      <Navbar
        currentView={currentView}
        navigateTo={navigateTo}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        savedCount={savedJobIds.length}
        appliedCount={appliedJobs.length}
        currentUser={currentUser}
        onLogout={handleLogout}
        showToast={showToast}
        t={t}
      />

      {/* Main Views Container */}
      <main className="flex-1">
        {currentView === "jobs" && (
          <JobsView
            filteredJobs={filteredJobs}
            savedJobIds={savedJobIds}
            currentLocFilter={currentLocFilter}
            setCurrentLocFilter={setCurrentLocFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onToggleSave={toggleSaveJob}
            onViewDetails={viewJobDetails}
            onOpenApplyModal={openApplyModal}
            currentLang={currentLang}
            t={t}
          />
        )}

        {currentView === "detail" && (
          <JobDetailView
            job={selectedJob}
            onBack={() => navigateTo("jobs")}
            onOpenApplyModal={openApplyModal}
            currentLang={currentLang}
            t={t}
          />
        )}

        {currentView === "saved" && (
          <SavedJobsView
            savedJobs={savedJobs}
            onToggleSave={toggleSaveJob}
            onViewDetails={viewJobDetails}
            onOpenApplyModal={openApplyModal}
            onBackToJobs={() => navigateTo("jobs")}
            currentLang={currentLang}
            t={t}
          />
        )}

        {currentView === "tracker" && (
          <TrackerView
            appliedJobs={appliedJobs}
            currentLang={currentLang}
            t={t}
          />
        )}

        {currentView === "talent" && (
          <TalentView
            currentLang={currentLang}
            showToast={showToast}
            onSuccess={() => navigateTo("jobs")}
            onBack={() => {
              if (applyModalJobId && currentDetailJobId === applyModalJobId) {
                navigateTo("detail");
              } else {
                navigateTo("jobs");
              }
            }}
            t={t}
            targetJob={ALL_JOBS.find((j) => j.id === applyModalJobId) || null}
            onClearTargetJob={() => setApplyModalJobId("")}
            onApplySuccess={(newApp) => {
              setAppliedJobs((prev) => [newApp, ...prev]);
            }}
            currentUser={currentUser}
          />
        )}

        {currentView === "about" && (
          <AboutView currentLang={currentLang} />
        )}

        {currentView === "contact" && (
          <ContactView
            currentLang={currentLang}
            showToast={showToast}
            t={t}
          />
        )}

        {currentView === "login" && (
          <LoginView
            onLoginSuccess={handleAuthSuccess}
            navigateTo={navigateTo}
            showToast={showToast}
            currentLang={currentLang}
            t={t}
          />
        )}

        {currentView === "signup" && (
          <SignupView
            onSignupSuccess={handleAuthSuccess}
            navigateTo={navigateTo}
            showToast={showToast}
            currentLang={currentLang}
            t={t}
          />
        )}
      </main>

      {/* Easy Apply Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={closeApplyModal}
        jobId={applyModalJobId}
        setJobId={setApplyModalJobId}
        applicantName={applicantName}
        setApplicantName={setApplicantName}
        applicantEmail={applicantEmail}
        setApplicantEmail={setApplicantEmail}
        applicantPhone={applicantPhone}
        setApplicantPhone={setApplicantPhone}
        isSubmitting={isSubmittingApply}
        onSubmit={handleApplySubmit}
        currentLang={currentLang}
      />

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 transition-all duration-300 text-xs ${
          toast.visible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span className="font-medium">{toast.message}</span>
      </div>

      {/* Footer */}
      <Footer navigateTo={navigateTo} currentLang={currentLang} />
    </div>
  );
}
