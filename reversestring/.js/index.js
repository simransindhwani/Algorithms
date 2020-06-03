// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var o_str=str;
    var rev="";
    for(var i=o_str.length-1;i>=0;i--)
    {
        rev=rev+o_str.charAt(i);
    }
    return rev;
}

module.exports = reverse;
