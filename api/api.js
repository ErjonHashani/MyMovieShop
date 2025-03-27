export async function movies(...args) {
    const request = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0')
    const response = await request.json()
    return response;
}

export default movies;