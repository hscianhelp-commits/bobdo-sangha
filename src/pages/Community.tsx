import { useEffect } from "react";

const Community = () => {
  useEffect(() => {
    // Redirect to Facebook group immediately
    window.open("https://www.facebook.com/groups/BOBO.BD", "_blank");
    // Go back to home after a short delay
    setTimeout(() => {
      window.history.back();
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-lg font-bengali font-semibold text-foreground">
          ফেসবুক গ্রুপে নিয়ে যাওয়া হচ্ছে...
        </h2>
        <p className="text-muted-foreground font-bengali text-sm mt-2">
          কমিউনিটিতে যোগ দিন এবং অন্যদের সাহায্য করুন
        </p>
      </div>
    </div>
  );
};

export default Community;