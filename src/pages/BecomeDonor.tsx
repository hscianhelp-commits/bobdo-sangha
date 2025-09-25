import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserPlus, CheckCircle, AlertTriangle, Heart, Clock, FileText } from "lucide-react";

const BecomeDonor = () => {
  const openRegistration = () => {
    window.location.href = "mailto:bobdo5800@gmail.com?subject=রক্তদাতা নিবন্ধন&body=নিচের তথ্যগুলো পূরণ করুন:%0D%0A%0D%0A1. নাম:%0D%0A2. মোবাইল নম্বর:%0D%0A3. ইমেইল:%0D%0A4. বয়স:%0D%0A5. রক্তের গ্রুপ:%0D%0A6. জেলা:%0D%0A7. সর্বশেষ রক্তদানের তারিখ (যদি থাকে):%0D%0A%0D%0A";
  };

  return (
    <Layout title="রক্তদাতা হোন">
      <div className="px-4 space-y-6">
        {/* Registration Button */}
        <Card className="border-primary/20 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-6 text-center">
            <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold font-bengali mb-4">
              আজই রক্তদাতা হিসেবে নিবন্ধন করুন
            </h3>
            <Button
              onClick={openRegistration}
              className="w-full btn-ripple bg-primary hover:bg-primary-hover text-primary-foreground text-lg py-4"
            >
              নিবন্ধন করুন
            </Button>
          </CardContent>
        </Card>

        {/* Information Cards */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="requirements">
            <Card>
              <CardHeader>
                <AccordionTrigger className="hover:no-underline">
                  <CardTitle className="flex items-center gap-2 font-bengali">
                    <CheckCircle className="h-5 w-5 text-success" />
                    প্রয়োজনীয় শর্ত
                  </CardTitle>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <p className="font-bengali">বয়স ১৮-৬৫ বছর</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <p className="font-bengali">ওজন কমপক্ষে ৫০ কেজি</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <p className="font-bengali">সুস্থ ও স্বাভাবিক স্বাস্থ্য</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <p className="font-bengali">হিমোগ্লোবিনের মাত্রা স্বাভাবিক</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <p className="font-bengali">কোনো সংক্রামক রোগ নেই</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <p className="font-bengali">গর্ভবতী নন (মহিলাদের ক্ষেত্রে)</p>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="precautions">
            <Card>
              <CardHeader>
                <AccordionTrigger className="hover:no-underline">
                  <CardTitle className="flex items-center gap-2 font-bengali">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    সতর্কতা
                  </CardTitle>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="font-bengali">রক্তদানের ৩ মাস আগে পর্যন্ত অপেক্ষা করুন</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="font-bengali">রক্তদানের আগে পর্যাপ্ত খাবার খান</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="font-bengali">পানি বেশি পরিমাণে পান করুন</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="font-bengali">মদ্যপান বা ধূমপান থেকে বিরত থাকুন</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="font-bengali">জ্বর বা অসুস্থতার সময় রক্তদান করবেন না</p>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="benefits">
            <Card>
              <CardHeader>
                <AccordionTrigger className="hover:no-underline">
                  <CardTitle className="flex items-center gap-2 font-bengali">
                    <Heart className="h-5 w-5 text-primary" />
                    রক্তদানের উপকারিতা
                  </CardTitle>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-bengali">হৃদযন্ত্রের স্বাস্থ্য ভালো থাকে</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-bengali">রক্তে আয়রনের মাত্রা নিয়ন্ত্রণে থাকে</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-bengali">ক্যান্সারের ঝুঁকি কমে</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-bengali">নতুন রক্তকণিকা তৈরি হয়</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-bengali">মানসিক প্রশান্তি পাওয়া যায়</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-bengali">একটি জীবন বাঁচানোর সন্তুষ্টি</p>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="compatibility">
            <Card>
              <CardHeader>
                <AccordionTrigger className="hover:no-underline">
                  <CardTitle className="flex items-center gap-2 font-bengali">
                    <FileText className="h-5 w-5 text-primary" />
                    রক্তের গ্রুপ সামঞ্জস্যতা
                  </CardTitle>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">সার্বজনীন দাতা:</h4>
                        <p className="font-bengali">O- (সবাইকে দিতে পারেন)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">সার্বজনীন গ্রহণকারী:</h4>
                        <p className="font-bengali">AB+ (সবার থেকে নিতে পারেন)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="process">
            <Card>
              <CardHeader>
                <AccordionTrigger className="hover:no-underline">
                  <CardTitle className="flex items-center gap-2 font-bengali">
                    <Clock className="h-5 w-5 text-primary" />
                    রক্তদানের প্রক্রিয়া
                  </CardTitle>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold font-bengali">নিবন্ধন</h4>
                      <p className="text-sm text-muted-foreground font-bengali">প্রয়োজনীয় তথ্য পূরণ</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold font-bengali">স্বাস্থ্য পরীক্ষা</h4>
                      <p className="text-sm text-muted-foreground font-bengali">প্রাথমিক স্বাস্থ্য যাচাই</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold font-bengali">রক্তদান</h4>
                      <p className="text-sm text-muted-foreground font-bengali">১০-১৫ মিনিট সময় লাগে</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold font-bengali">বিশ্রাম ও খাবার</h4>
                      <p className="text-sm text-muted-foreground font-bengali">১৫ মিনিট বিশ্রাম নিন</p>
                    </div>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default BecomeDonor;
