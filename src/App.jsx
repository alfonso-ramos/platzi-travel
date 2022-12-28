function App() {

  return (
    <div className="App">
      <nav></nav>
      <div id="tab_bar"></div>
      <section className="w-full h-screen">
        <div id="home">
          <div className="w-full h-3/4">
            <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center ">
              <input type="search" className="outline-none p-3 rounded-full pl-4 shadow-sm " placeholder="San Francisco" />
              <button className="bg-white text-xl font-semibold p-4 m-0 w-36 rounded-full text-primary">
                Explore
              </button>
            </div>
            <div className="w-full h-full">
              <img src="/img/sanFrancisco.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="p-6" id="recommended">
          <p className="text-3xl font-semibold text-primary">Our recommended</p>
          <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4">

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
        <div id="featured_sales"></div>
      </section>
      <footer></footer>
    </div>
  )
}

export default App
