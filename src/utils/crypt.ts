import crypto from "crypto";

const defaultAlgorithm = "aes-256-cbc";

export const encryptData = async (data: string, key: string) => {
  try {
    const iv = Buffer.from("i4mboZDwaNEC38YCzi77lw==", "base64");
    const keyBuffer = Buffer.from(key, "base64");
    const cipher = crypto.createCipheriv(defaultAlgorithm, keyBuffer, iv);
    let encryptedDataBuffer = cipher.update(`${data}`);
    encryptedDataBuffer = Buffer.concat([encryptedDataBuffer, cipher.final()]);
    const result = encryptedDataBuffer.toString("base64");
    return handleExtraString(result, true);
  } catch (error) {
    console.error("\n Error: ", error);
    return data;
  }
};

export const decryptData = async (data: string, key: string) => {
  try {
    data = handleExtraString(data, false);
    const iv = Buffer.from("i4mboZDwaNEC38YCzi77lw==", "base64");
    const encryptedData = Buffer.from(data, "base64");
    const keyBuffer = Buffer.from(key, "base64");
    const decipher = crypto.createDecipheriv(defaultAlgorithm, keyBuffer, iv);
    let decryptedBuffer = decipher.update(encryptedData);
    decryptedBuffer = Buffer.concat([decryptedBuffer, decipher.final()]);
    return decryptedBuffer.toString();
  } catch (error) {
    console.error("\n Error: ", error);
    return data;
  }
};

const handleExtraString = (key: string, append = true) => {
  if (append) {
    const start = crypto.randomBytes(2).toString("hex");
    const end = crypto.randomBytes(2).toString("hex");
    key = `${start}${key}${end}`;
    return key;
  } else {
    key = key.substring(4, key.length);
    key = key.substring(0, key.length - 4);
    return key;
  }
};
