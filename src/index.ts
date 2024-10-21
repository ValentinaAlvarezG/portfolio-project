import Porftolio from "./models/Portfolio";

const initialDate = "01/01/19";
const finalDate = "01/01/24";
const portfolioItems = [
  { stockName: "Tesla", quantity: 100 },
  { stockName: "Google", quantity: 50 },
];

try {
  const portfolio = new Porftolio(portfolioItems);
  const profit = portfolio.profit(initialDate, finalDate);
  console.log(`The annualized return of the portfolio is ${profit}`);
} catch (error) {
  console.error((error as Error).message);
}
