import { Navbar } from "./containers/Navbar"
import { Home } from "./containers/Home"
import { Recommended } from "./containers/Recommended"
import { FeaturedStays } from "./containers/FeaturedStays"
import { FAQs } from "./containers/FAQs"
import {Footer} from "./containers/Footer"
import { TabBar } from "./containers/TabBar"
function App() {
  //
  return (
    <div className="App font-Montserrat">
      <Navbar/>
      <section className="w-full h-auto">
        <Home />
        <Recommended />
        <FeaturedStays />
        <FAQs />
      </section>
      <Footer />
      <br />
      <TabBar />
    </div>
  )
}

export default App
