/* Zmienne wejściowe*/
let startingCurrencyElement = document.querySelector(".js-startingCurrency");
let endingCurrencyElement = document.querySelector(".js-endingCurrency");
let startingAmountElement = document.querySelector(".js-startingAmount");
let formElement = document.querySelector(".js-form");
/* Zmienne na wyjście */
let exchangeOutElement = document.querySelector(".js-exchangeOut");
let endingAmountOutElement = document.querySelector(".js-endingAmountOut");
/* Aktualne kursy walut i inne zmienne */
/* Kursy PLN/X */
let EUR_exchange = 4.6709;
let USD_exchange = 4.397;
let GBP_exchange = 5.2892;
let CHF_exchange = 4.7437;
/* Kursy X/PLN */
let PLN_USD_exchange = 0.2274;
let PLN_EUR_exchange = 0.2141;
let PLN_GBP_exchange = 0.1891;
let PLN_CHF_exchange = 0.2108;
let exchange = 0;
let endingAmount = 0;
let Amount = 0;
let exchangeOut = 0;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let startingCurrency = startingCurrencyElement.value;
    let endingCurrency = endingCurrencyElement.value;
    let startingAmount = startingAmountElement.value;
    /* Przypisuję kurs PLN/X do zmiennej "exchange" w zależności jaka waluta wyjściowa została wybrana */
    switch (endingCurrency) {
        case "EUR":
            exchange = EUR_exchange;
            break;
        case "USD":
            exchange = USD_exchange;
            break;
        case "GBP":
            exchange = GBP_exchange;
            break;
        case "CHF":
            exchange = CHF_exchange;
            break;
        default:
            exchange = 1;
    }
    /* Zamieniam walutę wejściową na PLN */
    switch (startingCurrency) {
        case "EUR":
            Amount = startingAmount / PLN_EUR_exchange;
            break;
        case "USD":
            Amount = startingAmount / PLN_USD_exchange;
            break;
        case "GBP":
            Amount = startingAmount / PLN_GBP_exchange;
            break;
        case "CHF":
            Amount = startingAmount / PLN_CHF_exchange;
            break;
        default:
            Amount = startingAmount;
    }
    /* Obliczam kwotę wyjściową i kurs */
    endingAmount = Amount / exchange;
    exchangeOut = endingAmount / startingAmount;

    /* Zaokrąglanie */
    endingAmount = endingAmount.toFixed(2);
    exchangeOut = exchangeOut.toFixed(4);

    exchangeOutElement.innerText = "1 " + startingCurrency + " = " + exchangeOut + " " + endingCurrency;
    endingAmountOutElement.innerText = endingCurrency + ": " + endingAmount;
});
