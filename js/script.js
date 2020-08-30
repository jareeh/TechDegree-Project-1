/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//quotes array:
//array storing several quote objects containing quotes,
//sources, citations, and years
const quotes = [
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Ancient Chinese Proverb',
    citation: 'Xunzi',
    year: '3rd Century BCE',
    tags: 'Wisdom'
  },
  {
    quote: 'It\'s not the years in your life that count. It\'s the life in your years.',
    source: 'Edward J. Stieglitz',
    citation: '"The Second Fourty Years"',
    year: '1947',
    tags: 'Wisdom'
  },
  {
    quote: 'Never let the fear of striking out keep you from playing the game.',
    source: 'Babe Ruth',
    citation: '',
    year: '',
    tags: 'Motivation'
  },
  {
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    source: 'Robert Louis Stevenson',
    citation: '',
    year: '',
    tags:'Wisdom'
  },
  {
    quote: 'The only impossible journey is the one you never begin.',
    source: 'Tony Robbins',
    citation: '',
    year: '',
    tags: 'Motivation'
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: 'John Lennon',
    citation: '',
    year: '',
    tags: ''
  }
];


/**
 * `getRandomQuote` function
 * 
 * Returns a random number between 0 to 1 less than quotes array length.
 *
 * no parameters
 * @return {object} random quote object from the quotes array.
 */
function getRandomQuote(){
  let random = Math.floor((Math.random() * quotes.length));
  return quotes[random];
};

function randomColorValue(){
  return Math.floor(Math.random() * 256);
};

function changeColors(){
  let red = randomColorValue();
  let green = randomColorValue();
  let blue = randomColorValue();
  let randomRGB = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor= randomRGB;
};

// const body = document.getElementById("body");


/**
 * `printQuote` function
 * 
 * Assembles HTML from quote object and prints a new quote.
 *
 * no parameters
 * @return nothing. Used as callback function in event listener.
 */
function printQuote(){
  changeColors();
  const randomQuote = getRandomQuote();
  let HTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    `;
    if(randomQuote.citation){
      HTML+= `  <span class="citation">${randomQuote.citation}</span>`;
    }
    if(randomQuote.year){
      HTML+= `  <span class="year">${randomQuote.year}</span>`;
    }
    if(randomQuote.tags){
      HTML+= `  <span class="tags">${randomQuote.tags}</span>`;
    }
    HTML += '</p>';
    document.getElementById('quote-box').innerHTML = HTML; 
};

//setInterval used to refresh quote every 12s (12000ms), calling printQuote
setInterval(printQuote, 12000);

/**
 * click event listener for the print quote button
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

