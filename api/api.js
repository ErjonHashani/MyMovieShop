// MOVIES ASYNC FUNCTION
export async function movies(...args) {
  const page = args[0];
  const movies_container = args[1];
  const limit = args[2];

  const request = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${page}`
  );
  const response = await request.json();

  const movies = limit ? response.results.slice(0, limit) : response.results;

  const defaultPoster =
    "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";

  movies_container.innerHTML = ``;

  for (let movie of movies) {
    const imageUrl = movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
      : defaultPoster;

    movies_container.innerHTML += `
  <div class="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-500 hover:-translate-y-2">
    <!-- Glow Effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
    
    <!-- Poster Container with Shine Effect -->
    <div class="relative h-72 overflow-hidden rounded-t-xl">
      <a href="movie.html?id=${movie.id}" class="block h-full">
        <!-- Image with parallax effect container -->
        <div class="h-full w-full overflow-hidden">
          <img 
            src="${imageUrl}" 
            alt="${movie.original_title || "Untitled"}" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          >
        </div>
        <!-- Cinematic overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <!-- Shine effect on hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%]"></div>
      </a>
      
      <!-- Premium badge -->
      ${
        movie.vote_average > 7.5
          ? `
        <div class="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center shadow-lg z-10">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
          </svg>
          Premium
        </div>
      `
          : ""
      }
    </div>

    <!-- Content -->
    <div class="p-4 relative z-10">
      <div class="flex justify-between items-start mb-2">
        <!-- Title with animated underline -->
        <h2 class="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
          <a href="movie.html?id=${movie.id}" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-red-500 group-hover:after:w-full after:transition-all after:duration-300">
            ${movie.original_title}
          </a>
        </h2>
        <!-- Year in pill -->
        <span class="bg-gray-800 text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
          ${movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
        </span>
      </div>

      <!-- Rating and action buttons -->
      <div class="flex justify-between items-center mt-4">
        <!-- Rating with animated fill -->
        <div class="flex items-center">
          <div class="relative w-12 h-12 mr-2">
            <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
              <path 
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#2a2a2a"
                stroke-width="3"
              />
              <path 
                class="rating-circle"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#FFD43B"
                stroke-width="3"
                stroke-dasharray="${(movie.vote_average / 10) * 100}, 100"
              />
            </svg>
            <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold text-white">
              ${movie.vote_average ? Math.floor(movie.vote_average * 10) / 10 : "N/A"}
            </span>
          </div>
          <span class="text-sm text-gray-400">IMDb</span>
        </div>

        <!-- Play button with pulse effect -->
        <a 
          href="movie.html?id=${movie.id}" 
          class="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-all duration-300 group-hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
          aria-label="Watch ${movie.original_title}"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
          <span class="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"></span>
        </a>
      </div>
    </div>
  </div>
`;
  }
}

// MOVIE BY ID ASYNC FUNCTION
export async function movie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`;

  const request = await fetch(url);
  const response = await request.json();
  return response;
}

// SEARCH ASYNC FUNCTION
export async function search(query, movies_container) {
  const request = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&query=${query}`
  );
  const response = await request.json();

  const movies = response.results;

  const defaultPoster =
    "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";

  movies_container.innerHTML = "";

  if (movies.length === 0) {
    movies_container.innerHTML = `
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      padding: 40px;
      color: #9ca3af;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      background-color: #1f2937;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
      No results found.
    </div>
  `;
    return;
  }

  for (let movie of movies) {
    const imageUrl = movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
      : defaultPoster;

    movies_container.innerHTML += `
            <div class="group bg-gray-800 shadow-gray-700 hover:shadow-lg rounded-xl">
                <div class="relative overflow-hidden h-60 rounded-tl-xl rounded-tr-xl">
                    <a href="movie.html?id=${movie.id}">
                        <img src="${imageUrl}" alt="${movie.original_title || "Untitled"}" class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500">
                    </a>
                </div>
                <div class="p-3">
                    <div class="flex justify-between">
                        <h2 class="text-lg font-semibold text-gray-200 mb-3 pr-10 line-clamp-1">${movie.original_title}</h2>
                        <p class="text-gray-500 text-lg">${movie.release_date ? movie.release_date.substring(0, 4) : ""}</p>
                    </div>
                    <div class="flex justify-between text-gray-200">
                        <a href="movie.html?id=${movie.id}" class="text-lg duration-150 flex gap-1 items-center">
                            <div class="text-gray-300 hover:bg-gray-700 duration-200 bg-transparent p-2 border-1 rounded-full"><svg class="w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"/></svg></div>
                        </a>
                        <div class="flex items-center gap-1">
                            <div><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></div>
                            <span class="text-gray-200/90">${Math.floor(movie.vote_average * 10) / 10}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

export default movies;
