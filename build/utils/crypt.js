"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = exports.encryptData = void 0;
var crypto_1 = __importDefault(require("crypto"));
var defaultAlgorithm = "aes-256-cbc";
var fixedIv = "i4mboZDwaNEC38YCzi77lw==";
var toBuffer = function (base64) { return Buffer.from(base64, "base64"); };
var createCipher = function (key, iv) {
    return crypto_1.default.createCipheriv(defaultAlgorithm, toBuffer(key), toBuffer(iv));
};
var createDecipher = function (key, iv) {
    return crypto_1.default.createDecipheriv(defaultAlgorithm, toBuffer(key), toBuffer(iv));
};
var encryptData = function (data, key, iv) {
    try {
        if (!iv)
            iv = fixedIv;
        var cipher = createCipher(key, iv);
        var encrypted = Buffer.concat([cipher.update("".concat(data)), cipher.final()]);
        return handleExtraString(encrypted.toString("base64"), true);
    }
    catch (error) {
        console.error("\n Error: ", error);
        return data;
    }
};
exports.encryptData = encryptData;
var decryptData = function (data, key, iv) {
    try {
        console.log("decryptData: key :>> ", key);
        console.log("decryptData: iv :>> ", iv);
        var cleaned = handleExtraString(data, false);
        var encryptedData = toBuffer(cleaned);
        if (!iv)
            iv = fixedIv;
        var decipher = createDecipher(key, iv);
        var decrypted = Buffer.concat([
            decipher.update(encryptedData),
            decipher.final(),
        ]);
        return decrypted.toString();
    }
    catch (error) {
        console.error("\n Error: ", error);
        return data;
    }
};
exports.decryptData = decryptData;
var handleExtraString = function (key, append) {
    if (append === void 0) { append = true; }
    if (!key || key === "undefined")
        return key;
    if (append) {
        var prefix = crypto_1.default.randomBytes(2).toString("hex");
        var suffix = crypto_1.default.randomBytes(2).toString("hex");
        return "".concat(prefix).concat(key).concat(suffix);
    }
    return key.substring(4, key.length - 4);
};
