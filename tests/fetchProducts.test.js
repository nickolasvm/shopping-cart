require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  test('se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  test('se argumento for "computador", fetch é chamado', () => {
    
  })

  test('se argumento for "computador", fetch utiliza o endpoint citado', () => {
    // 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
  })

  test('se argumento for "computador", retorna objeto igual à "computadorSearch"', () => {

  })

  test('se não houver argumentos, dispara erro com mensagem específica', () => {
    // 'You must provide an url'
    // new Error('mensagem esperada aqui')
  })
});
