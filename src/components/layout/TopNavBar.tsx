import { Bell, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";

interface TopNavBarProps {
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
}

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const TopNavBar = ({ onNotificationClick, onMenuClick }: TopNavBarProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(true); // Always show for now

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setShowInstallButton(false);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      // Fallback for browsers that don't support install prompt
      alert('অ্যাপ ইনস্টল করতে ব্রাউজারের মেনু থেকে "অ্যাপ ইনস্টল করুন" বা "Add to Home Screen" অপশন ব্যবহার করুন।');
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };
  return (
    <div className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto lg:max-w-4xl">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/bobdo-logo.png" 
            alt="BOBDO Logo" 
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-lg font-bold text-primary font-bengali">BOBDO</h1>
        </div>
        
        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          {showInstallButton && (
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex h-8 px-3 text-xs font-bengali"
              onClick={handleInstall}
            >
              <Download className="h-3 w-3 mr-1" />
              ইনস্টল
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-8 w-8"
            onClick={onNotificationClick}
          >
            <Bell className="h-4 w-4" />
          </Button>
          {showInstallButton && (
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden p-2 h-8 w-8"
              onClick={handleInstall}
            >
              <Download className="h-4 w-4" />
            </Button>
          )}
          <HamburgerMenu onMenuClick={onMenuClick} />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;