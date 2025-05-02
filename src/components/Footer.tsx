
import { IceCreamCone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-chocolate-900 text-cream-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-cream-50 mb-4">
              <IceCreamCone className="h-6 w-6" />
              <span className="font-serif font-bold text-xl">アイスクリーム天国</span>
            </div>
            <p className="text-cream-300 mb-6">
              素材にこだわった手作りアイスクリーム専門店。伝統の製法と新しい味わいの融合をお楽しみください。
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cream-50 mb-4">メニュー</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-cream-300 hover:text-cream-100 transition-colors">定番フレーバー</a></li>
              <li><a href="#menu" className="text-cream-300 hover:text-cream-100 transition-colors">季節限定</a></li>
              <li><a href="#menu" className="text-cream-300 hover:text-cream-100 transition-colors">トッピング</a></li>
              <li><a href="#menu" className="text-cream-300 hover:text-cream-100 transition-colors">セットメニュー</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cream-50 mb-4">店舗情報</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-cream-300 hover:text-cream-100 transition-colors">会社概要</a></li>
              <li><a href="#about" className="text-cream-300 hover:text-cream-100 transition-colors">アクセス</a></li>
              <li><a href="#about" className="text-cream-300 hover:text-cream-100 transition-colors">営業時間</a></li>
              <li><a href="#contact" className="text-cream-300 hover:text-cream-100 transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cream-50 mb-4">フォロー</h3>
            <div className="flex gap-4">
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
            
            <div className="mt-6">
              <h3 className="font-serif font-bold text-cream-50 mb-2">ニュースレター登録</h3>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="メールアドレス" 
                  className="bg-chocolate-800 text-cream-100 px-4 py-2 rounded-l-md border-r-0 border border-chocolate-700 focus:outline-none focus:border-cream-400 flex-grow"
                />
                <button className="bg-cream-500 hover:bg-cream-400 text-chocolate-900 font-medium px-4 py-2 rounded-r-md transition-colors">
                  登録
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-chocolate-800 mt-10 pt-6 text-center text-cream-400 text-sm">
          <p>&copy; {currentYear} アイスクリーム天国 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
