
import CryptoJs from 'crypto-js';
const chabi = "You won't get anything even if you find this key, bitch!";
export const encode = (data) => {
  return CryptoJs.enc.Base64.stringify(CryptoJs.enc.Utf8.parse(data));
};

export const decode = (data) => {
  return CryptoJs.enc.Utf8.stringify(CryptoJs.enc.Base64.parse(data));
};

export const sha256 = (text)=>{
  return CryptoJs.SHA256(text).toString();
};
export default Object.assign({}, {
  encode: encode,
  decode: decode,
  sha265 : sha256
})
