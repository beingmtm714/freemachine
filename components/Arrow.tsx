// Thin north-east arrow drawn as a stroke so it matches the site's 1px rules.
// Inherits color from the parent via currentColor.
export default function Arrow({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 13 L13 3" />
      <path d="M6.5 3 H13 V9.5" />
    </svg>
  )
}
