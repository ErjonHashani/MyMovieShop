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
            <div class="group bg-gray-800 shadow-gray-700 hover:shadow-lg rounded-xl">
                <div class="relative overflow-hidden h-60 rounded-tl-xl rounded-tr-xl">
                    <img src="${imageUrl}" alt="${movie.original_title || 'Untitled'}" class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-3">
                    <h2 class="text-lg font-semibold text-gray-200 mb-3">${movie.original_title}</h2>
                <div class="flex justify-between text-gray-200">
                    <a href="movie.html?id=${movie.id}" class="text-lg text-blue-400 hover:text-blue-600 duration-150 flex gap-1 items-center">
                        
                        <span>Details</span>
                        <div class="text-blue-500 bg-white rounded-full"><svg class="w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></div>
                    </a>
                    <div class="flex items-center gap-1">
                        <div><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></div>
                    <span>${Math.floor(movie.vote_average * 10) / 10}</span>
                </div>
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
            <div class="group bg-gray-800 shadow-gray-700 hover:shadow-lg rounded-xl">
                <div class="relative overflow-hidden h-60 rounded-tl-xl rounded-tr-xl">
                    <img src="${imageUrl}" alt="${movie.original_title || 'Untitled'}" class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-3">
                    <h2 class="text-lg font-semibold text-gray-200 mb-3">${movie.original_title}</h2>
                <div class="flex justify-between text-gray-200">
                    <a href="movie.html?id=${movie.id}" class="text-lg text-blue-400 hover:text-blue-600 duration-150 flex gap-1 items-center">
                        
                        <span>Details</span>
                        <div class="text-gray-300 bg-blue-700 rounded-full"><svg class="w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></div>
                    </a>
                    <div class="flex items-center gap-1">
                        <div><svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></div>
                    <span>${Math.floor(movie.vote_average * 10) / 10}</span>
                </div>
                </div>
                </div>
            </div>
            `;
    }
}

export default movies;