import { Bell, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface TopNavBarProps {
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
}

const TopNavBar = ({ onNotificationClick, onMenuClick }: TopNavBarProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
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
          {isInstallable && (
            <Button
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8"
              onClick={handleInstall}
              title="অ্যাপ ইনস্টল করুন"
            >
              <Download className="h-4 w-4" />
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
          <HamburgerMenu onMenuClick={onMenuClick} />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;