import * as React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import { resolveSettings, telHref } from "../data/site"

const Footer = ({ settings }) => {
  const s = resolveSettings(settings)

  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo variant="light" />
          <p className="mt-5 text-lg font-semibold leading-snug text-white/90">
            Ми не здійснюємо мрії замість людей — ми створюємо умови, щоб люди
            могли перетворювати свої мрії на дії.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Навігація
          </h3>
          <ul className="mt-4 space-y-2.5 text-white/80">
            <li>
              <a className="hover:text-brand-light" href="/#about">
                Про нас
              </a>
            </li>
            <li>
              <a className="hover:text-brand-light" href="/#directions">
                Напрями
              </a>
            </li>
            <li>
              <Link className="hover:text-brand-light" to="/projects">
                Проєкти
              </Link>
            </li>
            <li>
              <a className="hover:text-brand-light" href="/#partnership">
                Партнерство
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Контакти
          </h3>
          <ul className="mt-4 space-y-2.5 text-white/80">
            <li>
              <a className="hover:text-brand-light" href={telHref(s.phone)}>
                {s.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-brand-light" href={`mailto:${s.email}`}>
                {s.email}
              </a>
            </li>
            {s.facebookUrl && (
              <li>
                <a
                  className="hover:text-brand-light"
                  href={s.facebookUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Facebook
                </a>
              </li>
            )}
            {s.instagramUrl && (
              <li>
                <a
                  className="hover:text-brand-light"
                  href={s.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-white/55 md:flex-row md:items-start md:justify-between">
          <p className="max-w-xl">
            <span className="font-semibold text-white/75">
              Юридична адреса:
            </span>{" "}
            {s.legalAddress}. Зустрічі з партнерами — за попередньою
            домовленістю.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} ГО «Мрії у Дії»
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
