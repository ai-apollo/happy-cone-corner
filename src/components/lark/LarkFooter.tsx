const LarkFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-900 text-cream-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-cream-50 mb-4">
              <div className="bg-cream-50 text-chocolate-900 p-2 rounded-lg font-bold text-lg">
                AI²
              </div>
              <span className="font-serif font-bold text-xl">AIと仕組み</span>
            </div>
            <p className="text-cream-300 mb-6">
              AIは「掛け算」で終わらせない。AI ×「　」× DB ＝ 考える仕組みをつくる設計者。
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cream-50 mb-4">コンテンツ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">コンセプト</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">AI²の構造</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">実践事例</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">成果の再現</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cream-50 mb-4">コミュニティ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Discordに参加</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">活用ガイド</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">メンバー限定コンテンツ</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cream-50 mb-4">リソース</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">思考構造の解説</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">データベース設計</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">ブログ</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">更新情報</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-chocolate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-cream-400 text-sm">
          <p>&copy; {currentYear} AI² - AIと仕組み. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream-100 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-cream-100 transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LarkFooter;
