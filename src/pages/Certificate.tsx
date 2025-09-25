import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, FileText, Clock, CheckCircle } from "lucide-react";

const Certificate = () => {
  const openRegistration = () => {
    window.open("https://forms.gle/jKnLBJyqedDBo4q37", "_blank");
  };

  const certificateTypes = [
    {
      name: "রক্তদাতা সার্টিফিকেট",
      description: "নিয়মিত রক্তদানের জন্য সম্মাননা সার্টিফিকেট",
      requirements: ["কমপক্ষে ৫ বার রক্তদান", "BOBDO সদস্যপদ", "সক্রিয় অংশগ্রহণ"],
      benefits: ["সামাজিক স্বীকৃতি", "বিশেষ সুবিধা", "অগ্রাধিকার সেবা"]
    },
    {
      name: "স্বেচ্ছাসেবক সার্টিফিকেট",
      description: "মানব সেবায় অবদানের জন্য সম্মাননা",
      requirements: ["৬ মাস সক্রিয় সেবা", "প্রশিক্ষণ সম্পন্ন", "টিম লিডারের সুপারিশ"],
      benefits: ["চাকরিতে অগ্রাধিকার", "দক্ষতার প্রমাণ", "নেটওয়ার্কিং সুবিধা"]
    },
    {
      name: "প্রাথমিক চিকিৎসা সার্টিফিকেট",
      description: "প্রাথমিক চিকিৎসায় দক্ষতার সনদ",
      requirements: ["তত্ত্বীয় পরীক্ষায় পাস", "ব্যবহারিক প্রশিক্ষণ", "মূল্যায়ন সম্পন্ন"],
      benefits: ["জরুরি সেবায় দক্ষতা", "কর্মক্ষেত্রে মূল্যবান", "আত্মবিশ্বাস বৃদ্ধি"]
    },
    {
      name: "লাইফ সেভার এওয়ার্ড",
      description: "জীবন রক্ষায় বিশেষ অবদানের জন্য",
      requirements: ["জরুরি মুহূর্তে সহায়তা", "জীবন রক্ষায় ভূমিকা", "সমাজসেবামূলক কাজ"],
      benefits: ["বিশেষ সম্মাননা", "মিডিয়া কভারেজ", "পুরস্কার প্রাপ্তি"]
    }
  ];

  return (
    <Layout title="সার্টিফিকেট">
      <div className="px-4 space-y-6">
        {/* Application Button */}
        <Card className="border-success/20 bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-6 text-center">
            <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold font-bengali mb-4">
              আপনার অবদানের স্বীকৃতি পান
            </h3>
            <Button
              onClick={openRegistration}
              className="w-full btn-ripple bg-yellow-600 hover:bg-yellow-700 text-white text-lg py-4"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              সার্টিফিকেটের জন্য আবেদন
            </Button>
          </CardContent>
        </Card>

        {/* Certificate Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-bengali text-center">
            সার্টিফিকেটের ধরন
          </h2>
          
          {certificateTypes.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-bengali">
                  <Award className="h-5 w-5 text-yellow-600" />
                  {cert.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-bengali text-sm">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-semibold font-bengali mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    প্রয়োজনীয় শর্ত:
                  </h4>
                  <div className="space-y-1">
                    {cert.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-bengali">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold font-bengali mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    সুবিধাসমূহ:
                  </h4>
                  <div className="space-y-1">
                    {cert.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-bengali">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Clock className="h-5 w-5 text-primary" />
              আবেদন প্রক্রিয়া
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold font-bengali">আবেদন ফর্ম পূরণ</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  উপরের বাটন চেপে আবেদন ফর্ম পূরণ করুন
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold font-bengali">কাগজপত্র জমা দিন</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  প্রয়োজনীয় ডকুমেন্টস ও প্রমাণপত্র সংযুক্ত করুন
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold font-bengali">যাচাই প্রক্রিয়া</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  আমাদের টিম আপনার তথ্য যাচাই করবে (৭-১৪ দিন)
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold font-bengali">সার্টিফিকেট প্রাপ্তি</h4>
                <p className="text-sm text-muted-foreground font-bengali">
                  অনুমোদনের পর ডিজিটাল ও প্রিন্ট কপি পাবেন
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 font-bengali text-center font-semibold">
            🏆 প্রতিটি সার্টিফিকেট আপনার অবদানের স্বীকৃতি
          </p>
          <p className="text-yellow-700 font-bengali text-center text-sm mt-1">
            সমাজসেবায় আপনার অংশগ্রহণ অন্যদের অনুপ্রাণিত করবে
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
