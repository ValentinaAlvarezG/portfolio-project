interface PriceDate {
  [key: string]: number;
}

class Stock {
  name: string;
  prices: PriceDate;

  constructor(name: string, prices: PriceDate) {
    this.name = name;
    this.prices = prices;
  }

  price(date: string) {
    const priceValue = this.prices[date];
    if (priceValue === undefined)
      throw new Error(
        `There is no data for the stock ${this.name} on ${date}.`
      );
    return priceValue;
  }
}

export default Stock;
