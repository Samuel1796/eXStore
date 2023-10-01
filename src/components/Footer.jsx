import "../App.css"
const Footer = ()=>{

    return(
        
<footer class=" border bg-[#383838] rounded-lg shadow dark:bg-gray-900 mt-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class=" text-white flex items-center mb-4 sm:mb-0">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eXStore</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Games</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Movies</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Pictures</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">Boakye Oduro Samuel - MERN Stack Developer.</span>
    </div>
</footer>


    )
}

export default Footer