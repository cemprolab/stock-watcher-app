const baseUrl = new URL('https://www.alphavantage.co/query');
const apiKey = 'HY0JP87WH3PG17X6';

/**
 * Will only return the data from alphavantage if it contains the stock quote info.
 * Note that alphavantage only allows 5 api requests per minute up to 500 requests per day.
 * @param symbol
 * @returns {Promise<any>}
 */
export const getGlobalQuoteBySymbol = (symbol) => {
    if (typeof symbol !== 'string' || symbol.length < 1) {
        throw new Error("symbol must be a string with a length greater than 0")
    }

    return getApiData(symbol);
}
const getApiData = (symbol) => {
    let url = baseUrl
    url.search = new URLSearchParams({function: 'GLOBAL_QUOTE', symbol, 'apikey': apiKey} ).toString();

    return fetch(url.toString(), {method: 'GET'})
        .then(response => response.json())
        .then(x => x['Global Quote'] || {})
        .catch(error => console.warn(error));
}

