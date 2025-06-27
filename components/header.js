import { getCart, cartHasItems } from "./cartUtils.js";

function Header(header_container) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isLoggedIn = !!currentUser;
  const cart = getCart();
  const hasItems = cartHasItems();

  header_container.innerHTML = `
        <div class="container mx-auto flex justify-between items-center text-xl text-gray-200">
            <!-- Logo -->
            <div class="group">
                <a href="index.html" class="flex gap-3">
                    <img src="./assets/images/logo.svg" alt="my movie shop-logo" class="w-8 h-8 transition-transform duration-300 group-hover:rotate-100">
                    <h2 class="text-red-600 uppercase font-bold">MyMovie<span class="text-gray-200">Shop</span></h2>
                </a>
            </div>
            
            <!-- Hamburger Menu Button (Mobile) -->
            <button id="hamburger" class="lg:hidden p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-600 transform hover:rotate-90 duration-200 rounded-full" aria-label="Menu">
                <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>

            <!-- Mobile Menu (Hidden by default) -->
            <div id="mobileHeader" class="hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-95 lg:hidden">
                <div class="flex items-center justify-between p-4">
                    <div class="group">
                        <a href="index.html" class="flex gap-3">
                            <img src="./assets/images/logo.svg" alt="my movie shop-logo" class="w-8 h-8 transition-transform duration-300 group-hover:rotate-100">
                            <h2 class="text-red-600 uppercase font-bold">MyMovie<span class="text-gray-200">Shop</span></h2>
                        </a>
                    </div>
                    <button id="closeMobileMenu" class="text-white p-2 cursor-pointer hover:bg-gray-600 duration-200 rounded-full">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col items-center justify-center h-full space-y-8 -mt-8">
                    <nav class="w-full">
                        <ul class="flex flex-col items-center space-y-6">
                            <li><a href="index.html" class="text-2xl text-white hover:text-red-500 transition-colors">Home</a></li>
                            <li><a href="shop.html" class="text-2xl text-white hover:text-red-500 transition-colors">Shop</a></li>
                            <li><a href="about.html" class="text-2xl text-white hover:text-red-500 transition-colors">About</a></li>
                            <li>
                                <a href="cart.html" class="text-2xl text-white hover:text-red-500 transition-colors flex gap-1 items-center">
                                    Cart 
                                    <span class="mt-1 relative">
                                        <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                        </svg>
                                        ${hasItems ? `<span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>` : ""}
                                    </span>
                                </a>
                            </li>
                            ${isLoggedIn ? '<li><a href="dashboard.html" class="text-2xl text-white hover:text-red-500 transition-colors">Dashboard</a></li>' : ""}
                        </ul>
                    </nav>
                    <div class="flex flex-col items-center space-y-4 w-full px-8">
                        ${
                          isLoggedIn
                            ? `<a href="#" id="mobileLogoutBtn" class="w-full max-w-xs text-center py-3 px-6 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white transition-all">
                                Logout
                            </a>`
                            : `<a href="login.html" class="w-full max-w-xs text-center py-3 px-6 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 transition-all">
                                Sign In
                            </a>
                            <a href="register.html" class="w-full max-w-xs text-center py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all">
                                Register
                            </a>`
                        }
                    </div>
                </div>
            </div>

            <!-- Desktop Navigation (Hidden on mobile) -->
            <div class="hidden lg:flex lg:items-center gap-10">
                <nav>
                    <ul class="flex gap-10">
                        <li class="header-nav-link"><a href="index.html">Home</a></li>
                        <li class="header-nav-link"><a href="shop.html">Shop</a></li>
                        <li class="header-nav-link"><a href="about.html">About</a></li>
                        <li class="header-nav-link">
                            <a href="cart.html" class="flex items-center gap-1">
                                Cart 
                                <span class="mt-1 relative">
                                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                    </svg>
                                    ${
                                      hasItems
                                        ? `
                                        <span class="absolute -top-3 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                            ${cart.length}
                                        </span>
                                    `
                                        : ""
                                    }
                                </span>
                            </a>
                        </li>
                        ${isLoggedIn ? '<li class="header-nav-link"><a href="dashboard.html">Dashboard</a></li>' : ""}
                    </ul>
                </nav>
                <nav>
                    <ul class="flex gap-5">
                        ${
                          isLoggedIn
                            ? `<li>
                                <a href="#" id="logoutBtn" class="flex gap-2 items-center text-base font-normal py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/>
                                    </svg>
                                    Logout
                                </a>
                            </li>`
                            : `<li>
                                <a href="login.html" class="flex gap-2 items-center text-base font-normal py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 transition-all duration-200 shadow-md hover:shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                                    </svg>
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <a href="register.html" class="flex gap-2 items-center text-base font-normal py-2 px-4 rounded-lg bg-blue-800 hover:bg-blue-900 text-gray-200 transition-all duration-200 shadow-md hover:shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                                    </svg>
                                    Register
                                </a>
                            </li>`
                        }
                    </ul>
                </nav>
            </div>
        </div>
    `;

  // Mobile menu toggle functionality
  const hamburger = header_container.querySelector("#hamburger");
  const mobileHeader = header_container.querySelector("#mobileHeader");
  const closeMobileMenu = header_container.querySelector("#closeMobileMenu");

  hamburger?.addEventListener("click", () => {
    mobileHeader.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  closeMobileMenu?.addEventListener("click", () => {
    mobileHeader.classList.add("hidden");
    document.body.style.overflow = "";
  });

  // Close mobile menu when clicking on a link
  mobileHeader?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileHeader.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  // Logout functionality
  const logoutBtn = header_container.querySelector("#logoutBtn");
  const mobileLogoutBtn = header_container.querySelector("#mobileLogoutBtn");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("movieCart");
    window.location.href = "index.html";
  };

  logoutBtn?.addEventListener("click", handleLogout);
  mobileLogoutBtn?.addEventListener("click", handleLogout);
}

export default Header;
