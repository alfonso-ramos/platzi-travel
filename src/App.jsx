import {HomeIcon, MagnifyingGlassIcon, HeartIcon, UserIcon, MoonIcon} from "@heroicons/react/20/solid"

function App() {
  //
  return (
    <div className="App font-Montserrat">
      <nav></nav>
      <section className="w-full h-auto">
        <div id="home">
          <div className="w-full h-3/4">
            <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start">
              <input type="search" className="w-48 outline-none p-3 rounded-full pl-4 shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden" placeholder="San Francisco" />
              <div className="hidden h-auto pb-6 lg:w-2/5 lg:flex">
                <p className="text-4xl ml-16 font-bold ">Find More Locations like this</p>
              </div>
              <button className="bg-white text-lg font-semibold p-4 m-0 w-48 rounded-full text-primary transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110a lg:ml-16">
                Explore More
              </button>
            </div>
            <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
              <img className="lg:hidden" src="/img/sanFrancisco.jpg" alt="San Francisco Image" />
            </div>
          </div>
        </div>
        <div className="p-6" id="recommended">
          <p className="text-3xl font-semibold text-primary">Our Recomendations</p>
          <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 scrollbar-hide">

            <div className="Card">
              <div className=" bg-norway "></div>
              <div className="bg-secondary ">
                <p className="text-white ">Norway</p>
                <p className="text-white ">Beatifull landscapes</p>
              </div>
            </div>

            <div className="Card">
              <div className=" bg-new_york "></div>
              <div className="bg-white ">
                <p className="text-terciary ">New York</p>
                <p className="text-terciary ">Concrete jungle</p>
              </div>
            </div>

            <div className="Card">
              <div className=" bg-yosemite "></div>
              <div className="bg-secondary ">
                <p className="text-white ">Yosemite</p>
                <p className="text-white ">A break from the world</p>
              </div>
            </div>

            <div className="Card">
              <div className=" bg-seattle "></div>
              <div className="bg-white ">
                <p className="text-terciary ">Seattle</p>
                <p className="text-terciary ">Big City</p>
              </div>
            </div>

            <div className="Card">
              <div className=" bg-switerland "></div>
              <div className="bg-secondary ">
                <p className="text-white ">Switzerland</p>
                <p className="text-white ">A break from the world</p>
              </div>
            </div>

          </div>
        </div>
        <div className="px-2 h-auto w-full" id="featured_sales">
          <p className="text-3xl text-primary font-semibold mt-6">Trending Stays</p>
          <div className="w-full h-auto flex flex-col space-y-6 items-center justify-center mt-5 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-3">

            <div className="w-full h-96 bg-chicago bg-cover rounded-xl lg:bg-center lg:col-span-2 lg:row-span-1">
              <p className="CardTitle">Chicago</p>
              <p className="text-md pl-8 text-white mr-24">2 rooms, 1 bathroom and kitchen</p>
            </div>

            <div className="w-full h-96 bg-LA bg-cover rounded-xl lg:col-span-1 lg:row-span-3 lg:h-full">
              <p className="CardTitle">Los Angeles</p>
              <p className="text-md pl-8 text-white mr-24">4 rooms, 3 bathroom kitchen and private pool</p>
            </div>

            <div className="w-full h-96 bg-miami bg-cover rounded-xl lg:h-full">
              <p className="CardTitle">Miami</p>
              <p className="text-md pl-8 text-white mr-24">3 rooms, 2 bathroom kitchen and amazing sea view</p>
            </div>

            <div className="w-full h-96 bg-bali bg-cover rounded-xl lg:h-full">
              <p className="CardTitle">Bali</p>
              <p className="text-md pl-8 text-white mr-24">2 rooms, 2 bathroom kitchen and private pool</p>
            </div>

          </div>
        </div>

        <div className="w-full h-full flex flex-col space-y-4 pt-6" id="faqs">
          <div className="w-full h-full px-6">
            <p className="text-3xl text-primary font-semibold">FAQs</p>
            <div className="pt-4">
              <p className="text-xl font-md text-primary">Payment Methods</p>
              <p className="font-md pt-2">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>

            <div className="pt-4">
              <p className="text-xl font-md text-primary">Cancellation Policy</p>
              <p className="font-md pt-2">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>

            <div className="pt-4">
              <p className="text-xl font-md text-primary">Long Stays </p>
              <p className="font-md pt-2">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-auto bg-gray-50 text-gray-300 p-5 space-y-2">
        <p className="text-lg">About Us</p>
        <p className="text-md">Inverstors</p>
        <p className="text-md">Jobs</p>
        <p className="text-md">Privacy policy</p>
        <p className="text-md">Terms and Conditions</p>
        <p className="text-md">Platzi Travel, inc</p>
        <p className="text-md">Follow Us</p>
      </footer>
      <br />
      <div className="w-full h-16 bg-white flex space-x-8 items-center justify-center fixed left-0 bottom-0 shadow-md lg:hidden" id="tab_bar">
        <a href="#home">
          <HomeIcon className="w-7 h-7 text-gray-300"/>
        </a>
        <a href="#recommended">
          <MagnifyingGlassIcon className="w-7 h-7 text-primary"/>
        </a>
        <a href="#featured_sales">
          <HeartIcon className="w-7 h-7 text-gray-300"/>
        </a>
        <button>
          <MoonIcon className="w-7 h-7 text-gray-300"/>
        </button>
        <a href="">
          <UserIcon className="w-7 h-7 text-gray-300"/>
        </a>
      </div>
    </div>
  )
}

export default App
