const BASE_ID_URL = 'https://api.mercadolibre.com/items';

const buildSearchIdUrl = (id) =>
  `${BASE_ID_URL}/${id}`;

const fetchItem = async (id) => {
  const urlToFecth = buildSearchIdUrl(id);

  try {
    const response = await fetch(urlToFecth);
    const json = await response.json();

    return json;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}