// Make a module to export the Header component

function Header(header_container) {
    header_container.innerHTML = `
        <header class="bg-gray-700 py-4 px-16">
            <div class="container mx-auto flex justify-between items-center text-xl text-white">
            <div class="flex justify-between items-center gap-3">
                <!-- Header SVG-ICON -->
                <img src="./assets/images/logo.svg" alt="my movie shop-logo" class="w-8 h-8">
                <h2 class="text-red-600 hover:scale-105 duration-100 uppercase font-bold"><a href="index.html">MyMovie<span class="text-white">Shop</span></a></h2>
            </div>
            <nav>
                <ul class="flex gap-10">
                <li class="header-nav-link"><a href="index.html">Home</a></li>
                <li class="header-nav-link"><a href="shop.html">Shop</a></li>
                <li class="header-nav-link"><a href="cart.html">Cart</a></li>
                <li class="header-nav-link"><a href="dashboard.html">Dashboard</a></li>
                <li class="header-nav-link"><a href="login.html">Login</a></li>
                <li class="header-nav-link"><a href="register.html">Register</a></li>
                </ul>
            </nav>
            </div>
        </header>
    `;
}

export default Header;