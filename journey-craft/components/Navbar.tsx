import Link from 'next/link';


const NavBar = () => {

    return (
        <>
            <nav className="drop-shadow-md flex h-16 bg-gradient-to-l from-pink-400 to-emerald-500 via-indigo-400 px-2 py-[1vh] sm:px-4 fixed w-full z-20 top-0 left-0">
                <div className="container flex items-center justify-around mx-auto">
                <Link href="/" className="flex items-center justify-center">
                    <span className="hover:text-2xl self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
                </Link>
                <Link href="/about" className="flex items-center justify-center">
                    <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">About</span>
                </Link>
                </div>
                <div className="px-10 flex"></div>
            </nav>


        </>
    )
}


export default NavBar;