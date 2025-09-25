import { House, Siren, Users, Info } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: House, label: "হোম", path: "/" },
    { icon: Siren, label: "ইমারজেন্সি", path: "/emergency" },
    { icon: Users, label: "কমিউনিটি", path: "/community" },
    { icon: Info, label: "আমাদের সম্পর্কে", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="flex justify-around items-center py-2 max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Button
            key={path}
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 h-auto min-w-0 flex-1 ${
              isActive(path) ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => navigate(path)}
          >
            <Icon className={`h-5 w-5 ${isActive(path) ? "text-primary" : ""}`} />
            <span className="text-xs font-bengali">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;