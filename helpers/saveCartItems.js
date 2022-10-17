const CACHE_KEY = 'cartItems';

const saveCartItems = (shoppingCartList) => {
  // seu código aqui
  localStorage.clear();
  localStorage.setItem(CACHE_KEY, JSON.stringify(shoppingCartList.innerHTML));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
