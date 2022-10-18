require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
 test('se executada com o argumento do item "MLB1615760527", fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  test('se, ao chamar a função com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint declarado', async () => {
    const expectedUrl = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
  
    expect(fetch).toBeCalledWith(expectedUrl);
  });

  test('se o retorno da função com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const actual = await fetchItem('MLB1615760527');

    expect(actual).toEqual(item);
  });

  test('se, ao chamar a função sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error.message).toBe('You must provide an url')
    }
  });
});
