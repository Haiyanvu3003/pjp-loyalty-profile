// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileContact from "./components/ProfileContact";
import RankPage from "./pages/RankPage";
import Gold610Page from "./pages/Gold610Page";
import LuxuryPolicy from "./components/rank/LuxuryPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="contact" element={<ProfileContact />} />
          <Route path="rank" element={<RankPage />} />
          <Route path="gold610" element={<Gold610Page />} />
          <Route path="luxury" element={<LuxuryPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
