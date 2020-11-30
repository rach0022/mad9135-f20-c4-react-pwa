const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/'
const COCKTAIL_LIST = '/filter.php?i='
const COCKTAIL_BY_ID = '/lookup.php?i='
const RANDOM_COCKTAIL = '/random.php'
const API_KEY = '1'

/**
 * Private function to make the actual `fetch()` call to the API
 * @param String getList - either get the cocktail list or cocktail by id
 * @param String search - the id or the ingrediant name 
 */
export async function fetchCocktail({ getList = null, search = null, random = null }) {
    // create the url based on the type and parameter
    let url = `${BASE_URL}${API_KEY}`
    url += (getList) ? COCKTAIL_LIST : COCKTAIL_BY_ID
    url += `${search}`

    // if random is set then reqrite the link to the random cocktail link
    if (random) {
        url = `${BASE_URL}${API_KEY}${RANDOM_COCKTAIL}`
    }

    // make the fetch call and throw an error if it fails
    const response = await fetch(url)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}

export default fetchCocktail