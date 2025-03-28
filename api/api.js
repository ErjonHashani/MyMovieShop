// MOVIES ASYNC FUNCTION
export async function movies(...args) {

    const page = args[0];
    const movies_container=args[1];
    const limit = args[2];

    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${page}`)
    const response = await request.json()

    const movies = (limit) ? response.results.slice(0,limit) : response.results;
    
    const defaultPoster = 'https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg';

    movies_container.innerHTML = ``;

    for (let movie of movies) {

        const imageUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : defaultPoster;

        movies_container.innerHTML += `
            <div class="bg-gray-800 hover:cursor-pointer hover:scale-105 shadow-gray-700 hover:shadow-xl transition-all duration-200">
                <img src="${imageUrl}" alt="${movie.original_title || 'Untitled'}" class="w-full h-60">
                <div class="p-3">
                <h2 class="text-lg text-white mb-3">${movie.original_title}</h2>
                <div class="flex justify-between text-white">
                <a href="movie.html?id=${movie.id}" class="text-blue-400 hover:text-blue-600">Details</a>
                  <p><span class="text-orange-400 mr-2">IMDB</span>${Math.floor(movie.vote_average * 10) / 10}</p>
                </div>
                </div>
            </div>
            `;
    }
}

// MOVIE BY ID ASYNC FUNCTION 
export async function movie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`;

    const request = await fetch(url)
    const response = await request.json()
    return response;
    
}

// SEARCH ASYNC FUNCTION
export async function search(...args) {

    const query = args[0];
    const movies_container = args[1]

    const request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&query=${query}`)
    const response = await request.json()

    const movies = response.results;
    
    const defaultPoster = 'https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg';

    movies_container.innerHTML = ``;

    for (let movie of movies) {

        const imageUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : defaultPoster;

        movies_container.innerHTML += `
            <div class="bg-gray-800 hover:cursor-pointer hover:scale-105 shadow-gray-700 shadow-sm hover:shadow-xl transition-all duration-200">
                <img src="${imageUrl}" alt="${movie.original_title || 'Untitled'}" class="w-full h-60">
                <div class="p-3">
                <h2 class="text-lg text-white mb-3">${movie.original_title}</h2>
                <div class="flex justify-between text-white">
                <a href="movie.html?id=${movie.id}" class="text-blue-400 hover:text-blue-600">Details</a>
                  <p><span class="text-orange-400 mr-2">IMDB</span>${Math.floor(movie.vote_average * 10) / 10}</p>
                </div>
                </div>
            </div>
            `;
    }
}

export default movies;