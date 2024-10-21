# Portfolio

### Overview

This is a simple portfolio project that calculates the annualized return of a given portfolio between two dates.

Code structure:

```
├── src
│ ├── data.ts         # Definition of the prices by date of each available stock
│ ├── index.ts        # Main file. Calls the profit method of the created portfolio
│ ├── models
│ │ ├── Portfolio.ts  # Class Portfolio with the "Profit" method
│ │ └── Stock.ts      # Class Stock with the "Price" method
│ └── utils
│ └── index.ts        # Utility functions
```

To understand how to calculate the annualized return, I followed the logic described [here.](https://www.indeed.com/career-advice/career-development/how-to-calculate-annualized-return)

### Prerequisites

- Docker

### Installing and running the project

1. Set the data in `src/data.ts` by changing the `availableStocks` and their prices by date.

2. In `src/index.ts`, set the following variable values:

   - `initialDate` (e.g., "01-01-19")
   - `finalDate` (e.g., "01-01-24")
   - `portfolioItems` (e.g., `{ "Tesla": 100, "Google": 50 }`)

3. Run the following commands:

```
docker build -t portfolio-app .
docker run --rm portfolio-app
```

The message with the annualized return of the portfolio will be shown in the console.
