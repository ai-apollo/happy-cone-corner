
import { MapPin, PhoneCall, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556710986-4a70434a76c0?q=80&w=600&auto=format&fit=crop" 
                  alt="店舗外観" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop" 
                  alt="職人の手作り" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=600&auto=format&fit=crop" 
                  alt="アイスクリーム作り" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop" 
                  alt="店内の様子" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
              <span className="uppercase tracking-wider text-sm font-medium">OUR STORY</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-6">
              こだわりの手作りアイスクリーム
            </h2>
            <p className="text-chocolate-700 mb-6">
              アイスクリーム天国は、2010年に東京・自由が丘で小さな店舗としてスタートしました。
              素材へのこだわりと伝統的な製法を守りながらも、新しい味わいを追求し続けています。
              厳選された食材のみを使用し、すべて店内で手作りされた本物のアイスクリームをご堪能いただけます。
            </p>
            <p className="text-chocolate-700 mb-6">
              また、環境に配慮した取り組みも行っており、容器はすべて生分解性のものを使用。
              地域の生産者との強いつながりを大切にし、季節ごとの新鮮な素材を活かしたフレーバーを提供しています。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-cream-200 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-chocolate-700" />
                </div>
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">所在地</h4>
                  <p className="text-chocolate-700 text-sm">東京都目黒区自由が丘2-10-4 アイスクリームビル1F</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-cream-200 p-2 rounded-full">
                  <PhoneCall className="h-5 w-5 text-chocolate-700" />
                </div>
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">お問い合わせ</h4>
                  <p className="text-chocolate-700 text-sm">03-1234-5678</p>
                  <p className="text-chocolate-700 text-sm">info@icecream-tengoku.jp</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="mt-1 bg-cream-200 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-chocolate-700" />
                </div>
                <div>
                  <h4 className="font-medium text-chocolate-900 mb-1">営業時間</h4>
                  <p className="text-chocolate-700 text-sm">平日: 11:00〜21:00</p>
                  <p className="text-chocolate-700 text-sm">土日祝: 10:00〜22:00</p>
                  <p className="text-chocolate-700 text-sm">定休日: 毎週水曜日</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-chocolate-800 text-cream-50 hover:bg-chocolate-900">
              店舗情報をもっと見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
