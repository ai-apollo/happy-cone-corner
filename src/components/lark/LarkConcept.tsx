const LarkConcept = () => {
  return (
    <section className="py-16 md:py-24 bg-pattern">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate-900 mb-6">
            AIは２乗させる ── （SNS × ○○）× AI = AI²
          </h2>
          <p className="text-chocolate-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            「SNS × ○○」の掛け算で上げてきた成果に、AIを一段掛ける。<br />
            ただ投稿数を増やすのではなく、<span className="font-bold">なぜ伸びたか／次にどう活かすか</span>まで"仕組みとして回り出す"状態へ。
          </p>
        </div>

        {/* 3つのポイント */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-6 border border-cream-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-chocolate-800 text-cream-50 p-2 rounded-lg font-bold">1</div>
              <h3 className="font-serif text-lg font-bold text-chocolate-900 mt-1">
                可視化だけで終わらない
              </h3>
            </div>
            <p className="text-chocolate-700">
              AIが意味を与え、行動に落とす。
            </p>
          </div>

          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-6 border border-cream-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-chocolate-800 text-cream-50 p-2 rounded-lg font-bold">2</div>
              <h3 className="font-serif text-lg font-bold text-chocolate-900 mt-1">
                設定が先、ツールは後
              </h3>
            </div>
            <p className="text-chocolate-700">
              ゴールから逆算して設計。
            </p>
          </div>

          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-6 border border-cream-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-chocolate-800 text-cream-50 p-2 rounded-lg font-bold">3</div>
              <h3 className="font-serif text-lg font-bold text-chocolate-900 mt-1">
                小さく始めて拡張
              </h3>
            </div>
            <p className="text-chocolate-700">
              現場に合わせて無理なく定着。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LarkConcept;
