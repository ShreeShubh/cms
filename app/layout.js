import Header from "@/components/Header/Header"
import "../styles/./globals.css"
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: "Integrated solutions to shape social equity | CMS",
  description:
    "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",
  path: "https://cms.org.in/",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Integrated solutions to shape social equity | CMS</title>
        <meta
          name="description"
          content="We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration."
        />
        <meta property="og:url" content="https://cms.org.in/" />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="flex flex-col min-h-screen">
          {/* <Header /> */}
          {children}
        </main>
      </body>
    </html>
  )
}
