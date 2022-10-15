const BASE_ID_URL = 'https://api.mercadolibre.com/items';

const buildSearchIdUrl = (id) =>
  `${BASE_ID_URL}/${id}`;

const fetchItem = async (id) => {
  const urlToFecth = buildSearchIdUrl(id);

  try {
    const response = await fetch(urlToFecth);
    const json = await response.json();
    const { title, thumbnail, price } = json;

    return { title, thumbnail, price, id };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}