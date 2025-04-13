import AboutUsPage from "./pages/AboutUsPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLayout from "./pages/Admin/AdminLayout";
import ApplicationDetails from "./pages/Admin/ApplicationDetails";
import ApplicantsManagement from "./pages/Admin/ApplicationsManagement";
import JobManagement from "./pages/Admin/JobManagement";
import SettingsPage from "./pages/Admin/SettingsPage";
import ApplicantForm from "./pages/ApplicantForm";
import ContactPage from "./pages/ContactPage";
import JobsPage from "./pages/JobsPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/apply/:id" element={<ApplicantForm />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="jobs" element={<JobManagement />} />
            <Route path="applicants" element={<ApplicantsManagement />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="applicants/:id" element={<ApplicationDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <LandingPage /> */}
      {/* <JobsPage /> */}
      {/* <ContactPage /> */}
    </>
  );
}

export default App
