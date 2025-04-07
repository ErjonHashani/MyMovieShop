// Module to export the Footer component

function Footer(footer_container) {
  footer_container.innerHTML = `
        <div class="container mx-auto px-16 py-7">
      <div class="text-white flex justify-between items-center">
        <!-- Title and info -->
        <div class="w-80">
          <h1 class="text-xl">My Movie Shop</h1>
          <p class="mt-3 text-sm">Your ultimate destination for the latest blockbusters, timeless classics, and
            exclusive collector's
            editions. Enjoy high-quality streaming or fast delivery for physical copies.</p>
        </div>
        <!-- Movies -->
        <div class="flex flex-col">
          <a href="shop.html" class="text-xl hover:text-orange-600 duration-200">Movies</a>
          <ul class="mt-3 text-sm">
            <li>Action-packed thrillers</li>
            <li>Award-winning dramas</li>
            <li>Family-friendly animations</li>
            <li class="text-orange-600">Exclusive behind-the-scenes footage</li>
          </ul>
        </div>
        <!-- Shop -->
        <div class="self-baseline bg-white hover:scale-105 duration-500"><a href="cart.html"
            class="flex justify-center items-center gap-2 text-gray-700 py-2 px-3">Purchase now <svg
              class="size-4 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg></a></div>
      </div>
      <div class="border-t border-gray-600 mt-12 pt-6">
        <p class="text-white text-sm text-center">
          &copy; 2025 My Movie Shop. All rights reserved.
        </p>
      </div>
    </div>
    `;
}

export default Footer;
