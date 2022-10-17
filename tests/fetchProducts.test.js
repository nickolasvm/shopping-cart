require('../mocks/fetchSimulator');
const { fetchProducts, buildSearchTermUrl } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  test('se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  test('se argumento for "computador", fetch é chamado', async () => {
    await fetchSimulator('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
    // jest.mock('fetchSimulator');
  })

  test('se argumento for "computador", fetch utiliza o endpoint citado', () => {
    const actual = buildSearchTermUrl('computador');
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  
    expect(actual).toBe(expected);
  })

  test('se argumento for "computador", retorna objeto igual à "computadorSearch"', async () => {
    // const actual = await fetchProducts('computador');
    // const expected = computadorSearch;

    // expect(actual).toBe(expected.results);
  })

  test('se não houver argumentos, dispara erro com mensagem específica', () => {
    // 'You must provide an url'
    // new Error('mensagem esperada aqui')
  })
});
