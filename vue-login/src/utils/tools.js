let Base64 = require('js-base64').Base64;

// base64 加密
export const setBase64 = val => Base64.encode(val);

// base64解密
export const getBase64 = val => Base64.decode(val);

// 随机生成id
export const getId = () => {
  let onlyId = parseInt(Math.random() * 10000000000);

  return onlyId;
}