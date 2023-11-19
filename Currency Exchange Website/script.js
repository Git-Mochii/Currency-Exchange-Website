// Get references to HTML elements
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const amountFromInput = document.getElementById("amount-from");
const amountToInput = document.getElementById("amount-to");
const rateDisplay = document.getElementById("rate");
const swapButton = document.getElementById("swap");

// Define an array of currency codes
const currencies = [
    "AED", // United Arab Emirates Dirham (AED)
    "ARS", // Argentine Peso (ARS)
    "AUD", // Australian Dollar (AUD)
    "BGN", // Bulgarian Lev (BGN)
    "BRL", // Brazilian Real (BRL)
    "BSD", // Bahamian Dollar (BSD)
    "CAD", // Canadian Dollar (CAD)
    "CHF", // Swiss Franc (CHF)
    "CLP", // Chilean Peso (CLP)
    "CNY", // Chinese Yuan (CNY)
    "COP", // Colombian Peso (COP)
    "CZK", // Czech Koruna (CZK)
    "DKK", // Danish Krone (DKK)
    "DOP", // Dominican Peso (DOP)
    "EGP", // Egyptian Pound (EGP)
    "EUR", // Euro (EUR)
    "FJD", // Fijian Dollar (FJD)
    "GBP", // British Pound Sterling (GBP)
    "GTQ", // Guatemalan Quetzal (GTQ)
    "HKD", // Hong Kong Dollar (HKD)
    "HRK", // Croatian Kuna (HRK)
    "HUF", // Hungarian Forint (HUF)
    "IDR", // Indonesian Rupiah (IDR)
    "ILS", // Israeli New Sheqel (ILS)
    "INR", // Indian Rupee (INR)
    "ISK", // Icelandic Króna (ISK)
    "JPY", // Japanese Yen (JPY)
    "KRW", // South Korean Won (KRW)
    "KZT", // Kazakhstani Tenge (KZT)
    "MXN", // Mexican Peso (MXN)
    "MYR", // Malaysian Ringgit (MYR)
    "NOK", // Norwegian Krone (NOK)
    "NZD", // New Zealand Dollar (NZD)
    "PAB", // Panamanian Balboa (PAB)
    "PEN", // Peruvian Nuevo Sol (PEN)
    "PHP", // Philippine Peso (PHP)
    "PKR", // Pakistani Rupee (PKR)
    "PLN", // Polish Złoty (PLN)
    "PYG", // Paraguayan Guarani (PYG)
    "RON", // Romanian Leu (RON)
    "RUB", // Russian Ruble (RUB)
    "SAR", // Saudi Riyal (SAR)
    "SEK", // Swedish Krona (SEK)
    "SGD", // Singapore Dollar (SGD)
    "THB", // Thai Baht (THB)
    "TRY", // Turkish Lira (TRY)
    "TWD", // New Taiwan Dollar (TWD)
    "UAH", // Ukrainian Hryvnia (UAH)
    "USD", // United States Dollar (USD)
    "UYU", // Uruguayan Peso (UYU)
    "VND", // Vietnamese Dong (VND)
    "ZAR", // South African Rand (ZAR)
  ];
  
  
// Populate currency select elements with options
currencies.forEach(currency => {
  const option = document.createElement("option");
  option.value = currency;
  option.textContent = currency;
  if (currency === "USD") {
    option.selected = true;
  }
  fromCurrencySelect.appendChild(option.cloneNode(true));
  toCurrencySelect.appendChild(option);
});

// Function to calculate exchange rates and update the DOM
function calculate() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  
  fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${fromCurrency}`)
    .then(res => res.json())
    .then(data => {
      const exchangeRate = data.conversion_rates[toCurrency];
      rateDisplay.innerText = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
      amountToInput.value = (amountFromInput.value * exchangeRate).toFixed(2);
    });
}

// Event Listeners
fromCurrencySelect.addEventListener('change', calculate);
amountFromInput.addEventListener('input', calculate);
toCurrencySelect.addEventListener('change', calculate);
amountToInput.addEventListener('input', calculate);

swapButton.addEventListener('click', () => {
  [fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value];
  calculate();
});

// Initial calculation on page load
calculate();


