
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailOpen, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-cream-100/30 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <MessageCircle className="h-5 w-5" />
            <span className="uppercase tracking-wider text-sm font-medium">GET IN TOUCH</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            ご質問、ご意見、イベントのお問い合わせなど、お気軽にご連絡ください。
            48時間以内にスタッフよりご返信いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="lg:col-span-2 border-cream-200">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-chocolate-800">
                      お名前
                    </label>
                    <Input
                      id="name"
                      placeholder="山田 太郎"
                      className="bg-cream-50 border-cream-200 focus:border-chocolate-400 focus:ring-chocolate-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-chocolate-800">
                      メールアドレス
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.com"
                      className="bg-cream-50 border-cream-200 focus:border-chocolate-400 focus:ring-chocolate-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-chocolate-800">
                    件名
                  </label>
                  <Input
                    id="subject"
                    placeholder="お問い合わせの件名"
                    className="bg-cream-50 border-cream-200 focus:border-chocolate-400 focus:ring-chocolate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-chocolate-800">
                    メッセージ
                  </label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    className="min-h-[150px] bg-cream-50 border-cream-200 focus:border-chocolate-400 focus:ring-chocolate-400"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-chocolate-800 text-cream-50 hover:bg-chocolate-900">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="border-cream-200 bg-gradient-to-br from-cream-50 to-cream-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <MailOpen className="h-7 w-7 text-chocolate-700" />
                <h3 className="font-serif text-xl font-bold text-chocolate-900">お問い合わせ先</h3>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">メール</h4>
                  <p className="text-chocolate-700">info@icecream-tengoku.jp</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">電話番号</h4>
                  <p className="text-chocolate-700">03-1234-5678</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">所在地</h4>
                  <p className="text-chocolate-700">
                    〒152-0035<br />
                    東京都目黒区自由が丘2-10-4<br />
                    アイスクリームビル1F
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">営業時間</h4>
                  <p className="text-chocolate-700">
                    平日: 11:00〜21:00<br />
                    土日祝: 10:00〜22:00<br />
                    定休日: 毎週水曜日
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cream-200">
                <h4 className="font-medium text-chocolate-900 mb-2">SNSでもフォローできます</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full border-chocolate-400 text-chocolate-800 hover:bg-cream-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-chocolate-400 text-chocolate-800 hover:bg-cream-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-chocolate-400 text-chocolate-800 hover:bg-cream-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
