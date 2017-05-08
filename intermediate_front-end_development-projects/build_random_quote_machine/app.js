var quote = [
    "If you can dream it, you can do it.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "It's kind of fun to do the impossible.",
    "The way to get started is to quit talking and begin doing.",
    "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.",
    "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you.",
    "You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.",
    "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    "When you're curious, you find lots of interesting things to do.",
    "Disneyland will never be completed. It will continue to grow as long as there is imagination left in the world."
];

tweetUrl = "";
var forShareQuote = "";
var randomQuote = quote[0];

function getQuote() {
    randomQuote = quote[Math.floor(Math.random() * quote.length)];
    document.getElementById("quoteDisplay").innerHTML = randomQuote;
}

function shareQuote() {
    forShareQuote = randomQuote;
    console.log(randomQuote);
    tweetUrl = "https://twitter.com/intent/tweet?text=" + randomQuote;
    document.getElementById('tweet-share').setAttribute("href", tweetUrl);
}
