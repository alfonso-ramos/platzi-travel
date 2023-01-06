export const Home = () => {
    return (
        <div className="w-full h-3/4" id="home">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start">
                    <input type="search" className="w-48 outline-none p-3 rounded-full pl-4 shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden" placeholder="San Francisco" />
                    <div className="hidden h-auto pb-6 lg:w-2/5 lg:flex">
                        <p className="text-4xl ml-16 font-bold ">Find More Locations like this</p>
                    </div>
                    <button className="bg-white text-lg font-semibold p-4 m-0 w-48 rounded-full text-primary InOutTransition hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110a lg:ml-16 dark:text-black dark:hover:bg-gray-900 dark:hover:text-white">
                        Explore More
                    </button>
                </div>
                <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
                    <img className="lg:hidden" src="/public/img/sanFrancisco.jpg" alt="San Francisco Image" />
                </div>
            </div>
        </div>
    )
}
