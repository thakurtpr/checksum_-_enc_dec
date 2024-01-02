const crypto = require("crypto");

const data = "hello this is the message";
const key = "ojrltprfmmxbvwkgypmoqidaxcipeqvo";
const iv = "76b9f4c913d2e0f8";

function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf-8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

function decrypt(text, key, iv) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(text, "base64", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

const encData = encrypt(data, key, iv);
console.log(encData);

const decData = decrypt(encData, key, iv);
console.log(decData);
