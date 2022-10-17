const BASE_SEARCH_URL = 'https://api.mercadolibre.com/sites/MLB';
const SEARCH_ENDPOINT = '/search';

const buildSearchTermUrl = (searchTerm) =>
  `${BASE_SEARCH_URL}${SEARCH_ENDPOINT}?q=${searchTerm}`;

const fetchProducts = async (searchTerm) => {
  const urlToFecth = buildSearchTermUrl(searchTerm);

  try {
    const response = await fetch(urlToFecth);
    const json = await response.json();
    const searchedProducts = json.results;

    const results = searchedProducts.reduce((arr, { price, title, thumbnail, id }) =>
      [...arr, { price, title, thumbnail, id }], []);

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    buildSearchTermUrl,
  };
}
