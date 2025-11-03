import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "データを繋ぐ",
    description: "SNS・フォーム・売上データをLark Baseに集約",
  },
  {
    number: "2",
    title: "AIが読み解く",
    description: "数字の意味と傾向を自動で要約・レポート化",
  },
  {
    number: "3",
    title: "通知とリマインド",
    description: "担当者に適切なタイミングで自動通知",
  },
  {
    number: "4",
    title: "次のアクションへ",
    description: "振り返りから改善まで、仕組みが回り続ける",
  },
];

const LarkDemo = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">DEMO</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            5分デモで体感する
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            データ → AI → アクション の流れを実際の画面で確認
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cream-300 -translate-x-1/2"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-cream-200 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-xl font-bold text-chocolate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-chocolate-700">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-chocolate-800 text-cream-50 flex items-center justify-center font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-chocolate-800 text-cream-50 hover:bg-chocolate-900" size="lg">
            5分デモを見る
          </Button>
          <p className="text-chocolate-600 text-sm mt-4">
            録画デモまたはライブ操作でご確認いただけます
          </p>
        </div>
      </div>
    </section>
  );
};

export default LarkDemo;
