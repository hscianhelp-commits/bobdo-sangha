import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, ExternalLink, Chrome } from "lucide-react";

const ExternalBrowserPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Detect if opened from Facebook, Instagram, WhatsApp, Messenger
    const userAgent = navigator.userAgent.toLowerCase();
    const isInApp = userAgent.includes('fbav') || // Facebook App
                   userAgent.includes('fban') || // Facebook Browser
                   userAgent.includes('instagram') || // Instagram
                   userAgent.includes('whatsapp') || // WhatsApp
                   userAgent.includes('messenger'); // Messenger

    if (isInApp) {
      // Show prompt after a short delay
      setTimeout(() => setShowPrompt(true), 1000);
    }
  }, []);

  const handleOpenInBrowser = () => {
    // For mobile devices, try to open in external browser
    const currentUrl = window.location.href;
    
    // Create intent URL for Android
    if (/android/i.test(navigator.userAgent)) {
      window.location.href = `intent://${currentUrl.replace(/https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
    } else {
      // For iOS, show instructions
      alert('১. উপরের ডানদিকে তিনটি ডট (⋯) ক্লিক করুন\n২. "Open in Chrome" বা "ব্রাউজারে খুলুন" নির্বাচন করুন');
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-sm bg-white">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <Chrome className="w-12 h-12 mx-auto mb-2 text-blue-500" />
              <CardTitle className="text-lg font-bengali text-foreground">
                সেরা অভিজ্ঞতার জন্য
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-8 w-8 -mt-2"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-muted-foreground font-bengali">
            সেরা অভিজ্ঞতার জন্য Chrome ব্রাউজারে খুলুন এবং অ্যাপটি ইনস্টল করুন।
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 font-bengali"
              onClick={handleClose}
            >
              পরে
            </Button>
            <Button
              className="flex-1 font-bengali bg-blue-600 hover:bg-blue-700"
              onClick={handleOpenInBrowser}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              ক্রোমে খুলুন
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExternalBrowserPrompt;