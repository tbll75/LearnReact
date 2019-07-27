
const API_TOKEN = "ab9b8efb0a68c52edbd885d084ab0423"

export function getFilmsFromApi(text) 
{
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&query=' + text

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error)) 
}