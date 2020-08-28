/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    source: 'Benjamin Franklin',
    citation: '',
    year: '',
  },
  {
    quote: '"In the end, it\'s not the years in your life that count. It\'s the life in your years." ',
    source: 'Abraham Lincoln',
    citation: '',
    year: '',
  },
  {
    quote: '"Never let the fear of striking out keep you from playing the game."',
    source: 'Babe Ruth',
    citation: '',
    year: '',
  },
  {
    quote: '"Don\'t judge each day by the harvest you reap but by the seeds that you plant."',
    source: 'Robert Louis Stevenson',
    citation: '',
    year: '',
  },
  {
    quote: '"The only impossible journey is the one you never begin."',
    source: 'Tony Robbins',
    citation: '',
    year: '',
  },
  {
    quote: '"Life is what happens when you\'re busy making other plans."',
    source: 'John Lennon',
    citation: '',
    year: '',
  },
];

// for (let i = 0; i < quotes.length; i++){
//   console.log(quotes[i].quote)
// }

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let random = Math.floor((Math.random() * quotes.length));
  return quotes[random];
};


/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote = getRandomQuote()
  let HTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="quote">${randomQuote.source}
    `;
    if(randomQuote.citation){
      HTML+= `  <span class="${randomQuote.citation}"></span>`;
    }
    if(randomQuote.year){
      HTML+= `  <span class="${randomQuote.year}"></span>`;
    }
    HTML += '</p>';
    return HTML;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);