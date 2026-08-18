import * as React from "react"

// Text-based wordmark for ГО «Мрії у Дії».
// Kept as markup (not an image) so it stays crisp and easy to restyle.
// `variant` switches colours for light vs. dark surfaces.
const Logo = ({ variant = "dark", className = "" }) => {
  const isLight = variant === "light"
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Мрії у Дії"
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white"
      >
        {/* Arrow: idea → action */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h12M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          Мрії у Дії
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
            isLight ? "text-white/70" : "text-ink-muted"
          }`}
        >
          Громадська організація
        </span>
      </span>
    </span>
  )
}

export default Logo
