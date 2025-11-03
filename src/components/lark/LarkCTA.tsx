import { Button } from "@/components/ui/button";
import { Calendar, Video, MessageCircle } from "lucide-react";

const LarkCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-100/60 to-white relative overflow-hidden">
      <div className="container text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
          <span className="uppercase tracking-wider text-sm font-medium">GET STARTED</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate-900 mb-6 leading-tight">
          <span className="wavy-decoration inline-block">次の一歩</span>を、<br className="md:hidden" />
          ここから始めませんか
        </h2>

        <p className="text-chocolate-800 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          「データがあるだけ」の状態から、<span className="font-bold">「考える仕組み」</span>へ。<br />
          AIと設計で、あなたのチームを次の段階に引き上げます。
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-cream-200 hover:border-cream-300 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-chocolate-800 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-cream-50" />
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-chocolate-900 mb-2">
              無料オリエン
            </h3>
            <p className="text-chocolate-700 text-sm mb-4">
              30分のヒアリング&amp;提案
            </p>
            <Button className="w-full bg-chocolate-800 text-cream-50 hover:bg-chocolate-900">
              予約する
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-cream-200 hover:border-cream-300 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-chocolate-800 p-3 rounded-full">
                <Video className="h-6 w-6 text-cream-50" />
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-chocolate-900 mb-2">
              5分デモ
            </h3>
            <p className="text-chocolate-700 text-sm mb-4">
              実際の画面で機能を確認
            </p>
            <Button variant="outline" className="w-full border-chocolate-400 text-chocolate-800 hover:bg-cream-100">
              見てみる
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-cream-200 hover:border-cream-300 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-chocolate-800 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-cream-50" />
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-chocolate-900 mb-2">
              Discord参加
            </h3>
            <p className="text-chocolate-700 text-sm mb-4">
              コミュニティで学ぶ
            </p>
            <Button variant="outline" className="w-full border-chocolate-400 text-chocolate-800 hover:bg-cream-100">
              参加する
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl p-8 border border-cream-300">
          <p className="font-serif text-xl text-chocolate-900 mb-2">
            <span className="font-bold">AIは２乗させる。</span>
          </p>
          <p className="text-chocolate-700">
            あなたの仕事を\"次の段階\"へ。
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cream-200 opacity-50"></div>
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 rounded-full bg-chocolate-200 opacity-30"></div>
    </section>
  );
};

export default LarkCTA;
