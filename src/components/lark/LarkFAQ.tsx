import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Larkを使ったことがなくても大丈夫ですか？",
    answer: "はい、問題ありません。導入時のセットアップから運用まで、丁寧にサポートします。Larkの基本的な使い方から、AI活用の設計まで、段階的に学べる環境を提供しています。",
  },
  {
    question: "既存のツール（Notion、Slack、Googleスプレッドシート）と連携できますか？",
    answer: "はい、可能です。Lark BaseはAPIを通じて様々な外部ツールと連携できます。既存のデータを活かしながら、AIと仕組みを組み合わせた運用を実現します。",
  },
  {
    question: "小規模チーム（3〜5人）でも導入できますか？",
    answer: "もちろんです。ライトプランは小規模チーム向けに設計されています。まずは小さく始めて、成果を実感しながら段階的に拡張していくことをおすすめしています。",
  },
  {
    question: "導入までにどれくらいの期間がかかりますか？",
    answer: "基本的なセットアップは1〜2週間程度です。ヒアリング→設計→構築→テスト運用の流れで進めます。お急ぎの場合はご相談ください。",
  },
  {
    question: "AIレポートはどのように生成されますか？",
    answer: "Lark Baseに集約されたデータをもとに、AIが自動で要約・分析します。単なる数字の羅列ではなく、「なぜこの数字になったか」「次に何をすべきか」まで読み解きます。",
  },
  {
    question: "途中で解約はできますか？",
    answer: "はい、月次契約なのでいつでも解約可能です。ただし、せっかく構築した仕組みを無駄にしないよう、まずは3ヶ月の運用をおすすめしています。",
  },
];

const LarkFAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">FAQ</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            よくある質問
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            導入前に気になるポイントをまとめました
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-cream-200 px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-chocolate-900 hover:text-chocolate-700 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-chocolate-700 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-chocolate-600 mb-4">
            その他のご質問は、お気軽にお問い合わせください
          </p>
        </div>
      </div>
    </section>
  );
};

export default LarkFAQ;
