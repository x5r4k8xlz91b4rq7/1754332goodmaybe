'use client';

type Variant = 'trading-card-box' | 'trading-card-pack' | 'booster-box' | 'sports-card-box' | 'blind-box-case' | 'plush' | 'hoodie' | 'jersey' | 'sneaker' | 'watch';

const variants: Record<Variant, { bg: string; accent: string; label: string }> = {
  'trading-card-box': { bg: '#f5f3ff', accent: '#5b2df5', label: 'Sealed Box' },
  'trading-card-pack': { bg: '#f5f3ff', accent: '#5b2df5', label: 'Card Pack' },
  'booster-box': { bg: '#eff6ff', accent: '#2563eb', label: 'Booster Box' },
  'sports-card-box': { bg: '#fff7ed', accent: '#ea580c', label: 'Hobby Box' },
  'blind-box-case': { bg: '#fffbeb', accent: '#d97706', label: 'Sealed Case' },
  'plush': { bg: '#fdf2f8', accent: '#db2777', label: 'Plush' },
  'hoodie': { bg: '#f0f9ff', accent: '#0284c7', label: 'Apparel' },
  'jersey': { bg: '#f0fdf4', accent: '#16a34a', label: 'Jersey' },
  'sneaker': { bg: '#eff6ff', accent: '#2563eb', label: 'Sneaker' },
  'watch': { bg: '#f8fafc', accent: '#475569', label: 'Watch' },
};

export default function PlaceholderImage({
  variant,
  brand,
  name,
  className,
}: {
  variant: string;
  brand?: string;
  name?: string;
  className?: string;
}) {
  const v = (variants[variant as Variant] ?? variants['trading-card-box']);

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className ?? ''}`}
      style={{ background: v.bg }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(${v.accent}11 1px, transparent 1px), linear-gradient(90deg, ${v.accent}11 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute w-48 h-48 rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${v.accent}40 0%, transparent 70%)` }}
      />

      {/* Illustration */}
      <svg viewBox="0 0 200 200" className="relative w-3/5 h-3/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {renderIllustration(variant as Variant, v.accent)}
      </svg>

      {/* Labels */}
      {brand && (
        <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 truncate">
          {brand}
        </p>
      )}
      {name && (
        <p className="absolute top-3 left-0 right-0 text-center text-[9px] text-gray-300 px-3 truncate">
          {name}
        </p>
      )}
    </div>
  );
}

