export const Recommended = () => {
    return (
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
    )
}
