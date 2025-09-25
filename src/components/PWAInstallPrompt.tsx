import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleCancel = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-sm bg-white">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <img 
                src="/images/bobdo-logo.png" 
                alt="BOBDO Logo" 
                className="w-16 h-16 mx-auto mb-2 object-contain"
              />
              <CardTitle className="text-lg font-bengali text-primary">
                BOBDO অ্যাপ ইনস্টল করুন
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-8 w-8 -mt-2"
              onClick={handleCancel}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-muted-foreground font-bengali">
            দ্রুত এবং সহজ অ্যাক্সেসের জন্য আপনার ডিভাইসে BOBDO অ্যাপ ইনস্টল করুন।
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 font-bengali"
              onClick={handleCancel}
            >
              বাতিল
            </Button>
            <Button
              className="flex-1 font-bengali bg-primary hover:bg-primary/90"
              onClick={handleInstall}
            >
              <Download className="h-4 w-4 mr-2" />
              ইনস্টল
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;