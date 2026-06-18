import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'footer' | 'dark-background';
  height?: number | string;
}

export default function Logo({ className = '', variant = 'full', height = 36 }: LogoProps) {
  // If variant is 'icon' only, we render the stylized 'K' with the orbit
  if (variant === 'icon') {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          {/* Gradients for 'K' and Orbit */}
          <linearGradient id="logo-k-grad" x1="10" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B1A3B" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="logo-orbit-grad" x1="10" y1="50" x2="110" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Orbit Background half (behind vertical bar) */}
        <path
          d="M 12 75 C 5 62, 35 40, 78 36 C 88 35, 96 38, 98 42 C 100 46, 92 51, 80 54"
          stroke="url(#logo-orbit-grad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* The 'K' Vertical Core Stem */}
        <rect
          x="32"
          y="25"
          width="13"
          height="66"
          rx="2"
          fill="url(#logo-k-grad)"
        />

        {/* The 'K' Diagonal Upper Branch */}
        <path
          d="M 45 61 L 82 27 L 95 27 L 55 61 Z"
          fill="url(#logo-k-grad)"
        />

        {/* The 'K' Diagonal Lower Branch */}
        <path
          d="M 50 56 L 94 91 L 81 91 L 40 56 Z"
          fill="url(#logo-k-grad)"
        />

        {/* Orbit Front half (in front of vertical bar for realistic 3D overlay) */}
        <path
          d="M 80 54 C 65 58, 38 71, 14 74 C 10 75, 8 72, 10 68"
          stroke="url(#logo-orbit-grad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Colors based on background requirements
  const isDarkBg = variant === 'footer' || variant === 'dark-background';
  const textPrimaryColor = isDarkBg ? '#FFFFFF' : '#0B1A3B';
  const techColor = '#38BDF8'; // Bright electric sky blue
  const lineStrokeColor = isDarkBg ? 'rgba(255,255,255,0.2)' : 'rgba(11,26,59,0.2)';
  const sloganColor = isDarkBg ? '#94A3B8' : '#475569';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Normalized Logo SVG wrapper */}
      <svg
        height={height}
        viewBox="0 0 520 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto max-w-full"
        style={{ height: height }}
      >
        <defs>
          <linearGradient id="logo-k-full-grad" x1="15" y1="15" x2="110" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isDarkBg ? "#3B82F6" : "#0B1A3B"} />
            <stop offset="100%" stopColor={isDarkBg ? "#60A5FA" : "#1E3A8A"} />
          </linearGradient>
          <linearGradient id="logo-orbit-full-grad" x1="10" y1="65" x2="120" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* --- ICON PART (Starts at x=10, y=20) --- */}
        {/* Orbit loop back track */}
        <path
          d="M 22 84 C 12 72, 45 42, 92 38 C 103 37, 111 40, 113 44 C 115 48, 107 53, 95 56"
          stroke="url(#logo-orbit-full-grad)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Vert bar 'K' */}
        <rect
          x="42"
          y="32"
          width="13"
          height="64"
          rx="2.5"
          fill="url(#logo-k-full-grad)"
        />

        {/* diagonal upper 'K' */}
        <path
          d="M 55 67 L 91 34 L 105 34 L 65 67 Z"
          fill="url(#logo-k-full-grad)"
        />

        {/* diagonal lower 'K' */}
        <path
          d="M 60 62 L 104 96 L 91 96 L 50 62 Z"
          fill="url(#logo-k-full-grad)"
        />

        {/* Orbit loop front track */}
        <path
          d="M 95 56 C 80 60, 50 78, 24 82 C 20 83, 18 80, 20 76"
          stroke="url(#logo-orbit-full-grad)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* --- BRAND NAME PATHS (Futuristic customized typographic paths) --- */}
        {/* We use vector text with standard weights formatted explicitly so it scales perfectly */}
        
        {/* KASTURAG text */}
        <g id="brand-kasturag">
          {/* K */}
          <path d="M 134 40 L 143 40 L 143 88 L 134 88 Z" fill={textPrimaryColor} />
          <path d="M 143 64 L 171 40 L 183 40 L 150 66 L 184 88 L 172 88 Z" fill={textPrimaryColor} />
          
          {/* A */}
          <path d="M 197 40 L 206 40 L 219 88 L 210 88 L 201 54 L 192 88 L 183 88 Z" fill={textPrimaryColor} />
          {/* Cyan core triangle inside 'A' instead of mid-bar */}
          <path d="M 198 62 L 204 74 L 192 74 Z" fill="#00D8FF" />

          {/* S */}
          <path d="M 245 40 L 225 40 L 225 49 L 243 51 C 248 52, 249 55, 249 59 C 249 64, 246 66, 241 66 L 225 66 L 225 74 L 243 74 C 248 75, 250 78, 250 82 C 250 86, 246 88, 240 88 L 224 88 L 224 96 L 244 96 C 252 96, 259 93, 259 83 C 259 74, 253 71, 247 70 C 239 69, 235 67, 235 61 C 235 56, 239 54, 244 54 C 250 54, 255 56, 257 60 L 261 54 C 258 46, 251 40, 245 40 Z" fill={textPrimaryColor} transform="translate(4, -1)" />

          {/* T */}
          <path d="M 268 40 L 298 40 L 298 49 L 288 49 L 288 88 L 278 88 L 278 49 L 268 49 Z" fill={textPrimaryColor} />

          {/* U */}
          <path d="M 306 40 L 315 40 L 315 76 C 315 84, 321 88, 327 88 C 333 88, 339 84, 339 76 L 339 40 L 348 40 L 348 76 C 348 89, 339 96, 327 96 C 315 96, 306 89, 306 76 Z" fill={textPrimaryColor} />

          {/* R */}
          <path d="M 358 40 L 382 40 C 392 40, 397 45, 397 54 C 397 61, 392 65, 383 67 L 399 88 L 387 88 L 373 68 L 367 68 L 367 88 L 358 88 Z M 367 48 L 367 60 L 381 60 C 386 60, 388 58, 388 54 C 388 50, 386 48, 381 48 Z" fill={textPrimaryColor} />

          {/* A */}
          <path d="M 410 40 L 419 40 L 432 88 L 423 88 L 414 54 L 405 88 L 396 88 Z" fill={textPrimaryColor} />
          {/* Cyan core triangle inside 'A' */}
          <path d="M 411 62 L 417 74 L 405 74 Z" fill="#00D8FF" />

          {/* G */}
          <path d="M 458 40 C 445 40, 436 49, 436 68 C 436 87, 445 96, 458 96 C 466 96, 474 91, 477 84 L 477 69 L 460 69 L 460 61 L 485 61 L 485 82 C 480 91, 471 96, 458 96 Z" fill={textPrimaryColor} />
          {/* G's dynamic inner element color */}
          <path d="M 473 69 L 485 69 L 485 75 L 473 75 Z" fill="#00D8FF" />
        </g>

        {/* --- MIDDLE ROAD "TECH" (Starts at y=105) --- */}
        {/* Left flanking line */}
        <line x1="50" y1="114" x2="225" y2="114" stroke={lineStrokeColor} strokeWidth="1.5" />

        {/* Centered T E C H */}
        <text
          x="285"
          y="119"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={techColor}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="18"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TECH
        </text>

        {/* Right flanking line */}
        <line x1="340" y1="114" x2="515" y2="114" stroke={lineStrokeColor} strokeWidth="1.5" />

        {/* --- SLOGAN S L A T E "CODE. SOLVE. ELEVATE." (Starts at y=135) --- */}
        <text
          x="282"
          y="152"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={sloganColor}
          fontSize="10"
          fontWeight="semibold"
          letterSpacing="12"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          CODE. SOLVE. ELEVATE.
        </text>
      </svg>
    </div>
  );
}
