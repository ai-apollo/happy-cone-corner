
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-cream-100/60 to-cream-50 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-1/2 z-10 fade-in">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate-900 leading-tight mb-4">
            <span className="wavy-decoration inline-block mb-2">心を満たす</span><br/>
            贅沢なアイスクリーム体験
          </h1>
          <p className="text-chocolate-800 text-lg md:text-xl mb-8 max-w-lg">
            厳選された素材と伝統的な製法で作られた、
            口に広がる極上の味わい。季節限定の特別なフレーバーもお楽しみください。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-chocolate-800 text-cream-50 hover:bg-chocolate-900">
              メニューを見る
            </Button>
            <Button variant="outline" className="border-chocolate-400 text-chocolate-800 hover:bg-cream-100 hover:text-chocolate-900">
              店舗を探す
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float">
            <img
              src="/lovable-uploads/20e4ccec-92f2-40f8-98ac-12a006e9d12c.png"
              alt="チョコレートアイスクリーム"
              className="w-full h-full object-contain rounded-full shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-cream-400 text-chocolate-900 font-serif font-bold text-xl py-2 px-4 rounded-full shadow-lg animate-pulse">
              新登場
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cream-200 opacity-50"></div>
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 rounded-full bg-chocolate-200 opacity-30"></div>
      <div className="hidden md:block absolute bottom-40 right-10 w-48 h-48 rounded-full bg-cream-300 opacity-40"></div>

      <div className="scroll-hint hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;
