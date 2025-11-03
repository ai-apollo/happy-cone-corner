const LarkManagementScreen = () => {
  return (
    <section className="py-16 md:py-24 bg-pattern">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-chocolate-500 mb-2">
            <span className="uppercase tracking-wider text-sm font-medium">COMMUNITY</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-4">
            Discord：AIと仕組み
          </h2>
          <p className="text-chocolate-700 max-w-2xl mx-auto">
            メンバー限定のAI活用と効率化実践サイト
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-cream-200">
          {/* 画像プレースホルダー - 実際の画像をここに配置 */}
          <div className="aspect-video bg-gradient-to-br from-cream-100 to-cream-200">
            <img
              src="/lovable-uploads/management-screen.png"
              alt="Discordコミュニティのイメージ"
              className="w-full h-full object-cover"
              onError={(e) => {
                // 画像が見つからない場合のフォールバック
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.placeholder-content')) {
                  const placeholder = document.createElement('div');
                  placeholder.className = 'placeholder-content flex items-center justify-center h-full';
                  placeholder.innerHTML = `
                    <div class="text-center p-8">
                      <div class="text-6xl mb-4">💬</div>
                      <p class="text-chocolate-700 text-lg font-medium">Discordコミュニティ</p>
                      <p class="text-chocolate-600 text-sm mt-2">AI活用の実践と成果を共有</p>
                    </div>
                  `;
                  parent.appendChild(placeholder);
                }
              }}
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-chocolate-700 text-lg leading-relaxed max-w-3xl mx-auto">
            メンバー限定で<span className="font-bold text-chocolate-900">実践ノウハウや活用事例</span>を共有しています。
          </p>
        </div>

        {/* 特徴ハイライト */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream-200 text-chocolate-700 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-chocolate-800 font-medium">体系的な学習</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream-200 text-chocolate-700 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="text-chocolate-800 font-medium">メンバー同士の交流</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream-200 text-chocolate-700 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-chocolate-800 font-medium">実践事例の共有</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LarkManagementScreen;
