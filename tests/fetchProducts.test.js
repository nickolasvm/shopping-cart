require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  test('Execute a função com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  test('se, ao chamar a função com o argumento "computador", a função fetch utiliza o endpoint especificado', async () => {
    const expectedUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
  
    expect(fetch).toBeCalledWith(expectedUrl);
  })

  test('se o retorno da função com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    // TODO computadorSearch não esta igual ao retorno da função pois a msm foi tratada
    const actual = await fetchProducts('computador');

    expect(actual).toEqual(computadorSearch);
  })

  test('se, ao chamar a função sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error.message).toBe('You must provide an url');
    }
  })
});