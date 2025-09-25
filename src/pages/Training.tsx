import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, Heart, AlertTriangle, Thermometer, Droplets, Zap, Eye, Shield, Brain, Activity } from "lucide-react";

const Training = () => {
  const trainingCategories = [
    {
      id: "blood-info",
      title: "রক্ত সম্পর্কে বিস্তারিত",
      icon: Droplets,
      topics: [
        {
          title: "রক্তের উপাদান",
          description: "রক্তের বিভিন্ন উপাদান এবং তাদের কার্যাবলী",
          steps: ["লোহিত কণিকা - অক্সিজেন পরিবহন", "শ্বেত কণিকা - রোগ প্রতিরোধ", "অনুচক্রিকা - রক্ত জমাট বাঁধা", "প্লাজমা - তরল অংশ ও প্রোটিন"]
        },
        {
          title: "রক্তের গ্রুপ",
          description: "বিভিন্ন রক্তের গ্রুপ এবং তাদের বৈশিষ্ট্য",
          steps: ["A গ্রুপ - A অ্যান্টিজেন", "B গ্রুপ - B অ্যান্টিজেন", "AB গ্রুপ - A ও B অ্যান্টিজেন", "O গ্রুপ - কোন অ্যান্টিজেন নেই"]
        },
        {
          title: "Rh ফ্যাক্টর",
          description: "রেসাস ফ্যাক্টর এবং এর গুরুত্ব",
          steps: ["Rh+ এ D অ্যান্টিজেন আছে", "Rh- এ D অ্যান্টিজেন নেই", "গর্ভাবস্থায় বিশেষ সতর্কতা", "রক্তদানে Rh ম্যাচিং জরুরি"]
        }
      ]
    },
    {
      id: "donation-benefits",
      title: "রক্তদানের উপকারিতা",
      icon: Heart,
      topics: [
        {
          title: "দাতার জন্য উপকারিতা",
          description: "রক্তদাতার স্বাস্থ্যগত লাভ",
          steps: ["নতুন রক্ত কণিকা তৈরি", "হৃদরোগের ঝুঁকি কমে", "ক্যান্সারের ঝুঁকি কমে", "ওজন নিয়ন্ত্রণে সাহায্য"]
        },
        {
          title: "সামাজিক উপকারিতা",
          description: "সমাজের জন্য রক্তদানের গুরুত্ব",
          steps: ["জীবন রক্ষা করা", "জরুরি চিকিৎসায় সহায়তা", "সামাজিক দায়বদ্ধতা", "মানবিকতার বিকাশ"]
        },
        {
          title: "বৈজ্ঞানিক উপকারিতা",
          description: "রক্তদানের চিকিৎসা বিজ্ঞানের দিক",
          steps: ["আয়রনের মাত্রা নিয়ন্ত্রণ", "রক্তচাপ কমে", "কোলেস্টেরল কমে", "রক্তের গুণগত মান বাড়ে"]
        }
      ]
    },
    {
      id: "compatibility",
      title: "রক্তের বিস্তারিত সামঞ্জস্যতা চার্ট",
      icon: Shield,
      topics: [
        {
          title: "সর্বজনীন দাতা (O-)",
          description: "O নেগেটিভ গ্রুপের বিশেষত্ব",
          steps: ["সবাইকে রক্ত দিতে পারে", "জরুরি অবস্থায় সবচেয়ে প্রয়োজনীয়", "শুধু O- থেকে নিতে পারে", "সবচেয়ে দুর্লভ গ্রুপ"]
        },
        {
          title: "সর্বজনীন গ্রহীতা (AB+)",
          description: "AB পজিটিভ গ্রুপের বৈশিষ্ট্য",
          steps: ["সব গ্রুপ থেকে নিতে পারে", "শুধু AB+ কে দিতে পারে", "প্লাজমা দানে সেরা", "অ্যান্টিবডি কম"]
        },
        {
          title: "রক্তদানের নিয়ম",
          description: "নিরাপদ রক্তদানের শর্ত",
          steps: ["একই গ্রুপ সবসময় নিরাপদ", "Rh ম্যাচিং অবশ্যই", "ক্রস ম্যাচিং জরুরি", "জরুরি অবস্থায় O- ব্যবহার"]
        }
      ]
    },
    {
      id: "basic",
      title: "মৌলিক জরুরি চিকিৎসা",
      icon: Heart,
      topics: [
        {
          title: "রক্তপাত নিয়ন্ত্রণ",
          description: "কাটা-ছেঁড়া থেকে রক্তপাত বন্ধ করার পদ্ধতি",
          steps: ["ক্ষতস্থান পরিষ্কার করুন", "সরাসরি চাপ প্রয়োগ করুন", "উঁচু করে রাখুন", "ব্যান্ডেজ করুন"]
        },
        {
          title: "CPR (কার্ডিওপালমোনারি রিসাসিটেশন)",
          description: "হৃদযন্ত্র বন্ধ হলে পুনরুজ্জীবনের পদ্ধতি",
          steps: ["বুকের মাঝখানে হাত রাখুন", "৩০টি চাপ দিন (২ ইঞ্চি গভীরে)", "২টি কৃত্রিম শ্বাস দিন", "চক্রটি পুনরাবৃত্তি করুন"]
        },
        {
          title: "শ্বাসরোধে সহায়তা (Choking Management)",
          description: "গলায় কিছু আটকে গেলে করণীয়",
          steps: ["হাইমলিক ম্যানুভার করুন", "পেছনে দাঁড়িয়ে জড়িয়ে ধরুন", "নাভির উপরে চাপ দিন", "৫ বার করুন"]
        },
        {
          title: "অচেতন রোগীর পরিচর্যা",
          description: "জ্ঞান হারালে করণীয়",
          steps: ["শ্বাস-প্রশ্বাস পরীক্ষা করুন", "রিকভারি পজিশনে রাখুন", "শ্বাসনালী পরিষ্কার রাখুন", "তাৎক্ষণিক সাহায্য ডাকুন"]
        }
      ]
    },
    {
      id: "wounds",
      title: "ক্ষত ও আঘাতের চিকিৎসা",
      icon: AlertTriangle,
      topics: [
        {
          title: "পুড়ে যাওয়া",
          description: "পোড়া ক্ষতের প্রাথমিক চিকিৎসা",
          steps: ["ঠাণ্ডা পানিতে ১০ মিনিট রাখুন", "ফোস্কা ফাটাবেন না", "পরিষ্কার কাপড় দিয়ে ঢাকুন", "ডাক্তারের কাছে নিন"]
        },
        {
          title: "কাটা-ছেঁড়া বা ক্ষত চিকিৎসা",
          description: "ধারালো বস্তুর আঘাতে করণীয়",
          steps: ["রক্তপাত বন্ধ করুন", "ক্ষতস্থান পরিষ্কার করুন", "অ্যান্টিসেপটিক ব্যবহার করুন", "ব্যান্ডেজ করুন"]
        },
        {
          title: "হাড় ভাঙা বা মচকানো",
          description: "ভাঙা হাড়ের প্রাথমিক সেবা",
          steps: ["নড়াচড়া বন্ধ করুন", "স্প্লিন্ট ব্যবহার করুন", "ব্যথা কমান", "দ্রুত হাসপাতালে নিন"]
        }
      ]
    },
    {
      id: "emergency",
      title: "বিশেষ জরুরি অবস্থা",
      icon: Zap,
      topics: [
        {
          title: "মাথায় আঘাত",
          description: "মাথার গুরুতর আঘাতের লক্ষণ ও চিকিৎসা",
          steps: ["জ্ঞান আছে কি না দেখুন", "বমি হলে পাশ করে শুইয়ে রাখুন", "রক্তপাত বন্ধ করুন", "তাৎক্ষণিক হাসপাতালে নিন"]
        },
        {
          title: "বিষক্রিয়া",
          description: "বিষাক্ত পদার্থ খেলে করণীয়",
          steps: ["বমি করানোর চেষ্টা করবেন না", "প্রচুর পানি খাওয়ান", "বিষের প্যাকেট সংগ্রহ করুন", "জরুরি চিকিৎসা নিন"]
        },
        {
          title: "সাপের কামড়",
          description: "সর্পদংশনের প্রাথমিক চিকিৎসা",
          steps: ["আতঙ্কিত হবেন না", "কামড়ের স্থান নিচে রাখুন", "টাইট ব্যান্ডেজ করবেন না", "তাড়াতাড়ি হাসপাতালে যান"]
        },
        {
          title: "প্রাণীর কামড়",
          description: "কুকুর বা অন্য প্রাণীর কামড়ে করণীয়",
          steps: ["ক্ষত ভালো করে ধুয়ে দিন", "অ্যান্টিসেপটিক ব্যবহার করুন", "রেবিস টিকা নিন", "ক্ষত ঢেকে রাখুন"]
        }
      ]
    },
    {
      id: "environmental",
      title: "পরিবেশগত জরুরি অবস্থা",
      icon: Thermometer,
      topics: [
        {
          title: "হিট স্ট্রোক / হিট এক্সহশন",
          description: "অতিরিক্ত গরমে অসুস্থতা",
          steps: ["ছায়ায় নিয়ে যান", "কাপড় ভিজিয়ে শরীর মুছুন", "ফ্যান করুন", "পানি খাওয়ান"]
        },
        {
          title: "ডুবে যাওয়া",
          description: "পানিতে ডুবন্ত ব্যক্তির উদ্ধার",
          steps: ["নিরাপদে উদ্ধার করুন", "মুখ থেকে পানি বের করুন", "কৃত্রিম শ্বাস দিন", "CPR করুন প্রয়োজনে"]
        },
        {
          title: "বিদ্যুৎস্পৃষ্ট হওয়া",
          description: "বিদ্যুতের শকে আক্রান্ত হলে",
          steps: ["বিদ্যুৎ বন্ধ করুন", "কাঠের লাঠি দিয়ে সরান", "শ্বাস-প্রশ্বাস দেখুন", "পুড়ে যাওয়া ক্ষতের চিকিৎসা করুন"]
        }
      ]
    },
    {
      id: "specific",
      title: "নির্দিষ্ট সমস্যার সমাধান",
      icon: Eye,
      topics: [
        {
          title: "নাক থেকে রক্ত পড়া",
          description: "নাক দিয়ে রক্তপাত বন্ধ করার উপায়",
          steps: ["মাথা সামনে ঝুঁকান", "নাকের নরম অংশে চাপ দিন", "১০ মিনিট ধরে রাখুন", "বরফ ব্যবহার করুন"]
        },
        {
          title: "চোখে আঘাত বা কেমিক্যাল পড়া",
          description: "চোখে কিছু ঢুকলে বা আঘাত পেলে",
          steps: ["চোখ ঘষবেন না", "পরিষ্কার পানি দিয়ে ধুয়ে দিন", "চোখ বন্ধ রাখুন", "ডাক্তার দেখান"]
        },
        {
          title: "অ্যালার্জি / অ্যানাফাইল্যাক্সিস",
          description: "তীব্র এলার্জির প্রতিক্রিয়া",
          steps: ["অ্যালার্জেন থেকে দূরে রাখুন", "অ্যান্টিহিস্টামিন দিন", "শ্বাসকষ্ট হলে জরুরি সেবা নিন", "এপিপেন ব্যবহার করুন"]
        },
        {
          title: "খিঁচুনি / এপিলেপসি",
          description: "মৃগীরোগের খিঁচুনিতে করণীয়",
          steps: ["নিরাপদ জায়গায় রাখুন", "মুখে কিছু দেবেন না", "পাশ করে শুইয়ে রাখুন", "সময় নোট করুন"]
        }
      ]
    },
    {
      id: "medical",
      title: "সাধারণ স্বাস্থ্য সমস্যা",
      icon: Activity,
      topics: [
        {
          title: "হার্ট অ্যাটাক",
          description: "হৃদরোগের আক্রমণ চিহ্নিত করা",
          steps: ["বুকে ব্যথার লক্ষণ দেখুন", "অ্যাসপিরিন দিন", "আরামদায়ক অবস্থানে বসান", "তাৎক্ষণিক হাসপাতালে নিন"]
        },
        {
          title: "স্ট্রোক",
          description: "মস্তিষ্কের স্ট্রোক শনাক্ত করা",
          steps: ["মুখ, হাত, কথার পরীক্ষা", "একপাশে দুর্বলতা দেখুন", "কথা জড়িয়ে যাওয়া", "জরুরি চিকিৎসা নিন"]
        },
        {
          title: "তীব্র মাথাব্যথা",
          description: "গুরুতর মাথাব্যথার চিকিৎসা",
          steps: ["শান্ত পরিবেশে রাখুন", "ঠাণ্ডা কম্প্রেস দিন", "পর্যাপ্ত পানি খাওয়ান", "প্রয়োজনে ব্যথানাশক দিন"]
        },
        {
          title: "উচ্চ জ্বর",
          description: "তীব্র জ্বরের ব্যবস্থাপনা",
          steps: ["হালকা কাপড় পরান", "স্পঞ্জ বাথ দিন", "প্রচুর তরল খাওয়ান", "প্যারাসিটামল দিন"]
        },
        {
          title: "পেট ব্যথা",
          description: "তীব্র পেটব্যথার প্রাথমিক সেবা",
          steps: ["আরামদায়ক অবস্থানে রাখুন", "গরম সেঁক দিন", "হালকা খাবার দিন", "ব্যথা বাড়লে ডাক্তার দেখান"]
        },
        {
          title: "ডায়রিয়া",
          description: "পাতলা পায়খানার চিকিৎসা",
          steps: ["স্যালাইন খাওয়ান", "তরল বেশি দিন", "BRAT খাবার দিন", "ডিহাইড্রেশনের লক্ষণ দেখুন"]
        },
        {
          title: "পানিশূন্যতা",
          description: "ডিহাইড্রেশনের চিকিৎসা",
          steps: ["অল্প অল্প পানি খাওয়ান", "স্যালাইন দিন", "ছায়ায় রাখুন", "গুরুতর হলে হাসপাতালে নিন"]
        }
      ]
    }
  ];

  return (
    <Layout title="প্রাথমিক চিকিৎসা ট্রেনিং">
      <div className="px-4 space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <p className="text-blue-800 font-bengali font-semibold">
              প্রাথমিক চিকিৎসা জীবন বাঁচায়
            </p>
          </div>
          <p className="text-blue-700 font-bengali text-sm">
            জরুরি অবস্থায় সঠিক প্রাথমিক চিকিৎসা জীবন ও মৃত্যুর মধ্যে পার্থক্য করতে পারে
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {trainingCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <AccordionTrigger className="hover:no-underline">
                    <CardTitle className="flex items-center gap-2 font-bengali">
                      <category.icon className="h-5 w-5 text-primary" />
                      {category.title}
                    </CardTitle>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent>
                  <CardContent className="space-y-4">
                    {category.topics.map((topic, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold font-bengali text-lg mb-2 text-primary">
                          {topic.title}
                        </h4>
                        <p className="text-muted-foreground font-bengali text-sm mb-3">
                          {topic.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h5 className="font-semibold font-bengali text-sm text-foreground">করণীয়:</h5>
                          {topic.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex gap-3 items-start">
                              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </div>
                              <p className="text-sm font-bengali">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-bengali text-center font-semibold">
            ⚠️ গুরুত্বপূর্ণ সতর্কতা
          </p>
          <p className="text-red-700 font-bengali text-center text-sm mt-1">
            প্রাথমিক চিকিৎসা শুধুমাত্র প্রাথমিক সহায়তা। গুরুতর অবস্থায় অবশ্যই পেশাদার চিকিৎসা নিন
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Training;
