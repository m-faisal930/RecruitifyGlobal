import AboutUsPage from "./pages/AboutUsPage";
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
        </Routes>
      </BrowserRouter>

      {/* <LandingPage /> */}
      {/* <JobsPage /> */}
      {/* <ContactPage /> */}
    </>
  );
}

export default App
