const quotes = [
    {
        name: 'Winston Churchill',
        quote:'Success consists of going from failure to failure without loss of enthusiasm.'
    },
    {
        name: 'Winston Churchill',
        quote: 'You have enemies? Good. That means you’ve stood up for something, sometime in your life.'
    },
    {
        name: 'name here',
        quote: 'something, sometime in your life.'
    },
    {
        name: 'other name here',
        quote: 'stood up for something'
    }
]

const quotesBtn = document.querySelector('#quotesBtn');
const quoteAuther = document.querySelector('#quoteAuther');
const quote = document.querySelector('#quote');

quotesBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuther.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    //console.log(number);
}

