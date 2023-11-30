function Design() {
  return (
    <div>
      <svg
        viewBox="0 0 557 557"
        width="557"
        height="557"
        fill="none"
        className="max-h-full max-w-full"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="300"
          fontWeight="bold"
          fill="url(#outerShadowGradient)"
          opacity="0.2"
        >
          SHA
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="300"
          fontWeight="bold"
          fill="url(#innerShadowGradient)"
          opacity="0.5"
        >
          SHA
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="300"
          fontWeight="bold"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="3"
        >
          SHA
        </text>

        <defs>
          <linearGradient
            id="outerShadowGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient
            id="innerShadowGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6663F6" stopOpacity="0" />
            <stop offset="100%" stopColor="#7877C6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Design;
