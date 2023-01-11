{
    const pickExchange = (endingCurrency) => {
        const EUR_exchange = 4.6709;
        const USD_exchange = 4.397;
        const GBP_exchange = 5.2892;
        const CHF_exchange = 4.7437;

        switch (endingCurrency) {
            case "EUR":
                return EUR_exchange;
            case "USD":
                return USD_exchange;
            case "GBP":
                return GBP_exchange;
            case "CHF":
                return CHF_exchange;
            default:
                return 1;
        }
    };

    const turnIntoPLN = (startingCurrency, startingAmount) => {
        const PLN_USD_exchange = 0.2274;
        const PLN_EUR_exchange = 0.2141;
        const PLN_GBP_exchange = 0.1891;
        const PLN_CHF_exchange = 0.2108;

        switch (startingCurrency) {
            case "EUR":
                return startingAmount / PLN_EUR_exchange;
            case "USD":
                return startingAmount / PLN_USD_exchange;
            case "GBP":
                return startingAmount / PLN_GBP_exchange;
            case "CHF":
                return startingAmount / PLN_CHF_exchange;
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

        updateResultTextFirst(startingCurrency, calculateResult (calculateResult(turnIntoPLN(startingCurrency, startingAmount), pickExchange(endingCurrency)), startingAmount), endingCurrency);
        updateResultTextSecond(endingCurrency, calculateResult(turnIntoPLN(startingCurrency, startingAmount), pickExchange(endingCurrency)));

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
