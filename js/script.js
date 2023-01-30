{
    const calculateResult = (startingCurrency, endingCurrency, startingAmount) => {
        const exchanges = {
            EUR: 4.6709,
            USD: 4.397,
            GBP: 5.2892,
            CHF: 4.7437,
            PLN: 1
        };
        return startingAmount * exchanges[startingCurrency] / exchanges[endingCurrency];
    }

    const calculateExchange = (endingAmount, startingAmount) => {
        return endingAmount / startingAmount;
    };

    const updateResultTextFirst = (startingCurrency, exchangeOut, endingCurrency) => {
        const exchangeOutElement = document.querySelector(".js-exchangeOut");
        exchangeOutElement.innerText = `1 ${startingCurrency} = ${exchangeOut.toFixed(4)} ${endingCurrency}`;
    };

    const updateResultTextSecond = (endingCurrency, endingAmount) => {
        const endingAmountOutElement = document.querySelector(".js-endingAmountOut");
        endingAmountOutElement.innerText = `${endingCurrency}: ${endingAmount.toFixed(2)}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const startingAmountElement = document.querySelector(".js-startingAmount");
        const startingCurrencyElement = document.querySelector(".js-startingCurrency");
        const endingCurrencyElement = document.querySelector(".js-endingCurrency");
        const startingAmount = startingAmountElement.value;
        const startingCurrency = startingCurrencyElement.value;
        const endingCurrency = endingCurrencyElement.value;

        const Result = calculateResult(startingCurrency, endingCurrency, startingAmount);

        updateResultTextFirst(startingCurrency, calculateExchange(Result, startingAmount), endingCurrency);
        updateResultTextSecond(endingCurrency, Result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
