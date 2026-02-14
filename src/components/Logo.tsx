export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CSI Concrete Systems logo"
    >
      {/* Concrete block shape — angled monolith */}
      <rect x="4" y="8" width="40" height="32" rx="2" fill="#2F2F2F" />
      {/* Orange accent stripe — diagonal cut */}
      <polygon points="4,36 4,40 44,40 44,32" fill="#FF8C00" />
      {/* CSI letters — bold industrial */}
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="16"
        letterSpacing="2"
        fill="white"
      >
        CSI
      </text>
    </svg>
  );
}
