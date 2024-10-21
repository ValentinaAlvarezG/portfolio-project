import Stock from "./models/Stock";

export interface AvailableStocks {
  [key: string]: Stock;
}

export const availableStocks = {
  Tesla: new Stock("Tesla", {
    "01/01/19": 10,
    "01/01/24": 25,
  }),
  Google: new Stock("Google", {
    "01/01/19": 20,
    "01/01/24": 50,
  }),
} as AvailableStocks;
