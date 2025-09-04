import crypto from "crypto";

const defaultAlgorithm = "aes-256-cbc";
const fixedIv = "i4mboZDwaNEC38YCzi77lw==";
const toBuffer = (base64: string): Buffer => Buffer.from(base64, "base64");

const createCipher = (key: string, iv: string) =>
  crypto.createCipheriv(defaultAlgorithm, toBuffer(key), toBuffer(iv));

const createDecipher = (key: string, iv: string) =>
  crypto.createDecipheriv(defaultAlgorithm, toBuffer(key), toBuffer(iv));

export const encryptData = (data: string, key: string, iv?: string): string => {
  try {
    if (!iv) iv = fixedIv;
    const cipher = createCipher(key, iv);
    const encrypted = Buffer.concat([cipher.update(`${data}`), cipher.final()]);
    return handleExtraString(encrypted.toString("base64"), true);
  } catch (error) {
    console.error("\n Error: ", error);
    return data;
  }
};

export const decryptData = (data: string, key: string, iv?: string): string => {
  try {
    console.log("decryptData: key :>> ", key);
    console.log("decryptData: iv :>> ", iv);
    const cleaned = handleExtraString(data, false);
    const encryptedData = toBuffer(cleaned);
    if (!iv) iv = fixedIv;
    const decipher = createDecipher(key, iv);
    const decrypted = Buffer.concat([
      decipher.update(encryptedData),
      decipher.final(),
    ]);
    return decrypted.toString();
  } catch (error) {
    console.error("\n Error: ", error);
    return data;
  }
};

const handleExtraString = (key: string, append = true): string => {
  if (!key || key === "undefined") return key;

  if (append) {
    const prefix = crypto.randomBytes(2).toString("hex");
    const suffix = crypto.randomBytes(2).toString("hex");
    return `${prefix}${key}${suffix}`;
  }

  return key.substring(4, key.length - 4);
};
