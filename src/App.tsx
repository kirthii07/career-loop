import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/layout/LoadingScreen';

// Pages
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailsPage } from './pages/JobDetailsPage';
import { InternshipsPage } from './pages/InternshipsPage';
import { InternshipDetailsPage } from './pages/InternshipDetailsPage';
import { CompaniesPage } from './pages/CompaniesPage';

// Dedicated Auth Pages (PRD #13, #14, #15)
import { CandidateLoginPage } from './pages/CandidateLoginPage';
import { CandidateRegisterPage } from './pages/CandidateRegisterPage';
import { RecruiterLoginPage } from './pages/RecruiterLoginPage';
import { RecruiterRegisterPage } from './pages/RecruiterRegisterPage';

// Candidate Dashboard & Profile (PRD #22, #23, #24)
import { CandidateDashboardPage } from './pages/CandidateDashboardPage';
import { CandidateProfilePage } from './pages/CandidateProfilePage';
import { CandidateApplicationsPage } from './pages/CandidateApplicationsPage';

// Recruiter Dashboard & Requisitions (PRD #28, #29, #30)
import { RecruiterDashboardPage } from './pages/RecruiterDashboardPage';
import { RecruiterJobsPage } from './pages/RecruiterJobsPage';
import { RecruiterApplicantsPage } from './pages/RecruiterApplicantsPage';
import { PostJobPage } from './pages/PostJobPage';

// Admin Portal
import { AdminPortalPage } from './pages/AdminPortalPage';

// ─────────────────────────────────────────────────────────────────────────────
// Shell Layout — Navbar + Outlet + Footer + Loading Screen
// ─────────────────────────────────────────────────────────────────────────────
function Shell() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-charcoal-900 selection:bg-loop-indigo/20 selection:text-loop-indigo font-sans flex flex-col justify-between">
      {/* 1s minimal infinity logo loading intro on page load (PRD #40) */}
      <LoadingScreen />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// App Router
// ─────────────────────────────────────────────────────────────────────────────
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          
          {/* Public Marketplace */}
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/internships/:id" element={<InternshipDetailsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />

          {/* Dedicated Candidate Routes (PRD #13, #14, #22, #23, #24) */}
          <Route path="/candidate/login" element={<CandidateLoginPage />} />
          <Route path="/candidate/register" element={<CandidateRegisterPage />} />
          <Route path="/candidate/dashboard" element={<CandidateDashboardPage />} />
          <Route path="/candidate/profile" element={<CandidateProfilePage />} />
          <Route path="/candidate/applications" element={<CandidateApplicationsPage />} />

          {/* Dedicated Recruiter Routes (PRD #13, #15, #28, #29, #30) */}
          <Route path="/recruiter/login" element={<RecruiterLoginPage />} />
          <Route path="/recruiter/register" element={<RecruiterRegisterPage />} />
          <Route path="/recruiter/dashboard" element={<RecruiterDashboardPage />} />
          <Route path="/recruiter/jobs" element={<RecruiterJobsPage />} />
          <Route path="/recruiter/jobs/new" element={<PostJobPage />} />
          <Route path="/recruiter/applicants" element={<RecruiterApplicantsPage />} />

          {/* Admin Governance */}
          <Route path="/admin" element={<AdminPortalPage />} />

          {/* Aliases & Fallbacks */}
          <Route path="/login" element={<Navigate to="/candidate/login" replace />} />
          <Route path="/register" element={<Navigate to="/candidate/register" replace />} />
          <Route path="/dashboard" element={<Navigate to="/candidate/dashboard" replace />} />

          {/* 404 Not Found */}
          <Route
            path="*"
            element={
              <div className="pt-40 pb-28 text-center px-4">
                <h1 className="font-display text-7xl font-black text-charcoal-900 mb-3">404</h1>
                <p className="text-sm sm:text-base text-charcoal-500 mb-8 max-w-md mx-auto">
                  The page you're looking for doesn't exist in the Loop. Let's get you back to active opportunities.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3.5 bg-charcoal-900 hover:bg-black text-white text-xs font-bold rounded-full transition-colors shadow-md"
                >
                  Return to Home
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
