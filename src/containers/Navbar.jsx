import {MagnifyingGlassIcon, UserIcon, MoonIcon } from "@heroicons/react/20/solid"

export const Navbar = () => {
    return (
        <nav className="w-full h-14 hidden bg-white lg:flex py-4 justify-around fixed z-10">
            <div className="h-auto w-auto">
                <p className="text-xl text-primary font-bold">Platzi Travel</p>
            </div>
            <div className="flex space-x-8">
                <a className="font-bold text-md text-primary" href="#home">Locations</a>
                <a className="font-bold text-md text-primary" href="#home">Stays</a>
                <a className="font-bold text-md text-primary" href="#home">FAQs</a>
                <a className="font-bold text-md text-primary" href="#home">About Us</a>
            </div>
            <div className="flex space-x-4">
                <a href="#recommended">
                    <MagnifyingGlassIcon className="w-7 h-7 text-primary" />
                </a>

                <button>
                    <MoonIcon className="w-7 h-7 text-gray-300" />
                </button>

                <a href="">
                    <UserIcon className="w-7 h-7 text-gray-300" />
                </a>
            </div>
        </nav>
    )
}