function App() {

  return (
    <div className="App">
      <nav></nav>
      <div id="tab_bar"></div>
      <section className="w-full h-screen">
        <div id="home">
          <div className="w-full h-3/4">
            <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center ">
              <input type="search" className="outline-none p-3 rounded-full pl-4 shadow-sm " placeholder="San Francisco"/>
              <button className="bg-white text-xl font-semibold p-4 m-0 w-36 rounded-full text-primary">
                Explorar
              </button>
            </div>
            <div className="w-full h-full">
              <img src="/img/sanFrancisco.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="p-20" id="recommended">
          <div className="w-48 h-64 shadow-lg rounded-lg">
            <div className="w-full h-3/5 rounded-t-lg bg-norway bg-cover"></div>
            <div className="bg-secondary w-full h-2/5 rounded-b-lg">
              <p className="text-white font-bold text-xl px-4 py-2">Norway</p>
              <p className="text-white text-md px-4">Beatifull landscapes</p>
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
