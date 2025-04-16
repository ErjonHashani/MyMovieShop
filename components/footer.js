// Module to export the Footer component

function Footer(footer_container) {

    footer_container.innerHTML = `
        <div class="container mx-auto px-8 sm:px-16 py-10">
            <div class="text-gray-200 md:flex justify-between items-center">
                <!-- Title and info -->
                <div class="w-80 mb-5">
                    <h1 class="text-2xl sm:text-3xl font-semibold text-red-600 flex items-center gap-2">
                        <span class="mt-1"><svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM512 192L0 192 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224z"/></svg></span>
                        My Movie Shop
                    </h1>
                    <p class="mt-3 text-sm">Your ultimate destination for the latest blockbusters, timeless classics, and
                        exclusive collector's editions. Enjoy high-quality streaming or fast delivery for physical copies.
                    </p>
                </div>
                <!-- Movies -->
                <div class="flex flex-col mb-5">
                    <a href="shop.html" class="text-xl hover:text-red-600 duration-200">Movies</a>
                    <ul class="mt-3 text-sm border-l-1 border-gray-200 pl-6 list-disc">
                        <li>Action-packed thrillers</li>
                        <li>Award-winning dramas</li>
                        <li>Family-friendly animations</li>
                        <li class="text-red-600">Exclusive behind-the-scenes footage</li>
                    </ul>
                </div>
                <!-- Shop -->
                <div class="flex flex-col items-start">
                        <a href="#" class="flex items-center gap-2 text-gray-400 hover:text-gray-200">
                            <span><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/></svg></span>
                            Privacy Policy
                        </a>
                        <a href="#" class="flex items-center gap-2 text-gray-400 hover:text-gray-200"">
                            <span><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"/></svg></span>
                            Legal Terms
                        </a>
                </div>
            </div>
            <div class="border-t border-gray-700/70 mt-12 pt-6 flex flex-col gap-5 sm:flex-row sm:items-center justify-between">
                <div class="text-gray-400 flex gap-5">
                    <a href="#" class="hover:text-gray-300">FAQ</a>
                    <a href="#" class="hover:text-gray-300">Cookies</a>
                </div>
                <p class="text-sm sm:text-normal text-gray-200">
                    &copy; <span id="currentYear"></span> MyMovieShop. All rights reserved. Data provided by <a class="text-blue-500 hover:text-blue-600 duration-100" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>.
                </p>
            </div>
        </div>
    `;

    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

export default Footer;
