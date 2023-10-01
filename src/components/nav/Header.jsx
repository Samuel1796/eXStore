import '@fontsource/inter';
// import DrawerMobileNavigation from './DrawerMobileNavigation'
import Gsapp from './Gsapp';

const Header = () => {

    return (
        <div>

            <nav class="backdrop-blur dark:bg-gray-900 fixed  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <span class="self-center text-3xl font-bold whitespace-nowrap dark:text-white"><span className='text-white'>eX</span>Store</span>
                    </a>
                    <div className="flex md:order-2">
                        {/* Render the DrawerMobileNavigation component only on small screens */}
                        <div className="md:hidden">
                            <Gsapp />
                        </div>
                    </div>

                    <div class=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="text-2xl flex flex-col p-4 md:p-0 mt-4 font-bold border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <a href="#" class="font-bold block mr-6 py-2 pl-3 pr-8 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
            <a href="#" class="block mr-6 py-2 pl-3 pr-8 text-white rounded md:p-0 md:dark:text-blue-500 dark:text-white dark:border-gray-700 hover:font-extrabold hover:underline hover:bg-transparent hover:dark:text-blue-500">Games</a>
        </li>
        <li>
            <a href="#" class="block mr-6 py-2 pl-3 pr-8 text-white rounded md:p-0 md:dark:text-blue-500 dark:text-white dark:border-gray-700 hover:font-bold hover:font-semibold hover:font-extrabold hover:underline hover:bg-transparent hover:dark:text-blue-500">Movies</a>
        </li>
        <li>
            <a href="#" class="block mr-6 py-2 pl-3 pr-8 text-white rounded md:p-0 md:dark:text-blue-500 dark:text-white dark:border-gray-700 hover:font-bold hover:font-semibold hover:font-extrabold hover:underline hover:bg-transparent hover:dark:text-blue-500">Musics</a>
        </li>
        <li>
            <a href="#" class="block mr-6 py-2 pl-3 pr-8 text-white rounded md:p-0 md:dark:text-blue-500 dark:text-white dark:border-gray-700 hover:font-bold hover:font-semibold hover:font-extrabold hover:underline hover:bg-transparent hover:dark:text-blue-500">Pictures</a>
        </li>
    </ul>
</div>


                </div>
            </nav>

        </div>
    )
}

export default Header