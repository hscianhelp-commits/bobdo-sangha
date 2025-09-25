import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, House, Phone, Search, HandHeart, HandHelping, HandCoins, 
  Hospital, GraduationCap, Award, Bell, Info, Phone as PhoneContact, Users, Siren 
} from "lucide-react";

interface HamburgerMenuProps {
  onMenuClick?: () => void;
}

const HamburgerMenu = ({ onMenuClick }: HamburgerMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: House, title: "হোম", path: "/" },
    { icon: Siren, title: "জরুরি যোগাযোগ", path: "/emergency" },
    { icon: Search, title: "ডোনার খুঁজুন", path: "/find-donor" },
    { icon: HandHeart, title: "রক্তদাতা হোন", path: "/become-donor" },
    { icon: HandHelping, title: "স্বেচ্ছাসেবক হোন", path: "/become-volunteer" },
    { icon: HandCoins, title: "আর্থিক অনুদান", path: "/donation" },
    { icon: Users, title: "কমিউনিটি", path: "/community" },
    { icon: Hospital, title: "হাসপাতাল", path: "/hospitals" },
    { icon: GraduationCap, title: "ট্রেনিং", path: "/training" },
    { icon: Award, title: "সার্টিফিকেট", path: "/certificate" },
    { icon: Bell, title: "নোটিশ", path: "/notices" },
    { icon: Info, title: "আমাদের সম্পর্কে", path: "/about" },
    { icon: PhoneContact, title: "যোগাযোগ", path: "/contact" },
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
    setOpen(false);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="p-2 h-8 w-8"
          onClick={onMenuClick}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-0">
        <SheetHeader className="p-6 bg-primary text-white">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/vTKM4Tt2/1000000237-removebg-preview.png" 
              alt="BOBDO Logo" 
              className="w-10 h-10 object-contain bg-white rounded-full p-1"
            />
            <div>
              <SheetTitle className="text-white font-bengali text-left">BOBDO</SheetTitle>
              <p className="text-white/80 text-sm font-bengali">বগুড়া অনলাইন রক্তদান সংগঠন</p>
            </div>
          </div>
        </SheetHeader>
        
        <div className="py-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className="w-full justify-start gap-3 px-6 py-3 h-auto text-left font-bengali hover:bg-muted"
              onClick={() => handleItemClick(item.path)}
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-foreground">{item.title}</span>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
