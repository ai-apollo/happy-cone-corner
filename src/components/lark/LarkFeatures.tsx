import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart3, FileText, Bell, Shield, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Database,
    title: "データ一元化（Lark Base）",
    description: "SNS、フォーム、会計ツールのデータを集約",
  },
  {
    icon: BarChart3,
    title: "KPIダッシュボード",
    description: "売上・リーチ・エンゲージが自動で1枚に",
  },
  {
    icon: FileText,
    title: "AIレポート（自動要約）",
    description: "\"数字の意味\"を日本語で読める形に",
  },
  {
    icon: Bell,
    title: "リマインド自動通知",
    description: "担当者に適切なタイミングでSlack/メール通知",
  },
  {
    icon: Shield,
    title: "権限と表示の住み分け",
    description: "見せたい人に見せたい情報だけを表示",
  },
  {
    icon: Workflow,
    title: "ワークフロー自動化",
    description: "承認フローや定型業務をコード不要で構築",
  },
];

const LarkFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">FEATURES</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            １スクロールで「できること」一覧
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            仕組みとして回る。AIと設計で実現する６つの機能
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden border-cream-200 hover:border-cream-300 transition-all hover:shadow-lg"
              >
                <div className="bg-gradient-to-br from-cream-100 to-cream-200 p-6 flex items-center justify-center">
                  <div className="bg-chocolate-800 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-cream-50" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg font-bold text-chocolate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-chocolate-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-chocolate-400 text-chocolate-800 hover:bg-cream-100 hover:text-chocolate-900" size="lg">
            1分のUIスクリーンで見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LarkFeatures;
