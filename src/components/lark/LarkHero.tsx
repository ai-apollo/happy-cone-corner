import { Button } from "@/components/ui/button";
import CharacterIllustration from "./CharacterIllustration";

const LarkHero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-cream-100/60 to-cream-50 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-1/2 z-10 fade-in">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate-900 leading-tight mb-4">
            <span className="wavy-decoration inline-block mb-2">AIは２乗させる。</span><br/>
            あなたの仕事を"次の段階"へ。
          </h1>
          <p className="text-chocolate-800 text-lg md:text-xl mb-6 max-w-lg">
            SNSと何かの掛け算に、AIを一段重ねる＝<span className="font-bold">AI²</span>。<br/>
            数字の意味づけ、次の一手、仕組み化まで一気通貫で。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-chocolate-800 text-cream-50 hover:bg-chocolate-900" size="lg">
              無料オリエンを予約
            </Button>
            <Button variant="outline" className="border-chocolate-400 text-chocolate-800 hover:bg-cream-100 hover:text-chocolate-900" size="lg">
              5分デモを見る
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float">
            <div className="w-full h-full bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl shadow-2xl p-8">
              <CharacterIllustration />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-400 text-white font-serif font-bold text-xl py-2 px-4 rounded-full shadow-lg animate-pulse">
              AI²
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cream-200 opacity-50"></div>
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 rounded-full bg-chocolate-200 opacity-30"></div>
      <div className="hidden md:block absolute bottom-40 right-10 w-48 h-48 rounded-full bg-cream-300 opacity-40"></div>
    </section>
  );
};

export default LarkHero;
