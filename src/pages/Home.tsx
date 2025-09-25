import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Search, HandHeart, HandHelping, HandCoins, Hospital, GraduationCap, 
  Award, Siren, Facebook, Youtube, Users, Info, Bell, Phone
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const socialButtons = [
    {
      name: "Facebook Page",
      icon: Facebook,
      url: "https://www.facebook.com/bobdo.official",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Facebook Group", 
      icon: Users,
      url: "https://www.facebook.com/groups/BOBO.BD",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "YouTube Channel",
      icon: Youtube,
      url: "https://youtube.com/@bograonlineblooddonationorgani",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  const services = [
    { icon: Search, title: "ডোনার খুঁজুন", path: "/find-donor" },
    { icon: HandHeart, title: "রক্তদাতা হোন", path: "/become-donor" },
    { icon: HandHelping, title: "স্বেচ্ছাসেবক হোন", path: "/become-volunteer" },
    { icon: HandCoins, title: "আর্থিক অনুদান", path: "/donation" },
    { icon: Users, title: "কমিউনিটি", path: "/community" },
    { icon: Hospital, title: "হাসপাতাল", path: "/hospitals" },
    { icon: GraduationCap, title: "ট্রেনিং", path: "/training" },
    { icon: Award, title: "সার্টিফিকেট", path: "/certificate" },
    { icon: Bell, title: "নোটিশ", path: "/notices" },
    { icon: Phone, title: "যোগাযোগ", path: "/contact" },
    { icon: Siren, title: "জরুরি যোগাযোগ", path: "/emergency" },
    { icon: Info, title: "আমাদের সম্পর্কে", path: "/about" },
  ];

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Layout showNavBars={true}>
      <div className="px-4 space-y-6 lg:space-y-8">
        {/* Hero Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6 lg:p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
                <img 
                  src="/images/bobdo-logo.png" 
                  alt="BOBDO Logo" 
                  className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
                />
                <div>
                  <h1 className="text-xl lg:text-3xl font-bold text-primary font-bengali">
                    বগুড়া অনলাইন রক্তদান সংগঠন
                  </h1>
                  <p className="text-sm lg:text-lg text-muted-foreground font-bengali mt-1">
                    স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <Card className="lg:hidden">
          <CardContent className="p-4">
            <div className="flex gap-2 justify-center">
              {socialButtons.map((button) => (
                <Button
                  key={button.name}
                  onClick={() => openExternalLink(button.url)}
                  className={`flex-1 ${button.color} text-white border-0 rounded-full py-2.5 shadow-md hover:shadow-lg transition-all duration-200`}
                >
                  <button.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Desktop Social Media Section */}
        <Card className="hidden lg:block">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold font-bengali mb-4 text-center">
              আমাদের সাথে যুক্ত হোন
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {socialButtons.map((social, index) => (
                <Button
                  key={index}
                  onClick={() => openExternalLink(social.url)}
                  className={`${social.color} text-white font-bengali flex items-center gap-2 h-12`}
                >
                  <social.icon className="h-5 w-5" />
                  {social.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <div>
          <h2 className="text-lg lg:text-xl font-bold text-center mb-4 lg:mb-6 font-bengali text-foreground">
            সেবাসমূহ
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {services.map((service) => (
              <ServiceCard
                key={service.path}
                icon={service.icon}
                title={service.title}
                onClick={() => navigate(service.path)}
                className="h-24 lg:h-28"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;