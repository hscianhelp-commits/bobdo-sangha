import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Trophy, Users, Star, Award } from "lucide-react";

const About = () => {
  return (
    <Layout title="আমাদের সম্পর্কে">
      <div className="px-4 space-y-6">
        {/* Introduction */}
        <Card className="border-primary/20 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-6 text-center">
            <img 
              src="/images/bobdo-logo.png"
              alt="BOBDO Logo"
              className="w-16 h-16 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-bold font-bengali mb-2 text-primary">
              বগুড়া অনলাইন রক্তদান সংগঠন
            </h2>
            <p className="text-muted-foreground font-bengali">
              স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
            </p>
          </CardContent>
        </Card>

        {/* Our Identity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Heart className="h-5 w-5 text-primary" />
              আমাদের পরিচয়
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-bengali leading-relaxed text-muted-foreground">
              বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) একটি অলাভজনক সামাজিক সংগঠন যা ২০১৬ সালে প্রতিষ্ঠিত হয়েছে। 
              আমাদের মূল উদ্দেশ্য হলো বগুড়া জেলায় রক্তের সংকট দূরীকরণ এবং জরুরি মুহূর্তে মানুষের পাশে দাঁড়ানো। 
              আমরা একটি সম্পূর্ণ স্বেচ্ছাসেবী সংগঠন যেখানে সকল সদস্য বিনামূল্যে সেবা প্রদান করে।
            </p>
          </CardContent>
        </Card>

        {/* Our Goal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Target className="h-5 w-5 text-primary" />
              আমাদের লক্ষ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">নিরাপদ ও পর্যাপ্ত রক্তের যোগান নিশ্চিত করা</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">রক্তদান সম্পর্কে জনসচেতনতা বৃদ্ধি করা</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">জরুরি মুহূর্তে ২৪/৭ সেবা প্রদান করা</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">প্রাথমিক চিকিৎসা বিষয়ে প্রশিক্ষণ প্রদান</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">দরিদ্র রোগীদের চিকিৎসা সহায়তা প্রদান</p>
            </div>
          </CardContent>
        </Card>

        {/* Our Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Trophy className="h-5 w-5 text-primary" />
              আমাদের অর্জন
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">৬৯০০০+</div>
                <div className="text-sm font-bengali text-muted-foreground">সদস্য সংখ্যা</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-success">২৫০০+</div>
                <div className="text-sm font-bengali text-muted-foreground">নিবন্ধিত দাতা</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">৫০০০+</div>
                <div className="text-sm font-bengali text-muted-foreground">জীবন রক্ষা</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">১০০+</div>
                <div className="text-sm font-bengali text-muted-foreground">স্বেচ্ছাসেবক</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Values */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Star className="h-5 w-5 text-primary" />
              আমাদের মূল্যবোধ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">মানবতা</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  সকল মানুষের প্রতি সমান ভালোবাসা ও সম্মান
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 text-success" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">সেবা</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  নিঃস্বার্থ সেবা প্রদানের প্রতিশ্রুতি
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">স্বচ্ছতা</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  সব কার্যক্রমে পূর্ণ স্বচ্ছতা ও জবাবদিহিতা
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="h-4 w-4 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">দায়বদ্ধতা</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  সমাজের প্রতি আমাদের দায়বদ্ধতা ও অঙ্গীকার
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Award className="h-5 w-5 text-primary" />
              নেতৃত্ব
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <h4 className="font-semibold font-bengali text-primary">মোঃ সোহেল মিয়া</h4>
                <p className="text-sm text-muted-foreground font-bengali">প্রতিষ্ঠাতা ও পরিচালক</p>
              </div>
              <div className="p-3 bg-success/10 rounded-lg">
                <h4 className="font-semibold font-bengali text-success">শৈবাল খলিফ ছোটন</h4>
                <p className="text-sm text-muted-foreground font-bengali">প্রধান সমন্বয়ক</p>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <h4 className="font-semibold font-bengali text-blue-600">রাহিদ হাসান</h4>
                <p className="text-sm text-muted-foreground font-bengali">প্রশাসন ও এইচআর প্রধান</p>
              </div>
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <h4 className="font-semibold font-bengali text-yellow-600">মোঃ আব্দুল আজিজ</h4>
                <p className="text-sm text-muted-foreground font-bengali">হিসাবরক্ষক</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coordinators */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Users className="h-5 w-5 text-primary" />
              সমন্বয়কারী
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {['জয়া', 'শশী', 'সুলতান', 'মাহি', 'নাঈম', 'সাব্বির'].map((name, index) => (
                <div key={index} className="p-2 bg-muted rounded-lg text-center">
                  <span className="font-bengali text-sm">{name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Our Team */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Heart className="h-5 w-5 text-primary" />
              আমাদের টিম
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {['মতিউর', 'লাল সবুজ', 'অকুতোভয়', 'জাগ্রত', 'বিজয়', 'বীর সেনা'].map((name, index) => (
                <div key={index} className="p-2 bg-red-50 rounded-lg text-center border border-red-200">
                  <span className="font-bengali text-sm text-red-700">{name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-bengali text-center font-semibold">
            💝 আমাদের সাথে থাকুন, জীবন বাঁচান
          </p>
          <p className="text-red-700 font-bengali text-center text-sm mt-1">
            একসাথে আমরা আরও বেশি মানুষের সেবা করতে পারি
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
