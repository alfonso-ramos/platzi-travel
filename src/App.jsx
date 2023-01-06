import { Navbar } from "./containers/Navbar"
import { Home } from "./containers/Home"
import { Recommended } from "./containers/Recommended"
import { FeaturedStays } from "./containers/FeaturedStays"
import { FAQs } from "./containers/FAQs"
import { Footer } from "./containers/Footer"
import { TabBar } from "./containers/TabBar"

import { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    console.log("DarkMode")
    setDarkMode(!darkMode)
  }

  return (
    <div className={`App font-Montserrat ${darkMode && 'dark'}`} >
      <Navbar toggleDarkMode={toggleDarkMode} />
      <section className="w-full h-auto dark:bg-slate-900">
        <Home  />
        <Recommended />
        <FeaturedStays />
        <FAQs />
      </section>
      <Footer />
      <br />
      <TabBar toggleDarkMode={toggleDarkMode}/>
    </div>
  )
}

export default App
