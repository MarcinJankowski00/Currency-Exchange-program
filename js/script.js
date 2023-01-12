{
    const pickExchange = (endingCurrency) => {
        const eurExchange = 4.6709;
        const usdExchange = 4.397;
        const gbpExchange = 5.2892;
        const chfExchange = 4.7437;

        switch (endingCurrency) {
            case "EUR":
                return eurExchange;
            case "USD":
                return usdExchange;
            case "GBP":
                return gbpExchange;
            case "CHF":
                return chfExchange;
            default:
                return 1;
        }
    };

    const turnIntoPLN = (startingCurrency, startingAmount) => {
        const plnUsdExchange = 0.2274;
        const plnEurExchange = 0.2141;
        const plnGbpExchange = 0.1891;
        const plnChfExchange = 0.2108;

        switch (startingCurrency) {
            case "EUR":
                return startingAmount / plnEurExchange;
            case "USD":
                return startingAmount / plnUsdExchange;
            case "GBP":
                return startingAmount / plnGbpExchange;
            case "CHF":
                return startingAmount / plnChfExchange;
            default:
                return startingAmount;
        }
    };
    
    const calculateResult = (amount, exchange) => {
        return amount / exchange;
    };

    const updateResultTextFirst = (startingCurrency, exchangeOut, endingCurrency) => {
        const exchangeOutElement = document.querySelector(".js-exchangeOut");
        exchangeOutElement.innerText = "1 " + startingCurrency + " = " + exchangeOut.toFixed(4) + " " + endingCurrency;
    };

    const updateResultTextSecond = (endingCurrency, endingAmount) => {
        const endingAmountOutElement = document.querySelector(".js-endingAmountOut");
        endingAmountOutElement.innerText = endingCurrency + ": " + endingAmount.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const startingAmountElement = document.querySelector(".js-startingAmount");
        const startingCurrencyElement = document.querySelector(".js-startingCurrency");
        const endingCurrencyElement = document.querySelector(".js-endingCurrency");
        const startingAmount = startingAmountElement.value;
        const startingCurrency = startingCurrencyElement.value;
        const endingCurrency = endingCurrencyElement.value;

        const plnValue = turnIntoPLN(startingCurrency, startingAmount);

        updateResultTextFirst(startingCurrency, calculateResult (calculateResult(plnValue, pickExchange(endingCurrency)), startingAmount), endingCurrency);
        updateResultTextSecond(endingCurrency, calculateResult(plnValue, pickExchange(endingCurrency)));

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
