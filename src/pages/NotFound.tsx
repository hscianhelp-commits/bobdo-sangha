import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">৪০৪</h1>
        <p className="text-xl text-muted-foreground mb-4 font-bengali">দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি</p>
        <a href="/" className="text-primary hover:text-primary/80 underline font-bengali">
          হোমে ফিরে যান
        </a>
      </div>
    </div>
  );
};

export default NotFound;
