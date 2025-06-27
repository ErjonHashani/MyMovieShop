// slider.js
const images = [
  "./assets/images/black-widow.webp",
  "./assets/images/dark-knight.jpg",
  "./assets/images/captain-marvel.jpg",
  "./assets/images/the-gorge.jpg",
  "./assets/images/dune-part-2.jpg",
  "./assets/images/mad-max.jpg",
];

let activeIndex = 0;
let intervalId;

export default function Slider(container) {
  container.innerHTML = `
  <div class="relative w-full overflow-hidden bg-black h-[170px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[450px]">
    <div id="slider-track" class="flex transition-transform duration-700 ease-in-out w-full h-full">
      ${images
        .map(
          (src) => `
        <img src="${src}" alt="slider image" class="w-full flex-shrink-0 object-cover h-full" />
      `
        )
        .join("")}
    </div>

    <!-- Arrows -->
    <button id="prev"
      class="absolute left-0 top-0 bottom-0 z-10 bg-black/20 hover:bg-black/90 text-white w-16 md:w-20 flex items-center justify-center focus:outline-none">
      &#10094;
    </button>
    <button id="next"
      class="absolute right-0 top-0 bottom-0 z-10 bg-black/20 hover:bg-black/90 text-white w-16 md:w-20 flex items-center justify-center focus:outline-none">
      &#10095;
    </button>
  </div>
`;

  const track = container.querySelector("#slider-track");
  const total = images.length;

  function updateSlide() {
    const offset = -activeIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  function next() {
    activeIndex = (activeIndex + 1) % total;
    updateSlide();
  }

  function prev() {
    activeIndex = (activeIndex - 1 + total) % total;
    updateSlide();
  }

  function startAutoSlide() {
    intervalId = setInterval(next, 4000);
  }

  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  container.querySelector("#next").addEventListener("click", () => {
    next();
    resetAutoSlide();
  });

  container.querySelector("#prev").addEventListener("click", () => {
    prev();
    resetAutoSlide();
  });

  updateSlide();
  startAutoSlide();
}
