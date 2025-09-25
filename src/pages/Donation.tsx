import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Smartphone, CreditCard, Info, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Donation = () => {
  const paymentNumber = "01722528164";

  const copyNumber = () => {
    navigator.clipboard.writeText(paymentNumber);
    toast({
      title: "কপি হয়েছে!",
      description: "নম্বরটি কপি হয়েছে। এখন আপনার মোবাইল ব্যাংকিং অ্যাপে গিয়ে টাকা পাঠান।",
    });
  };

  const openDonationEmail = () => {
    window.location.href = "mailto:bobdo5800@gmail.com?subject=আর্থিক অনুদান&body=নিচের তথ্যগুলো পূরণ করুন:%0D%0A%0D%0A1. নাম:%0D%0A2. মোবাইল নম্বর:%0D%0A3. অনুদানের পরিমাণ:%0D%0A4. পেমেন্ট মাধ্যম (বিকাশ/নগদ/রকেট):%0D%0A5. ট্রানজেকশন আইডি:%0D%0A6. রেফারেন্স (যদি থাকে):%0D%0A%0D%0A";
  };

  return (
    <Layout title="আর্থিক অনুদান">
      <div className="px-4 space-y-6">
        {/* Header Message */}
        <Card className="border-success/20 bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6 text-center">
            <CreditCard className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-lg font-semibold font-bengali mb-2">
              আপনার অনুদান আমাদের সেবার শক্তি
            </h3>
            <p className="text-muted-foreground font-bengali text-sm">
              প্রতিটি টাকা ব্যবহৃত হয় মানুষের সেবায়
            </p>
          </CardContent>
        </Card>

        {/* Mobile Banking Numbers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Smartphone className="h-5 w-5 text-primary" />
              মোবাইল ব্যাংকিং
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Bkash */}
            <div className="flex items-center justify-between p-4 bg-pink-50 border border-pink-200 rounded-lg">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-pink-600 text-white rounded text-xs flex items-center justify-center font-bold">
                    bK
                  </div>
                  <span className="font-semibold font-bengali">বিকাশ</span>
                </div>
                <p className="text-lg font-bold text-pink-600">{paymentNumber}</p>
                <p className="text-xs text-muted-foreground font-bengali">Personal</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyNumber}
                className="text-pink-600 border-pink-600 hover:bg-pink-50"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            {/* Nagad */}
            <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded text-xs flex items-center justify-center font-bold">
                    N
                  </div>
                  <span className="font-semibold font-bengali">নগদ</span>
                </div>
                <p className="text-lg font-bold text-orange-600">{paymentNumber}</p>
                <p className="text-xs text-muted-foreground font-bengali">Personal</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyNumber}
                className="text-orange-600 border-orange-600 hover:bg-orange-50"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            {/* Rocket */}
            <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded text-xs flex items-center justify-center font-bold">
                    R
                  </div>
                  <span className="font-semibold font-bengali">রকেট</span>
                </div>
                <p className="text-lg font-bold text-purple-600">{paymentNumber}</p>
                <p className="text-xs text-muted-foreground font-bengali">Personal</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyNumber}
                className="text-purple-600 border-purple-600 hover:bg-purple-50"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Online Donation */}
        <Card>
          <CardContent className="p-6 text-center">
            <Button
              onClick={openDonationEmail}
              className="w-full btn-ripple bg-primary hover:bg-primary-hover text-primary-foreground text-lg py-4"
            >
              <Mail className="h-5 w-5 mr-2" />
              অনুদান সম্পর্কে জানান
            </Button>
          </CardContent>
        </Card>

        {/* Payment Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Info className="h-5 w-5 text-primary" />
              পেমেন্ট নির্দেশাবলী
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 font-bengali mb-2">বিকাশ পেমেন্ট:</h4>
              <ol className="text-sm text-blue-700 font-bengali space-y-1 list-decimal list-inside">
                <li>*247# ডায়াল করুন</li>
                <li>"Send Money" সিলেক্ট করুন</li>
                <li>নম্বর: {paymentNumber}</li>
                <li>পরিমাণ লিখুন</li>
                <li>রেফারেন্স: "BOBDO Donation"</li>
                <li>পিন দিয়ে কনফার্ম করুন</li>
              </ol>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 font-bengali mb-2">নগদ পেমেন্ট:</h4>
              <ol className="text-sm text-orange-700 font-bengali space-y-1 list-decimal list-inside">
                <li>*167# ডায়াল করুন</li>
                <li>"Send Money" সিলেক্ট করুন</li>
                <li>নম্বর: {paymentNumber}</li>
                <li>পরিমাণ লিখুন</li>
                <li>রেফারেন্স: "BOBDO"</li>
                <li>পিন দিয়ে কনফার্ম করুন</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 font-bengali mb-2">রকেট পেমেন্ট:</h4>
              <ol className="text-sm text-purple-700 font-bengali space-y-1 list-decimal list-inside">
                <li>*322# ডায়াল করুন</li>
                <li>"Send Money" সিলেক্ট করুন</li>
                <li>নম্বর: {paymentNumber}</li>
                <li>পরিমাণ লিখুন</li>
                <li>রেফারেন্স: "BOBDO"</li>
                <li>পিন দিয়ে কনফার্ম করুন</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 font-bengali text-center font-semibold">
            💡 গুরুত্বপূর্ণ তথ্য
          </p>
          <p className="text-yellow-700 font-bengali text-center text-sm mt-1">
            পেমেন্ট করার পর অনুগ্রহ করে আমাদের জানান যাতে আমরা আপনাকে ধন্যবাদ জানাতে পারি
          </p>
        </div>

        {/* Usage Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-bengali text-center">
              আপনার অনুদানের ব্যবহার
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm">রক্তদান ক্যাম্প আয়োজন</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm">জরুরি রোগী পরিবহন খরচ</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm">সচেতনতামূলক কার্যক্রম</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm">দরিদ্র রোগীদের সহায়তা</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm">অ্যাপ ও ওয়েবসাইট রক্ষণাবেক্ষণ</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Donation;
