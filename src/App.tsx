import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import ExternalBrowserPrompt from "./components/ExternalBrowserPrompt";
import Home from "./pages/Home";
import Emergency from "./pages/Emergency";
import Community from "./pages/Community";
import FindDonor from "./pages/FindDonor";
import BecomeDonor from "./pages/BecomeDonor";
import BecomeVolunteer from "./pages/BecomeVolunteer";
import Donation from "./pages/Donation";
import Hospitals from "./pages/Hospitals";
import Training from "./pages/Training";
import Certificate from "./pages/Certificate";
import Notices from "./pages/Notices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PWAInstallPrompt />
      <ExternalBrowserPrompt />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/community" element={<Community />} />
          <Route path="/find-donor" element={<FindDonor />} />
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="/become-volunteer" element={<BecomeVolunteer />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/training" element={<Training />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
