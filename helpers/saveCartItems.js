const CACHE_KEY = 'cartItems';

const saveCartItems = (shoppingCartList) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(shoppingCartList));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
