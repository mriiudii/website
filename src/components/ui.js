import * as React from "react"

// Small right-arrow used on links/buttons (reference site style).
export const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12h13M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Numbered section label: "01 / Про нас"
export const Eyebrow = ({ number, children }) => (
  <p className="eyebrow">
    {number && <span className="tabular-nums">{number}</span>}
    {number && <span className="h-px w-6 bg-brand/50" aria-hidden="true" />}
    <span>{children}</span>
  </p>
)
