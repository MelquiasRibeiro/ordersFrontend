export const formatPriceToBRL = (price: number) => {
    const config = {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'symbol',
    };

   return price.toLocaleString('pt-BR', config);
  };

  export const formatPriceToUSD = (price: number) => {
    const config = {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol',
    };

   return price.toLocaleString('pt-BR', config);
  };