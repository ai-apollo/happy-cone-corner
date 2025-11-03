
import { CakeSlice, IceCreamCone, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const flavors = [
  {
    id: 1,
    name: "リッチチョコレート",
    description: "厳選されたカカオ豆から作られた贅沢な味わい。濃厚でなめらかな口当たりが特徴です。",
    image: "/lovable-uploads/20e4ccec-92f2-40f8-98ac-12a006e9d12c.png",
    popular: true,
    price: "¥480"
  },
  {
    id: 2,
    name: "バニラビーンズ",
    description: "マダガスカル産の最高級バニラビーンズを使用。シンプルながらも芳醇な香りが広がります。",
    image: "https://images.unsplash.com/photo-1563589173312-476d8c36b242?q=80&w=400&auto=format&fit=crop",
    popular: true,
    price: "¥450"
  },
  {
    id: 3,
    name: "抹茶あずき",
    description: "京都宇治の上質な抹茶と北海道産の小豆を使用。和の風味が楽しめる一品です。",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=400&auto=format&fit=crop",
    popular: false,
    price: "¥520"
  },
  {
    id: 4,
    name: "いちごミルク",
    description: "旬の苺をたっぷり使用した、甘酸っぱくてフレッシュな味わい。クリーミーなミルクとの相性抜群。",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=400&auto=format&fit=crop",
    popular: true,
    price: "¥480"
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-pattern">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <IceCreamCone className="h-5 w-5" />
            <span className="uppercase tracking-wider text-sm font-medium">OUR MENU</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            人気のフレーバー
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            季節ごとに変わる特別なフレーバーや、いつでも楽しめる定番の味まで。
            すべて手作りで、素材の良さを活かした味わい深いアイスクリームをご用意しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {flavors.map((flavor) => (
            <Card key={flavor.id} className="overflow-hidden border-cream-200 hover:border-cream-300 transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover image-hover-effect"
                />
                {flavor.popular && (
                  <Badge className="absolute top-2 right-2 bg-cream-500">
                    <Star className="h-3 w-3 mr-1 fill-current" /> 人気
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-xl font-bold text-chocolate-800 mb-2">{flavor.name}</h3>
                <p className="text-chocolate-600 text-sm mb-3">{flavor.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-chocolate-900">{flavor.price}</span>
                  <span className="text-cream-500 hover:text-cream-600 text-sm font-medium cursor-pointer">
                    詳細を見る →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-4">
            <CakeSlice className="h-5 w-5" />
            <span className="uppercase tracking-wider text-sm font-medium">SPECIAL OFFERS</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-chocolate-800 mb-6">
            セット・コンボメニュー
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 p-6 rounded-xl border border-cream-200 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-chocolate-800 mb-2">ダブルスクープセット</h4>
              <p className="text-chocolate-700 text-sm mb-3">お好きなフレーバー2種類とトッピング1種類</p>
              <p className="font-bold text-chocolate-900">¥780</p>
            </div>
            
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 p-6 rounded-xl border border-cream-200 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-chocolate-800 mb-2">ファミリーパック</h4>
              <p className="text-chocolate-700 text-sm mb-3">お好きなフレーバー4種類（大容量）</p>
              <p className="font-bold text-chocolate-900">¥1,580</p>
            </div>
            
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 p-6 rounded-xl border border-cream-200 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-chocolate-800 mb-2">スイーツコンボ</h4>
              <p className="text-chocolate-700 text-sm mb-3">アイスクリーム1種類とケーキ1個のセット</p>
              <p className="font-bold text-chocolate-900">¥850</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
