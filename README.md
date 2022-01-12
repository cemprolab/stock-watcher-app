# Stock Watcher

Your task is to help complete a simple web application which allows a user to add basic stock
tickers to a dashboard.  To add a stock, the user enters the symbol of their
desired stock (e.g. `GOOG`, `YHOO`, or `AAPL`) into a text field. When they
click "Add Stock" the basic stock data is added to the dashboard.

Follow the provided design mocks.

To deliver your code, create a repo on GitHub (accounts are free) and email us a
link.

## Instructions:
you may use your favorite IDE, but we recommend ether PHPStorm or Visual Studio Code
### Setting up the environment
-   to get started ensure that node version 14 or higher is installed on your computer. The instructions can be found [here](https://nodejs.org/en/)
-   open a command window and navigate to the root directory of this project (the directory which contains the `package.json` file) and run `npm install`
-   run `npm run build` to run webpack and create the dist folder
-   run `npm start` in order to start a server and view the running application
-   if the application doesn't run at this point please contact us so we can fix it as soon as possible (this wouldn't be part of the test);

### Tasks
- [ ] Use variables from `./src/variables.scss` for all colors instead of inline values
- [ ] Add styles to `./src/Main/main.scss` so that the application matches the design
- [ ] Complete the `mainView.on("stockSearch"...` callback function in `./src/index.js`
- [ ] Alphavantage returns a 200 response even in the cases that the symbol input by the user is not found, or we've exceeded the max number of requests allowed - please handle these responses and any other unexpected response gracefully.
- [ ] Complete the `formatMoney` function in `./src/StockQuote/StockQuoteView.js`
- [ ] Add any JS, CSS or HTML necessary to display the graph portion of the StockQuoteCard.

## Some helpful notes:
-   Match the provided design, and ensure it’s responsive/adaptive as the screen
    size changes.
-   Record any questions you would have liked to ask a designer at any point in
    the process.

## What we look for:

-   Well-structured, semantic HTML.
-   Organized, well-named, modern CSS.
-   Organized JavaScript that’s easy to read.
-   A responsive realization of the provided design.
-   Handling of edge cases (e.g. What happens if the user attempts to add a
    stock symbol that doesn’t exist?).


## What you'll need:

-   **API:** <https://www.alphavantage.co/documentation/>
-   **API Key:** `HY0JP87WH3PG17X6`
-   **Designs:** Available in the [design] folder.

[Open Sans]: https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans:400,600,800
[design]: ./design
