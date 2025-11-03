import { Target, Lightbulb, Repeat } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "ゴールから逆算",
    description: "「何を達成したいか」が先。そこからツールと仕組みを設計します。",
  },
  {
    icon: Lightbulb,
    title: "AIに意味を与える",
    description: "数字を並べるだけでなく、「なぜ伸びたか」までAIが読み解きます。",
  },
  {
    icon: Repeat,
    title: "仕組みとして回す",
    description: "1回の改善ではなく、継続的に改善が回り続ける設計を目指します。",
  },
];

const LarkPhilosophy = () => {
  return (
    <section className="py-16 md:py-24 bg-pattern">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">PHILOSOPHY</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-6">
            ツールの前に、設定
          </h2>
          <p className="text-chocolate-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            AIをただ使うのではなく、<span className="font-bold">「どんなゴールに向かわせるか」</span>を最初に設計する。
            <br />
            それが、成果を出すための最短ルートです。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-cream-50 rounded-xl p-6 border border-cream-200 hover:border-cream-300 transition-all hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-chocolate-800 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-cream-50" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-chocolate-900 text-center mb-3">
                  {principle.title}
                </h3>
                <p className="text-chocolate-700 text-center text-sm">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl p-8 md:p-10 border border-cream-300">
          <blockquote className="text-center">
            <p className="font-serif text-xl md:text-2xl text-chocolate-900 mb-4 leading-relaxed">
              「ツールは誰でも使える。<br className="md:hidden" />
              でも、<span className="font-bold">設定ができる人</span>が成果を出す。」
            </p>
            <footer className="text-chocolate-600 text-sm">
              ── AIと仕組みで成果を加速させるために
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default LarkPhilosophy;
