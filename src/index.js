const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    '     ': ' ',
};

function decode(expr) {
    // write your solution here
    let array = expr.split('');
    let subarray = [];
    let result = [];

    for (let i = 0; i < array.length / 10; i++) {
        subarray[i] = array.slice((i * 10), (i * 10) + 10);
        let arrayDouble = [];
        let morseArr = [];

        for (let j = 0; j < subarray[i].length / 2; j++) {
            arrayDouble[j] = subarray[i].slice((j * 2), (j * 2) + 2).join('');
            if (arrayDouble[j] === '00') {
                morseArr.push('')
            } else if (arrayDouble[j] === '10') {
                morseArr.push('.')
            } else if (arrayDouble[j] === '11') {
                morseArr.push('-')
            } else if (arrayDouble[j] === '**') {
                morseArr.push(' ')
            }
        }
        result.push(MORSE_TABLE[morseArr.join('')])
    }
    return result.join('')
}

module.exports = {
    decode
}