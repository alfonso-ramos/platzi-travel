export const Recommended = () => {
    return (
        <div className="p-6" id="recommended">
            <p className="text-3xl font-bold text-primary dark:text-white InOutTransition">Our Recomendations</p>
            <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 scrollbar-hide">

                <div className="Card ">
                    <div className=" bg-norway "></div>
                    <div className="bg-secondary dark:bg-gray-700 InOutTransition">
                        <p className="text-white InOutTransition">Norway</p>
                        <p className="text-white InOutTransition">Beatifull landscapes</p>
                    </div>
                </div>

                <div className="Card">
                    <div className=" bg-new_york "></div>
                    <div className="bg-white dark:bg-gray-800 InOutTransition">
                        <p className="text-terciary InOutTransition">New York</p>
                        <p className="text-terciary InOutTransition">Concrete jungle</p>
                    </div>
                </div>

                <div className="Card">
                    <div className=" bg-yosemite "></div>
                    <div className="bg-secondary dark:bg-gray-700 InOutTransition">
                        <p className="text-white InOutTransition">Yosemite</p>
                        <p className="text-white InOutTransition">A break from the world</p>
                    </div>
                </div>

                <div className="Card">
                    <div className=" bg-seattle "></div>
                    <div className="bg-white dark:bg-gray-800 InOutTransition">
                        <p className="text-terciary InOutTransition">Seattle</p>
                        <p className="text-terciary InOutTransition">Big City</p>
                    </div>
                </div>

                <div className="Card">
                    <div className=" bg-switerland "></div>
                    <div className="bg-secondary dark:bg-gray-700 InOutTransition">
                        <p className="text-white InOutTransition">Switzerland</p>
                        <p className="text-white InOutTransition">A break from the world</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
