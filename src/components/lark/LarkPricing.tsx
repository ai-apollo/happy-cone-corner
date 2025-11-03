import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "ライト",
    price: "¥50,000",
    period: "/月",
    description: "小規模チーム向け",
    features: [
      "Lark Base セットアップ",
      "基本ダッシュボード",
      "月次レポート（AI要約）",
      "Slack/メール通知",
    ],
    cta: "ライトプランで始める",
    highlighted: false,
  },
  {
    name: "スタンダード",
    price: "¥120,000",
    period: "/月",
    description: "成長中のチーム向け",
    features: [
      "ライトプランの全機能",
      "カスタムダッシュボード",
      "週次AIレポート",
      "権限管理・表示制御",
      "ワークフロー自動化（3本まで）",
      "月1回のオンライン相談",
    ],
    cta: "スタンダードで相談",
    highlighted: true,
  },
  {
    name: "プロ",
    price: "¥300,000",
    period: "/月〜",
    description: "本格運用・複数事業向け",
    features: [
      "スタンダードの全機能",
      "複数プロジェクト対応",
      "日次AIレポート",
      "高度な権限設計",
      "ワークフロー無制限",
      "専任担当者サポート",
      "カスタム開発対応",
    ],
    cta: "プロプランを相談",
    highlighted: false,
  },
];

const LarkPricing = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">PRICING</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            導入パッケージ（仮）
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            チームの規模と目的に合わせて選べる3つのプラン
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                tier.highlighted
                  ? "border-chocolate-400 shadow-xl scale-105 md:scale-110"
                  : "border-cream-200"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-chocolate-800 text-cream-50 text-center py-2 text-sm font-bold">
                  おすすめ
                </div>
              )}
              <CardHeader className={`text-center ${tier.highlighted ? "pt-12" : "pt-6"}`}>
                <h3 className="font-serif text-2xl font-bold text-chocolate-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-chocolate-600 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-4xl font-bold text-chocolate-900">
                    {tier.price}
                  </span>
                  <span className="text-chocolate-600 text-sm">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cream-500 flex-shrink-0 mt-0.5" />
                      <span className="text-chocolate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    tier.highlighted
                      ? "w-full bg-chocolate-800 text-cream-50 hover:bg-chocolate-900"
                      : "w-full border-chocolate-400 text-chocolate-800 hover:bg-cream-100"
                  }
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-chocolate-600 text-sm">
            ※ 価格は目安です。規模や要件に応じてカスタマイズ可能
          </p>
        </div>
      </div>
    </section>
  );
};

export default LarkPricing;
