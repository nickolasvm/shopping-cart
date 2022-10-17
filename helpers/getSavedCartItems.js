const getSavedCartItems = () => {
  // seu código aqui
  const domElement = JSON.parse(localStorage.getItem('cartItems'));

  if (domElement) {
    return domElement;
  }
  return null;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
