import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Notice {
  id: number;
  title: string;
  date: string;
  category: "জরুরি" | "সাধারণ" | "ইভেন্ট" | "ঘোষণা" | "গুরুত্বপূর্ণ";
  content: string;
  isImportant: boolean;
}

const Notices = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const notices: Notice[] = [
    {
      id: 1,
      title: "রক্তের সংকট",
      date: "২০২৪-০১-২২",
      category: "জরুরি",
      isImportant: true,
      content: "বর্তমানে আমরা রক্তের গুরুতর সংকটে আছি। রক্তদাতাদের অবিলম্বে প্রয়োজন। আপনি যদি রক্তদানের জন্য উপযুক্ত হন তবে দয়া করে আমাদের যে কোন দান কেন্দ্রে যত দ্রুত সম্ভব আসুন।"
    },
    {
      id: 2,
      title: "আরো স্বেচ্ছাসেবক প্রয়োজন",
      date: "২০২৪-০১-২০",
      category: "ঘোষণা",
      isImportant: false,
      content: "এই মিশনে কাজ করতে আরও বেশি স্বেচ্ছাসেবক এর প্রয়োজন। যারা আগ্রহী আছেন তারা দয়া করে আমাদের সাথে যোগাযোগ করুন ধন্যবাদ।"
    },
    {
      id: 3,
      title: "মাসিক মিটিংয়ে উপস্থিত হওয়ার জন্য অনুরোধ",
      date: "২০২৪-০১-১৮",
      category: "গুরুত্বপূর্ণ",
      isImportant: true,
      content: "স্বেচ্ছাসেবকগণ আপনাদের জন্য প্রতি মাসে যে মাসিক মিটিং এর ব্যবস্থা করা হয় তাতে দয়া করে উপস্থিত থাকবেন এবং মাসিক ভাতা প্রদান করবেন"
    },
    {
      id: 4,
      title: "আমাদের দাতাদের ধন্যবাদ",
      date: "২০২৪-০১-১৫",
      category: "ঘোষণা",
      isImportant: false,
      content: "আমাদের বসন্তকালীন রক্তদান শিবিরে অংশগ্রহণকারী সকল দাতাদের আন্তরিক ধন্যবাদ জানাতে চাই।"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "জরুরি":
        return "bg-red-100 text-red-800 border-red-200";
      case "ইভেন্ট":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ঘোষণা":
        return "bg-green-100 text-green-800 border-green-200";
      case "গুরুত্বপূর্ণ":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (selectedNotice) {
    return (
      <Layout title="নোটিশ বিস্তারিত">
        <div className="px-4">
          <Button
            variant="ghost"
            onClick={() => setSelectedNotice(null)}
            className="mb-4 text-primary"
          >
            ← পিছনে যান
          </Button>
          
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className={getCategoryColor(selectedNotice.category)}>
                  {selectedNotice.category}
                </Badge>
                {selectedNotice.isImportant && (
                  <Badge className="ml-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                    গুরুত্বপূর্ণ
                  </Badge>
                )}
              </div>
              
              <h1 className="text-xl font-bold font-bengali mb-3 text-foreground">
                {selectedNotice.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-bengali">{selectedNotice.date}</span>
              </div>
              
              <div className="prose prose-sm font-bengali text-foreground">
                <p className="leading-relaxed">{selectedNotice.content}</p>
              </div>
              
              {selectedNotice.category === "জরুরি" && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-bengali font-semibold text-center">
                    🆘 জরুরি সহায়তার জন্য: ০১৭২২৫২৮১৬৪
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="নোটিশ বোর্ড">
      <div className="px-4 space-y-4">
        {notices.map((notice) => (
          <Card 
            key={notice.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              notice.isImportant ? 'border-l-4 border-l-primary' : ''
            }`}
            onClick={() => setSelectedNotice(notice)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(notice.category)}>
                      {notice.category}
                    </Badge>
                    {notice.isImportant && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        গুরুত্বপূর্ণ
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold font-bengali text-lg leading-tight text-foreground">
                    {notice.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-bengali">{notice.date}</span>
                  </div>
                </div>
                
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <p className="text-muted-foreground font-bengali text-sm line-clamp-2">
                {notice.content.substring(0, 100)}...
              </p>
            </CardContent>
          </Card>
        ))}
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-bengali text-center font-semibold">
            📢 সব নোটিশ আমাদের ফেসবুক গ্রুপেও পাবেন
          </p>
          <p className="text-blue-700 font-bengali text-center text-sm mt-1">
            দ্রুত আপডেট পেতে গ্রুপে যোগ দিন
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Notices;
