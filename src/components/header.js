import * as React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

// Section anchors use a leading "/" so they resolve to the homepage section
// even from sub-pages (e.g. /projects). `route: true` items are real pages.
const NAV = [
  { label: "Про нас", href: "/#about" },
  { label: "Напрями", href: "/#directions" },
  { label: "Проєкти", href: "/projects", route: true },
  { label: "Команда", href: "/#team" },
  { label: "Контакти", href: "/#contacts" },
]

// Render a nav item as a router Link (real page) or a plain anchor (hash).
const NavItem = ({ item, className, onClick }) =>
  item.route ? (
    <Link to={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  ) : (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  )

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" onClick={close}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(item => (
            <NavItem
              key={item.href}
              item={item}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-brand"
            />
          ))}
          <a href="/#partnership" className="btn-primary px-5 py-2.5 text-sm">
            Стати партнером
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/10 bg-cream lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map(item => (
              <NavItem
                key={item.href}
                item={item}
                onClick={close}
                className="rounded-lg px-2 py-3 text-base font-semibold text-ink-soft hover:bg-sand"
              />
            ))}
            <a
              href="/#partnership"
              onClick={close}
              className="btn-primary mt-2"
            >
              Стати партнером
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
