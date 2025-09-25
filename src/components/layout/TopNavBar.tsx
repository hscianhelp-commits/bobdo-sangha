import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "./HamburgerMenu";

interface TopNavBarProps {
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
}

const TopNavBar = ({ onNotificationClick, onMenuClick }: TopNavBarProps) => {
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