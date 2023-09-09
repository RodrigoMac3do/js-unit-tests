/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

const productDetails = (firstProduct, secondProduct) => {
  const products = [firstProduct, secondProduct];
  const result = [];

  products.forEach((product) => {
    result.push({
      name: product,
      details: {
        productId: `${product}123`,
      },
    });
  });

  return result;
};

module.exports = productDetails;
