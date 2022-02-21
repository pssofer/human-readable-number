module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
    
    let stringNumber = number.toString();
    let start = stringNumber.length;
    let parts = [];
    
    if (number == 0) {
      return 'zero';
    };
    
    while (start > 0) {
      let end = start;
      start = Math.max(0, start - 3);
      let onePart = stringNumber.slice(start, end);
      parts.push(onePart);
    }
    
    let partsLength = parts.length;
    let words = [];
    let numbersOfOnePart = 0;
    
    for (i = 0; i < partsLength; i += 1) {
      onePart = parseInt(parts[i]);
      if (onePart) {
        numbersOfOnePart = parts[i].split('').reverse().map(parseFloat);
        if (numbersOfOnePart[1] == 1) {
          numbersOfOnePart[0] += 10;
        };
        let word = scales[i];
        if (word) {
          words.push(word);
        };
        if ((word = units[numbersOfOnePart[0]])) {
          words.push(word);
        };
        if ((word = tens[numbersOfOnePart[1]])) {
          words.push(word);
        };
        if (word = units[numbersOfOnePart[2]]) {
          words.push(word + ' hundred');
        };
      };
    };
    return words.reverse().join(' ');;
}