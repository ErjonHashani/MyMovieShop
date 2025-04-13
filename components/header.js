// Module to export the Header component

function Header(header_container) {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    header_container.innerHTML = `
            <div class="container mx-auto flex justify-between items-center text-xl text-gray-200">
                <div class="group">
                    <!-- Header SVG-ICON -->
                    <a href="index.html" class="flex gap-3">
                        <img src="./assets/images/logo.svg" alt="my movie shop-logo" class="w-8 h-8 transition-transform duration-300 group-hover:rotate-100">
                        <h2 class="text-red-600 uppercase font-bold">MyMovie<span class="text-gray-200">Shop</span></h2>
                    </a>
                </div>
                

                <div id="hamburger" class="lg:hidden p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-600 transform hover:rotate-90 duration-200 rounded-full">
                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </div>


                <div class="hidden lg:flex lg:items-center gap-16">
                    <div class="hidden lg:flex">
                        <nav>
                            <ul class="flex gap-10 ">
                                <li class="header-nav-link"><a href="index.html">Home</a></li>
                                <li class="header-nav-link"><a href="shop.html">Shop</a></li>
                                <li class="header-nav-link"><a href="cart.html">Cart</a></li>
                                ${isLoggedIn ? '<li class="header-nav-link"><a href="dashboard.html">Dashboard</a></li>' : ''}
                            </ul>
                        </nav>
                    </div>
                    <nav>
                        <ul class="flex gap-5">
                            ${isLoggedIn ? 
                                '<li class="header-nav-link"><a href="#" id="logoutBtn">Logout</a></li>' : 
                                `<li>
                                    <a href="login.html" class="flex gap-2 items-center text-base font-normal py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 border border-red-700">
                                        <div><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></div>
                                        Login
                                    </a>
                                    </li>`
                            }
                            ${!isLoggedIn ? `
                                <li>
                                    <a href="register.html" class="flex gap-2 items-center text-base font-normal py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 border border-blue-700">
                                        <div><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></div>
                                        Register
                                    </a>
                                </li>` : ``}
                        </ul>
                    </nav>
                </div>
            </div>
    `;

    // Logout function
    if (isLoggedIn) {
        const logoutBtn = header_container.querySelector('#logoutBtn');
        logoutBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'false');
            window.location.href = 'index.html';
        });
    }
    
}

export default Header;