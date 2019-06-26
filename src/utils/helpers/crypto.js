import crypto from 'crypto';

function genKey() {
  return crypto
    .createHash('sha256')
    .update('keyString')
    .digest('hex')
    .substring(0, 32);
}
function genIv() {
  return '0000000000000000';
}
function getAlgorithm(key) {
  const keyBuffer = new Buffer.from(key);
  switch (keyBuffer.length) {
    case 16:
      return 'aes-128-cbc';
    case 32:
      return 'aes-256-cbc';
    default:
      break;
  }
  throw new Error('Invalid key length: ' + key.length);
}
function encryptAes(plainText, keyBase64, ivString) {
  const key = Buffer.from(keyBase64);
  const iv = Buffer.from(ivString);
  const cipher = crypto.createCipheriv(getAlgorithm(key), key, iv);
  cipher.update(plainText, 'utf8', 'base64');
  return cipher.final('base64');
}
function decryptAes(messagebase64, keyBase64, ivString) {
  var key = Buffer.from(keyBase64);
  var iv = Buffer.from(ivString);
  var decipher = crypto.createDecipheriv(getAlgorithm(key), key, iv);
  decipher.update(messagebase64, 'base64');
  return decipher.final();
}
export const decrypt = message => {
  const decipherText = decryptAes(message, genKey(), genIv());
  return decipherText.toString();
};
export const encrypt = message => {
  const cipher = encryptAes(message, genKey(), genIv());
  return cipher.toString();
};
