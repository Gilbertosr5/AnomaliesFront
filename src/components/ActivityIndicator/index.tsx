interface IndicatorProps{
  size: number;
  stroke: number;
  color: string;
}

export function ActivityIndicator({
  size=12, 
  stroke=4, 
  color="var(--primary)"
}:IndicatorProps){
  return(
    <div className="loading-indicator">
      <svg width={String(size+10)} height={String(size+10)} viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={String(size)}
          stroke={color}
          strokeWidth={String(stroke)}
          fill="none"
          strokeDasharray="90"
          strokeDashoffset="60"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}