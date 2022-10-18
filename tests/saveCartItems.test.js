const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const argument = '<li class="cart__item">ID: undefined | TITLE: Notebook Multilaser M11w Prime Pc280 Prateada Táctil 11.6 , Intel Celeron N4020  4gb De Ram 64gb Ssd, Intel Uhd Graphics 600 1366x768px Windows 11 Home | PRICE: $1285.9<img class="item__image" src="http://http2.mlstatic.com/D_626936-MLA50293629492_062022-I.jpg"></li><li class="cart__item">ID: undefined | TITLE: Cpu Pc Gamer Core I7 10ª / 32gb / Ssd 480 / Hd 1tb / 1050ti | PRICE: $6650<img class="item__image" src="http://http2.mlstatic.com/D_661801-MLB52002851677_102022-I.jpg"></li><li class="cart__item">ID: undefined | TITLE: Monitor Philips V 193v5lsb2 Led 18.5&nbsp;  Preto 100v/240v | PRICE: $569.31<img class="item__image" src="http://http2.mlstatic.com/D_711091-MLA32045209811_092019-I.jpg"></li>'

  test('se, ao executar a função, o método localStorage.setItem é chamado', () => {
    saveCartItems(argument);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('se, ao executar a função com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems(argument);
    expect(localStorage.setItem).toBeCalledWith('cartItems', JSON.stringify(argument));
  });
});
