let quoteButton = document.querySelector(".btn");
let output = document.querySelector(".output");
let quotes = [
    `“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
    `“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`,
    `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain`,
    `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`,
    `“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale`
]

quoteButton.addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
})