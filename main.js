const quotes = [
    "Luke, I am your father.",
    "Here's Jonny!",
    "They not like us",
    "Hello"
];

const authors = [
    "Darth Vader",
    "Jack Torrance",
    "Kendrick Lamar",
    "Nathan"
]

const text = document.getElementById("text");
const author = document.getElementById("author");
const button = document.getElementById("new-quote");

let randomNum = Math.floor(Math.random() * 4);

text.innerText = quotes[randomNum];
author.innerText = authors[randomNum];