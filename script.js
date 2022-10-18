// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const SEARCH_TERM = 'computador';
const CART_ITEMS = '.cart__items';

const displayLoading = (sectionToLoad) => {
  const loading = document.createElement('span');
  loading.className = 'loading';
  loading.innerText = 'carregando...';

  sectionToLoad.appendChild(loading);
};

const hideLoading = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const sumCartItemsValues = (cartList) => {
  const domElement = document.querySelector('.total-price');

  const listArray = [...cartList.children];
  let sum = 0;

  listArray.forEach((item) => {
    const price = Number(item.innerText.split('$')[1]);
    sum += price;
  });

  domElement.innerHTML = sum;
};

const excludeItemCart = (event) => {
  const { target } = event;
  const actualClass = target.className;

  if (actualClass === 'item__image') {
    target.parentElement.remove();
  } else {
    target.remove();
  }

  const cartList = document.querySelector(CART_ITEMS);
  sumCartItemsValues(cartList);
  localStorage.clear();
  saveCartItems(cartList.innerHTML);
};

const cleanCart = () => {
  const cartList = document.querySelector('.cart__items');
  const Items = cartList.children;

  const listArray = [...Items];
  listArray.forEach((item) =>
    item.remove());
  sumCartItemsValues(cartList);
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => {
  const pathProductId = product.target.parentElement.children[0];
  const id = pathProductId.innerText;
  
  return id;
};

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price, thumbnail }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;

  li.appendChild(createProductImageElement(thumbnail));
  li.addEventListener('click', (event) =>
    excludeItemCart(event));

  return li;
};

const handleFetchItem = ({ title, thumbnail, price, id }) =>
 ({ title, thumbnail, price, id });

const addItemToCart = async (event) => {
  const productId = getIdFromProductItem(event);
  const productJson = await fetchItem(productId);
  const product = handleFetchItem(productJson);

  const cartList = document.querySelector(CART_ITEMS);
  cartList.appendChild(createCartItemElement(product));

  sumCartItemsValues(cartList);
  localStorage.clear();
  saveCartItems(cartList.innerHTML);
};

const addLocalStorageCartItems = () => {
  const cartList = document.querySelector(CART_ITEMS);
  const cartItems = JSON.parse(getSavedCartItems());
  cartList.innerHTML = cartItems;
  
  const cartArray = Array.from(cartList.children);
  cartArray.forEach((item) =>
    item.addEventListener('click', excludeItemCart));
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);

  e.className = className;
  e.innerText = innerText;

  if (element === 'button') {
    e.addEventListener('click', (event) =>
      addItemToCart(event));
  }
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const handleFetchProducts = (jsonObj) => {
  const searchedProducts = jsonObj.results;

  const results = searchedProducts.reduce((arr, { price, title, thumbnail, id }) =>
    [...arr, { price, title, thumbnail, id }], []);
  
  return results;
};

const handleSearchProducts = async (searchTerm) => {
  const itemsSection = document.querySelector('.items');
  displayLoading(itemsSection);

  const jsonObj = await fetchProducts(searchTerm);
  const productsArray = handleFetchProducts(jsonObj);

  hideLoading();

  productsArray.forEach((obj) => {
    const item = createProductItemElement(obj);
    itemsSection.appendChild(item);
  });
};

const setHtmlElements = () => {
  const cleanCartButton = document.querySelector('.empty-cart');
  cleanCartButton.addEventListener('click', cleanCart);
};

window.onload = () => {
  addLocalStorageCartItems();
  setHtmlElements();
  handleSearchProducts(SEARCH_TERM);
};