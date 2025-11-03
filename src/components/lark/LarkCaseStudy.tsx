import { AlertCircle, CheckCircle2 } from "lucide-react";

const beforeItems = [
  "数字はあるけど、意味がわからない",
  "会議のたびに資料作成に追われる",
  "担当者が変わると引き継ぎが大変",
  "PDCAが回らず、同じ失敗を繰り返す",
];

const afterItems = [
  "AIが数字の意味を自動で要約",
  "レポートが自動生成、会議は議論に集中",
  "仕組み化されているので、誰でも使える",
  "振り返り→改善が自然に回り続ける",
];

const LarkCaseStudy = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">CASE STUDY</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            Before / After
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            「数字があるだけ」の状態から、「考える仕組み」へ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Before */}
          <div className="bg-white rounded-xl p-8 border-2 border-chocolate-200 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-chocolate-200 p-3 rounded-lg">
                <AlertCircle className="h-6 w-6 text-chocolate-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-chocolate-900">Before</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chocolate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-chocolate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-cream-100 rounded-lg">
              <p className="text-chocolate-600 text-sm italic">
                「データはあるのに、活かせない...」
              </p>
            </div>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-8 border-2 border-cream-400 shadow-lg relative">
            <div className="absolute -top-3 -right-3 bg-chocolate-800 text-cream-50 px-4 py-1 rounded-full text-sm font-bold">
              導入後
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-chocolate-800 p-3 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-cream-50" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-chocolate-900">After</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cream-500 flex-shrink-0 mt-0.5" />
                  <span className="text-chocolate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white rounded-lg border border-cream-300">
              <p className="text-chocolate-800 text-sm font-medium">
                「仕組みが勝手に回る。成果が積み上がる。」
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-chocolate-700 text-lg max-w-3xl mx-auto">
            <span className="font-bold text-chocolate-900">「データがあるだけ」から「考える仕組み」へ</span>
            <br />
            AIと設計で、チームの成果を次の段階に引き上げます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default LarkCaseStudy;
