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
    <Card className={`service-card cursor-pointer hover:shadow-lg transition-all duration-200 ${className}`} onClick={onClick}>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <Icon className={`h-8 w-8 mb-3 ${iconColor}`} />
        <h3 className="font-semibold text-sm font-bengali leading-tight">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;