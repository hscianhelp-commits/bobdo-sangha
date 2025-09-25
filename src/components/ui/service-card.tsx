import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  className?: string;
  iconColor?: string;
}

const ServiceCard = ({ icon: Icon, title, onClick, className = "", iconColor = "text-primary" }: ServiceCardProps) => {
  return (
    <Card className={`service-card cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${className}`} onClick={onClick}>
      <CardContent className="flex flex-col items-center justify-center p-4 lg:p-6 text-center h-full">
        <Icon className={`h-6 w-6 lg:h-8 lg:w-8 mb-2 lg:mb-3 ${iconColor}`} />
        <h3 className="font-semibold text-xs lg:text-sm font-bengali leading-tight">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;