require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  test('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

});
