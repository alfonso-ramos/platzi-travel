import { HomeIcon, MagnifyingGlassIcon, HeartIcon, UserIcon, MoonIcon } from "@heroicons/react/20/solid"

export const TabBar = (props) => {
    return (
        <div className="w-full h-16 bg-white flex space-x-8 items-center justify-center fixed left-0 bottom-0 shadow-md lg:hidden dark:bg-gray-800 InOutTransition" id="tab_bar">
            <a href="#home">
                <HomeIcon className="w-7 h-7 text-gray-300" />
            </a>
            <a href="#recommended">
                <MagnifyingGlassIcon className="w-7 h-7 text-primary" />
            </a>
            <a href="#featured_sales">
                <HeartIcon className="w-7 h-7 text-gray-300" />
            </a>
            <button onClick={props.toggleDarkMode}>
                <MoonIcon className="w-7 h-7 text-gray-300" />
            </button>
            <a href="">
                <UserIcon className="w-7 h-7 text-gray-300" />
            </a>
        </div>
    )
}
