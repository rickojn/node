const http = require('http');
var CryptoJS = require("crypto-js")

const hostname = '127.0.0.1';
const port = 3000;
let requestCount = 0;
// comment


// Encrypt
var ciphertext = CryptoJS.AES.encrypt('Richard', process.env.ENCRYPTION_KEY);
console.log('ciphertext: ', ciphertext.toString())

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), process.env.ENCRYPTION_KEY);
console.log('bytes: ', bytes.toString())
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
 
console.log(plaintext);
const server = http.createServer((req, res) => {
  requestCount++;
  console.log('unencrypted user: ',req.headers.user)
  var userBytes = CryptoJS.AES.decrypt(req.headers.user, process.env.ENCRYPTION_KEY)
  var decryptedUser = userBytes.toString(CryptoJS.enc.Utf8)
  console.log('decrypted user: ', decryptedUser)
  console.log('request ' + requestCount+ ' received ...')
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(req.headers['user-agent']);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//