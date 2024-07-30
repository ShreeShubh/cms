import Header from "@/components/Header/Header"
import "../styles/./globals.css"
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: "Integrated solutions to shape social equity | CMS",
  description:
    "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col min-h-screen">
          {/* <Header /> */}
          {children}
        </main>
      </body>
    </html>
  )
}
