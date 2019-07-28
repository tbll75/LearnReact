
const API_TOKEN = "ab9b8efb0a68c52edbd885d084ab0423"

export function getFilmsFromApi(text, page) 
{
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&query=' + text + '&page=' + page

    console.log("Calling: " + url)
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error)) 
}

export function getImageUrlFromApi(text)
{
    return "https://image.tmdb.org/t/p/w500/" + text
}