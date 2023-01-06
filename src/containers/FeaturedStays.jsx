export const FeaturedStays = () => {
    return (
        <div className="px-2 h-auto w-full" id="featured_sales">
            <p className="text-3xl text-primary font-bold mt-6 dark:text-white">Trending Stays</p>
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
    )
}
