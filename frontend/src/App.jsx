import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
import AboutUsPage from "./pages/AboutUsPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminLogin from "./pages/Admin/AdminLogin";
import ApplicationDetails from "./pages/Admin/ApplicationDetails";
import ApplicantsManagement from "./pages/Admin/ApplicationsManagement";
import JobManagement from "./pages/Admin/JobManagement";
// import SettingsPage from "./pages/Admin/SettingsPage";
import ApplicantForm from "./pages/ApplicantForm";
import ContactPage from "./pages/ContactPage";
import JobDetailsPage from "./pages/jobDetailsPage";
import JobsPage from "./pages/JobsPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import SpecializationPage from "./pages/SpecializationPage";
import RecruitersPage from "./pages/RecruitersPage";
import RecruitersManagement from "./pages/Admin/RecruitersManagement";
import RecruiterDetails from "./pages/Admin/RecruiterDetails";


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <JobProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/specialization" element={<SpecializationPage />} />
              <Route path="/recruiters" element={<RecruitersPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/apply/:id" element={<ApplicantForm />} />
              <Route path="/jobs/:id" element={<JobDetailsPage />} />
              <Route exact path="/login" element={<AdminLogin />} />

              <Route path="/admin" element={<AdminLayout />}>
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="jobs"
                  element={
                    <ProtectedRoute>
                      <JobManagement />
                    </ProtectedRoute>
                  }
                />
              
                <Route
                  path="applicants"
                  element={
                    <ProtectedRoute>
                      <ApplicantsManagement />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="recruiters"
                  element={
                    <ProtectedRoute>
                      <RecruitersManagement />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="applicants/:id"
                  element={
                    <ProtectedRoute>
                      <ApplicationDetails />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="recruiters/:id"
                  element={
                    <ProtectedRoute>
                      <RecruiterDetails />
                    </ProtectedRoute>
                  }
                />

                {/* <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="jobs" element={<JobManagement />} />
                <Route path="applicants" element={<ApplicantsManagement />} /> */}
                {/* <Route path="settings" element={<SettingsPage />} /> */}
                {/* <Route path="applicants/:id" element={<ApplicationDetails />} /> */}
              </Route>
            </Routes>
          </JobProvider>
        </AuthProvider>
      </BrowserRouter>

      {/* <LandingPage /> */}
      {/* <JobsPage /> */}
      {/* <ContactPage /> */}
    </>
  );
}

export default App
