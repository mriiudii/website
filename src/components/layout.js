import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ settings, children }) => {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  )
}

export default Layout
