import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Logo from "../components/logo"

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <Logo />
      <p className="mt-10 text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl">Такої сторінки немає</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        Можливо, посилання застаріло або сторінку переміщено. Повернімося на
        головну.
      </p>
      <Link to="/" className="btn-primary mt-8">
        На головну
      </Link>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Сторінку не знайдено" />
