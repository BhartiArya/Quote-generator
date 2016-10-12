var quotes=[ 'The truth is you dont know what is going to happen tomorrow.Life is a crazy ride, and nothing is guaranteed.',
 'God is really creative, I mean.. just look at me! :)',
 'I am not lazy, I m on energy saving mode.',
 'If you are going to speak bad things about me on my back, come to me. I will tell you more',
 'When a bird hits your window have you ever wondered if God is playing angry birds with you?',
 'It is during our darkest moments that we must focus to see the light.',
 'Logic will get you from A to B. Imagination will take you everywhere.']
function newQuote(){
 
var randomNumber=Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}