import * as React from "react"
import { ArrowIcon } from "./ui"

const REPRESENT_OPTIONS = [
  "громадську організацію",
  "громаду",
  "бізнес",
  "освітній заклад",
  "міжнародну організацію",
  "ініціативну групу",
  "інше",
]

const OFFER_OPTIONS = [
  "спільний проєкт",
  "грантове партнерство",
  "експертну підтримку",
  "менторство",
  "ресурсну підтримку",
  "волонтерство",
  "інше",
]

const FORM_NAME = "partnership"

const encode = data =>
  Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&")

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
const labelClass = "block text-sm font-semibold text-ink"

const PartnershipForm = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setError(false)
    const form = event.target
    const data = new FormData(form)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": FORM_NAME,
        ...Object.fromEntries(data),
      }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-moss/30 bg-white p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-moss text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl">Дякуємо за пропозицію!</h3>
        <p className="mt-2 text-ink-soft">
          Ми отримали ваше повідомлення й зв’яжемося з вами найближчим часом.
        </p>
      </div>
    )
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify
      onSubmit={handleSubmit}
      className="rounded-card border border-ink/10 bg-white p-6 sm:p-8"
    >
      {/* Netlify form detection helpers */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Не заповнюйте це поле: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="pf-name">
            Ім’я
          </label>
          <input
            id="pf-name"
            name="name"
            type="text"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="pf-org">
            Організація
          </label>
          <input
            id="pf-org"
            name="organization"
            type="text"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="pf-contact">
            Email / телефон
          </label>
          <input
            id="pf-contact"
            name="contact"
            type="text"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="pf-represent">
            Я представляю
          </label>
          <select
            id="pf-represent"
            name="represent"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Оберіть варіант
            </option>
            {REPRESENT_OPTIONS.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="pf-offer">
            Що ви пропонуєте?
          </label>
          <select
            id="pf-offer"
            name="offer"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Оберіть варіант
            </option>
            {OFFER_OPTIONS.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="pf-idea">
            Коротко про ідею
          </label>
          <textarea
            id="pf-idea"
            name="idea"
            rows={4}
            className={fieldClass}
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm text-brand-dark">
          Не вдалося надіслати форму. Спробуйте ще раз або напишіть нам на
          пошту.
        </p>
      )}

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Надіслати пропозицію
        <ArrowIcon />
      </button>
    </form>
  )
}

export default PartnershipForm