function renderIllustration(variant: Variant, accent: string) {
  const stroke = accent;
  const fill = `${accent}15`;

  switch (variant) {
    case 'trading-card-box':
    case 'booster-box':
    case 'sports-card-box':
      return (
        <g>
          {/* Box body */}
          <rect x="50" y="60" width="100" height="80" rx="6" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Box top */}
          <rect x="50" y="60" width="100" height="16" rx="6" fill={`${accent}25`} stroke={stroke} strokeWidth="2.5" />
          {/* Label area */}
          <rect x="65" y="85" width="70" height="35" rx="4" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <circle cx="100" cy="102" r="8" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          {/* Shine */}
          <line x1="60" y1="64" x2="80" y2="64" stroke="white" strokeWidth="2" opacity="0.5" />
        </g>
      );
    case 'trading-card-pack':
      return (
        <g>
          {/* Pack shape */}
          <rect x="60" y="50" width="80" height="100" rx="8" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Top seal */}
          <rect x="60" y="50" width="80" height="14" rx="8" fill={`${accent}25`} stroke={stroke} strokeWidth="2" />
          {/* Card visible */}
          <rect x="72" y="72" width="56" height="60" rx="4" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <circle cx="100" cy="100" r="12" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
        </g>
      );
    case 'blind-box-case':
      return (
        <g>
          {/* Case outline */}
          <rect x="45" y="70" width="110" height="60" rx="6" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Individual boxes */}
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={52 + i * 26} y="78" width="22" height="44" rx="3" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          ))}
          {/* Question marks */}
          {[0, 1, 2, 3].map((i) => (
            <text key={i} x={63 + i * 26} y="105" fill={stroke} fontSize="14" fontWeight="bold" textAnchor="middle" opacity="0.3">?</text>
          ))}
        </g>
      );
    case 'plush':
      return (
        <g>
          {/* Body */}
          <ellipse cx="100" cy="120" rx="40" ry="35" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Head */}
          <circle cx="100" cy="80" r="28" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Ears */}
          <ellipse cx="82" cy="58" rx="8" ry="14" fill={fill} stroke={stroke} strokeWidth="2" />
          <ellipse cx="118" cy="58" rx="8" ry="14" fill={fill} stroke={stroke} strokeWidth="2" />
          {/* Eyes */}
          <circle cx="92" cy="78" r="3" fill={stroke} />
          <circle cx="108" cy="78" r="3" fill={stroke} />
          {/* Smile */}
          <path d="M93 88 Q100 93 107 88" fill="none" stroke={stroke} strokeWidth="1.5" />
        </g>
      );
    case 'hoodie':
      return (
        <g>
          {/* Hoodie body */}
          <path d="M70 70 L70 140 L130 140 L130 70 L115 65 L100 80 L85 65 Z" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Hood */}
          <path d="M85 65 Q100 50 115 65 L100 80 Z" fill={`${accent}25`} stroke={stroke} strokeWidth="2" />
          {/* Pocket */}
          <rect x="82" y="100" width="36" height="25" rx="4" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          {/* Drawstrings */}
          <line x1="92" y1="78" x2="92" y2="95" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <line x1="108" y1="78" x2="108" y2="95" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
        </g>
      );
    case 'jersey':
      return (
        <g>
          {/* Jersey body */}
          <path d="M65 65 L65 140 L135 140 L135 65 L120 58 L100 72 L80 58 Z" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Collar */}
          <path d="M85 58 Q100 68 115 58" fill="none" stroke={stroke} strokeWidth="2" />
          {/* Number */}
          <text x="100" y="115" fill={stroke} fontSize="28" fontWeight="bold" textAnchor="middle" opacity="0.3">10</text>
          {/* Sleeve stripes */}
          <line x1="65" y1="90" x2="80" y2="90" stroke={stroke} strokeWidth="2" opacity="0.4" />
          <line x1="120" y1="90" x2="135" y2="90" stroke={stroke} strokeWidth="2" opacity="0.4" />
        </g>
      );
    case 'sneaker':
      return (
        <g>
          {/* Sole */}
          <path d="M50 130 Q50 120 60 118 L140 118 Q155 118 155 130 L155 135 L50 135 Z" fill={`${accent}25`} stroke={stroke} strokeWidth="2.5" />
          {/* Upper */}
          <path d="M55 118 L65 90 Q70 80 85 80 L120 80 Q130 80 135 90 L150 118 Z" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Swoosh */}
          <path d="M75 105 Q95 95 125 100" fill="none" stroke={stroke} strokeWidth="2.5" />
          {/* Laces */}
          <line x1="85" y1="88" x2="95" y2="95" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <line x1="95" y1="85" x2="105" y2="92" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <line x1="105" y1="85" x2="115" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
        </g>
      );
    case 'watch':
      return (
        <g>
          {/* Watch face */}
          <circle cx="100" cy="100" r="38" fill={fill} stroke={stroke} strokeWidth="2.5" />
          {/* Inner circle */}
          <circle cx="100" cy="100" r="30" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
          {/* Hour marks */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 100 + Math.cos(angle) * 26;
            const y1 = 100 + Math.sin(angle) * 26;
            const x2 = 100 + Math.cos(angle) * 30;
            const y2 = 100 + Math.sin(angle) * 30;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1.5" opacity="0.4" />;
          })}
          {/* Hands */}
          <line x1="100" y1="100" x2="100" y2="78" stroke={stroke} strokeWidth="2" />
          <line x1="100" y1="100" x2="118" y2="105" stroke={stroke} strokeWidth="2" />
          <circle cx="100" cy="100" r="3" fill={stroke} />
          {/* Straps */}
          <rect x="88" y="50" width="24" height="20" rx="4" fill={`${accent}20`} stroke={stroke} strokeWidth="2" />
          <rect x="88" y="130" width="24" height="20" rx="4" fill={`${accent}20`} stroke={stroke} strokeWidth="2" />
        </g>
      );
    default:
      return (
        <g>
          <rect x="60" y="60" width="80" height="80" rx="8" fill={fill} stroke={stroke} strokeWidth="2.5" />
        </g>
      );
  }
}
