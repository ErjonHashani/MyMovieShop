// Module to export the Header component

function Header(header_container) {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    header_container.innerHTML = `
            <div class="container mx-auto flex justify-between items-center text-xl text-gray-200">
            <div class="flex justify-between items-center gap-3">
                <!-- Header SVG-ICON -->
                <img src="./assets/images/logo.svg" alt="my movie shop-logo" class="w-8 h-8">
                <h2 class="text-red-600 hover:scale-105 duration-100 uppercase font-bold"><a href="index.html">MyMovie<span class="text-gray-200">Shop</span></a></h2>
            </div>
            <div id="hamburger" class="lg:hidden p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600 duration-200 rounded-full">
                <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </div>
                <nav class="hidden lg:block">
                    <ul class="flex gap-10 ">
                    <li class="header-nav-link"><a href="index.html">Home</a></li>
                    <li class="header-nav-link"><a href="shop.html">Shop</a></li>
                    <li class="header-nav-link"><a href="cart.html">Cart</a></li>
                    ${isLoggedIn ? '<li class="header-nav-link"><a href="dashboard.html">Dashboard</a></li>' : ''}
                    ${isLoggedIn ? 
                        '<li class="header-nav-link"><a href="#" id="logoutBtn">Logout</a></li>' : 
                        '<li class="header-nav-link"><a href="login.html">Login</a></li>'
                    }
                    ${!isLoggedIn ? '<li class="header-nav-link"><a href="register.html">Register</a></li>' : ''}
                    </ul>
                </nav>
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