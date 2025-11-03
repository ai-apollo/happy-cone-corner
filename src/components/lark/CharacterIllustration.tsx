const CharacterIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 背景の円 */}
        <circle cx="100" cy="120" r="90" fill="#FEF9F4" opacity="0.5" />

        {/* 体 */}
        <rect x="70" y="140" width="60" height="80" rx="8" fill="#1e293b" />

        {/* 頭 */}
        <circle cx="100" cy="100" r="45" fill="#FFE4C4" />

        {/* 髪の毛（オレンジ色のメッシーヘア） */}
        <path
          d="M 60 85 Q 55 70 60 60 Q 70 50 85 55 Q 90 45 100 42 Q 110 45 115 55 Q 130 50 140 60 Q 145 70 140 85 Z"
          fill="#FF8C42"
        />

        {/* 左耳（キツネ耳） */}
        <path
          d="M 65 75 L 55 50 L 70 65 Z"
          fill="#FF8C42"
        />
        <path
          d="M 63 68 L 58 55 L 68 65 Z"
          fill="#FFD1A3"
        />

        {/* 右耳（キツネ耳） */}
        <path
          d="M 135 75 L 145 50 L 130 65 Z"
          fill="#FF8C42"
        />
        <path
          d="M 137 68 L 142 55 L 132 65 Z"
          fill="#FFD1A3"
        />

        {/* 目 */}
        <ellipse cx="85" cy="95" rx="8" ry="12" fill="#D97635" />
        <ellipse cx="115" cy="95" rx="8" ry="12" fill="#D97635" />
        <circle cx="86" cy="93" r="3" fill="#fff" />
        <circle cx="116" cy="93" r="3" fill="#fff" />

        {/* 眉毛 */}
        <path d="M 78 85 Q 85 83 92 85" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 108 85 Q 115 83 122 85" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* 口（自信のある表情） */}
        <path d="M 90 110 Q 100 115 110 110" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* AI²のシンボル */}
        <g transform="translate(85, 155)">
          <text
            x="0"
            y="0"
            fontSize="16"
            fontWeight="bold"
            fill="#FEF9F4"
            fontFamily="serif"
          >
            AI²
          </text>
        </g>
      </svg>

      {/* 装飾的な要素 */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 opacity-20 animate-pulse" />
      <div className="absolute bottom-8 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default CharacterIllustration;
