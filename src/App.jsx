import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import SlottedAngleRacks from "./pages/SlottedAngleRacks";
import HeavyDutyPalletRacks from "./pages/HeavyDutyPalletRacks";
import MezzanineFloor from "./pages/MezzanineFloor";
import CompactorRacks from "./pages/CompactorRacks";
import TierStorage from "./pages/TierStorage";
import IndustrialLockers from "./pages/IndustrialLockers";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/slotted-angle-racks" element={<SlottedAngleRacks />} />
        <Route path="/products/heavy-duty-pallet-racks" element={<HeavyDutyPalletRacks />} />
        <Route path="/products/mezzanine-floor" element={<MezzanineFloor />} />
        <Route path="/products/compactor-racks" element={<CompactorRacks />} />
        <Route path="/products/tier-storage" element={<TierStorage />} />
        <Route path="/products/industrial-lockers" element={<IndustrialLockers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}