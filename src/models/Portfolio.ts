import { availableStocks } from "../data";
import { getNumberOfYears } from "../utils";

interface PortfolioItem {
  stockName: string;
  quantity: number;
}

class Porftolio {
  stocks: PortfolioItem[];

  constructor(stocks: PortfolioItem[]) {
    this.validateStocks(stocks);
    this.stocks = stocks;
  }

  private validateStocks(stocks: PortfolioItem[]) {
    const availableStockNames = Object.keys(availableStocks);

    stocks.forEach((portfolioItem) => {
      const stockIsAvaliable = availableStockNames.includes(
        portfolioItem.stockName
      );
      if (!stockIsAvaliable)
        throw new Error(`Stock "${portfolioItem.stockName}" is not available.`);
    });
  }

  profit(initialDate: string, finalDate: string) {
    let initialPortfolioValue = 0;
    let finalPortfolioValue = 0;
    const numberOfYears = getNumberOfYears(finalDate, initialDate);

    this.stocks.forEach((portfolioItem) => {
      const stock = availableStocks[portfolioItem.stockName];
      const initialPrice = stock.price(initialDate);
      const finalPrice = stock.price(finalDate);
      initialPortfolioValue += initialPrice * portfolioItem.quantity;
      finalPortfolioValue += finalPrice * portfolioItem.quantity;
    });

    const overallReturn =
      (finalPortfolioValue - initialPortfolioValue) / initialPortfolioValue;

    const annualizedReturn = (1 + overallReturn) ** (1 / numberOfYears) - 1;
    const formattedAnnualizedReturn = `${(annualizedReturn * 100).toFixed(2)}%`;

    return formattedAnnualizedReturn;
  }
}

export default Porftolio;
