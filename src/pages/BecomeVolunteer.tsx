import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users2, GraduationCap, Heart, HandHeart, Clock, Target } from "lucide-react";

const BecomeVolunteer = () => {
  const openRegistration = () => {
    window.open("https://docs.google.com/forms/d/1r6AHUr2biiREYTnF-Bqb0eK9YINEyPbAk52dqmMcLvc/edit?usp=drivesdk", "_blank");
  };

  return (
    <Layout title="স্বেচ্ছাসেবক হোন">
      <div className="px-4 space-y-6">
        {/* Registration Button */}
        <Card className="border-success/20 bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6 text-center">
            <Users2 className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-lg font-semibold font-bengali mb-4">
              মানবসেবায় যোগ দিন
            </h3>
            <Button
              onClick={openRegistration}
              className="w-full btn-ripple bg-success hover:bg-success/90 text-success-foreground text-lg py-4"
            >
              নিবন্ধন করুন
            </Button>
          </CardContent>
        </Card>

        {/* Qualifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <GraduationCap className="h-5 w-5 text-primary" />
              প্রয়োজনীয় যোগ্যতা
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">বয়স ১৮ বছরের ঊর্ধ্বে</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">মানবসেবার জন্য আগ্রহী</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">কমিউনিকেশন স্কিল</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">নিয়মিত সময় দিতে পারবেন</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">টিমওয়ার্কে পারদর্শী</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">ইতিবাচক মনোভাব</p>
            </div>
          </CardContent>
        </Card>

        <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bengali">
          <GraduationCap className="h-5 w-5 text-primary" />
          সংগঠনের ভূমিকা ও কাঠামো
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">প্রধান কাজ: অসহায় রোগীদের জন্য রক্ত ম্যানেজ করা, দুর্যোগকালীন সময়ে মানুষের পাশে দাঁড়ানো ও অন্যান্য মানবিক কাজ।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">প্রতিদিন অন্তত একজন ডোনার ম্যানেজ করার চেষ্টা করতে হবে। সম্ভব না হলে মাসে অন্তত ৫ জন ডোনার ম্যানেজ করে ৫ জন অসহায় রোগীকে সাহায্য করতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">সংগঠনে কোনো স্থায়ী কমিটি নেই। কাজের সুবিধার্থে ৬টি টিমে ভাগ করা হয়েছে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">প্রতিটি টিমে একজন টিম লিডার/কো-অর্ডিনেটর আছেন। কোনো সমস্যা থাকলে টিম লিডারের সাথে যোগাযোগ করতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">প্রতি মাসে আলোচনা সভা অনুষ্ঠিত হয়। সকল সদস্যের উপস্থিতি বাধ্যতামূলক, সমস্যা থাকলে টিম লিডারকে জানাতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">সংগঠন পরিচালনার জন্য একটি অফিস রয়েছে। অফিস ভাড়া, ক্যাম্পেইন, সেমিনার ইত্যাদি খরচের জন্য ফান্ড গঠন করা হয়েছে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">সদস্যদের মাসিক চাঁদা সর্বনিম্ন ৫০ টাকা। সামর্থ্য অনুযায়ী অতিরিক্ত দিতে পারবেন।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">চাঁদা প্রতি মাসের ১০ তারিখের মধ্যে টিম লিডারকে জমা দিতে হবে। সমস্যায় পড়লে টিম লিডারকে জানাতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">আমাদের একজন কোষাধ্যক্ষ আছেন যিনি প্রতিমাসে আয়-ব্যয়ের হিসাব স্বচ্ছতার সাথে প্রকাশ করেন।</p>
        </div>
      </CardContent>
    </Card>



        <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bengali">
          <GraduationCap className="h-5 w-5 text-primary" />
          সদস্য পদ বাতিল ও স্থগিতের নিয়মাবলী
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">"BOBDO" কোন সদস্য যদি একটানা ৩ মাসের মাসিক ফি প্রদান না করেন।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">"BOBDO" এর দায়িত্ব ও কর্তব্য যদি যথারীতি পালন না করেন বা সংগঠনের কাজে নিষ্ক্রিয় হয়ে পড়েন।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">"BOBDO" প্রাসঙ্গিক কারণে কোন সদস্যকে বহিষ্কার করার এখতিয়ার সংগঠনের প্রধান ব্যক্তিগণ সংরক্ষণ করেন।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">৩ মাস কার্যকরী পরিষদের সভায় অনুপস্থিত থাকলে সদস্যপদ বাতিল হবে (যদি দায়িত্বশীলকে না জানানো হয়)।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">"BOBDO" এর কোন সদস্য মাদকাসক্ত হলে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">সদস্যদের প্রদত্ত সকল প্রকার চাঁদা অফেরতযোগ্য এবং তা দান বলিয়া গণ্য হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">সংগঠনকে রাজনৈতিক প্রভাবমুক্ত রাখতে সদস্যদের সংঘবদ্ধ থাকতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">প্রতিটি সদস্যকে প্রতি মাসে গ্রুপে অন্তত ৩টি পোস্ট করতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">বগুড়া জেলায় অন্য কোন রক্তদান সংগঠনের সাথে যুক্ত হওয়া যাবে না।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">মেসেঞ্জার গ্রুপে কথা বলার পূর্বে কো-অর্ডিনেটরের সাথে আলোচনা করতে হবে।</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <p className="font-bengali">বিশেষ কারণে সংগঠন থেকে চলে যেতে চাইলে দায়িত্বশীলকে জানিয়ে আইডি কার্ড ফেরত দিতে হবে।</p>
        </div>
      </CardContent>
    </Card>

        {/* Why Volunteer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Heart className="h-5 w-5 text-primary" />
              কেন স্বেচ্ছাসেবক হবেন?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <HandHeart className="h-4 w-4 text-success" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">মানুষের জীবন বাঁচান</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  আপনার সেবার মাধ্যমে কেউ না কেউ নতুন জীবন পাবে
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users2 className="h-4 w-4 text-success" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">সামাজিক নেটওয়ার্ক</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  একই লক্ষ্যের মানুষদের সাথে কাজ করার সুযোগ
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-4 w-4 text-success" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">দক্ষতা বৃদ্ধি</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  নেতৃত্ব, যোগাযোগ ও সংগঠনের দক্ষতা বাড়বে
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="h-4 w-4 text-success" />
              </div>
              <div>
                <h4 className="font-semibold font-bengali">উদ্দেশ্যপূর্ণ জীবন</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  সমাজের জন্য কাজ করে জীবনে অর্থ খুঁজে পাবেন
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Volunteer Roles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Clock className="h-5 w-5 text-primary" />
              স্বেচ্ছাসেবকের ভূমিকা
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold font-bengali mb-2 text-primary">রক্তদাতা সংগ্রহ</h4>
              <p className="text-sm font-bengali text-muted-foreground">
                নতুন রক্তদাতা খুঁজে বের করা এবং তাদের উৎসাহিত করা
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold font-bengali mb-2 text-primary">রোগী সহায়তা</h4>
              <p className="text-sm font-bengali text-muted-foreground">
                জরুরি রক্তের প্রয়োজনে রোগীদের সাহায্য করা
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold font-bengali mb-2 text-primary">সচেতনতা প্রচার</h4>
              <p className="text-sm font-bengali text-muted-foreground">
                রক্তদানের গুরুত্ব সম্পর্কে মানুষকে সচেতন করা
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold font-bengali mb-2 text-primary">ইভেন্ট সংগঠন</h4>
              <p className="text-sm font-bengali text-muted-foreground">
                রক্তদান ক্যাম্প ও সচেতনতা কর্মসূচি আয়োজন
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold font-bengali mb-2 text-primary">জরুরি সহায়তা</h4>
              <p className="text-sm font-bengali text-muted-foreground">
                ২৪/৭ জরুরি কলে সাড়া দেওয়া ও সমন্বয় করা
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BecomeVolunteer;
