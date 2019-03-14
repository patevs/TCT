
/**
 *  rqmbot.js
 * @param {*} color 
 * @param {*} percent 
 */
var forismatic = require('forismatic-node')();

function randomQuote(){
    forismatic.getQuote(function (error, quote) {
        if (!error) {
            console.log(quote);
            if(quote.quoteAuthor.length > 0){
                return quote.quoteText;
                //return quote.quoteText + "\n\t - " + quote.quoteAuthor + " -";
            } else {
                return quote.quoteText;
                //return quote.quoteText + "<br/>&dash; Unknown &dash;</p>";
            }   
        } else {
            console.error(error);
        }
    });
}


// credit: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13532993#13532993
function shadeColor(color, percent) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  
    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));
    return "#"+RR+GG+BB;
}

module.exports.randomQuote = randomQuote;