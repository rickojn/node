var CryptoJS = require("crypto-js")

var plainText = 'Mary had a little lamb'
console.log('plain text: ', plainText)
var keyA = 'x5zG8EiUaZoUVJpsTOKB48g52om1tApEPB2nIdeZZGU='
// var keyA = 'key A'
var keyB = 'PwU9uyHmdyDI9Mtqy3ElTHhWGKp/8NQU3k8+8rjVCuw='
// var keyB = 'key B'
console.log('------');
console.log('------');
// Encrypt with key A
var ciphertextA = CryptoJS.AES.encrypt(plainText, keyA);
console.log('encrypted with A: ', ciphertextA.toString())
console.log('------');
console.log('------');
var ciphertextB = CryptoJS.AES.encrypt(plainText, keyB);
console.log('encrypted with B: ', ciphertextB.toString())
console.log('------');
console.log('------');

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertextA.toString(), keyA);
var decryptedTextA = bytes.toString(CryptoJS.enc.Utf8);

console.log('decryptedText: ', decryptedTextA);
console.log('------');
console.log('------');

// Decrypt
var bytesAB  = CryptoJS.AES.decrypt(ciphertextA.toString(), keyB);
var decryptedTextAB = bytesAB.toString(CryptoJS.enc.Utf8);
console.log('decrypted with wrong key Text: ', decryptedTextAB);
console.log('------');
console.log('------');


// encrypt cipher-text A with Key B:
var ciphertextAB = CryptoJS.AES.encrypt(ciphertextA.toString(), keyB);
console.log('encrypted with A encrypted with B: ', ciphertextAB.toString())
console.log('------');
console.log('------');

// decrypt AB with B
var bytesC  = CryptoJS.AES.decrypt(ciphertextAB.toString(), keyB);
var decryptedTextC = bytesC.toString(CryptoJS.enc.Utf8);
console.log('the above decrypted by B', decryptedTextC)

// decrypt cipher-text AB with key A:
var decryptedWithA = CryptoJS.AES.decrypt(ciphertextAB.toString(), keyA).toString(CryptoJS.enc.Utf8);
console.log('------');
console.log('------');
console.log('decrypted by A:',decryptedWithA)
// now decrypt it with key B:
var decryptedWithB = CryptoJS.AES.decrypt(decryptedWithA.toString(), keyA).toString(CryptoJS.enc.Utf8);
console.log('------');
console.log('------');

console.log('decrypted by keys A and B:  ', decryptedWithB);
console.log('------');
console.log('------');




