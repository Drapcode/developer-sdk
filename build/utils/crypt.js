"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = exports.encryptData = void 0;
var crypto_1 = __importDefault(require("crypto"));
var defaultAlgorithm = "aes-256-cbc";
var encryptData = function (data, key) { return __awaiter(void 0, void 0, void 0, function () {
    var iv, keyBuffer, cipher, encryptedDataBuffer, result;
    return __generator(this, function (_a) {
        try {
            iv = Buffer.from("i4mboZDwaNEC38YCzi77lw==", "base64");
            keyBuffer = Buffer.from(key, "base64");
            cipher = crypto_1.default.createCipheriv(defaultAlgorithm, keyBuffer, iv);
            encryptedDataBuffer = cipher.update("".concat(data));
            encryptedDataBuffer = Buffer.concat([encryptedDataBuffer, cipher.final()]);
            result = encryptedDataBuffer.toString("base64");
            return [2 /*return*/, handleExtraString(result, true)];
        }
        catch (error) {
            console.error("\n Error: ", error);
            return [2 /*return*/, data];
        }
        return [2 /*return*/];
    });
}); };
exports.encryptData = encryptData;
var decryptData = function (data, key) { return __awaiter(void 0, void 0, void 0, function () {
    var iv, encryptedData, keyBuffer, decipher, decryptedBuffer;
    return __generator(this, function (_a) {
        try {
            data = handleExtraString(data, false);
            iv = Buffer.from("i4mboZDwaNEC38YCzi77lw==", "base64");
            encryptedData = Buffer.from(data, "base64");
            keyBuffer = Buffer.from(key, "base64");
            decipher = crypto_1.default.createDecipheriv(defaultAlgorithm, keyBuffer, iv);
            decryptedBuffer = decipher.update(encryptedData);
            decryptedBuffer = Buffer.concat([decryptedBuffer, decipher.final()]);
            return [2 /*return*/, decryptedBuffer.toString()];
        }
        catch (error) {
            console.error("\n Error: ", error);
            return [2 /*return*/, data];
        }
        return [2 /*return*/];
    });
}); };
exports.decryptData = decryptData;
var handleExtraString = function (key, append) {
    if (append === void 0) { append = true; }
    if (append) {
        var start = crypto_1.default.randomBytes(2).toString("hex");
        var end = crypto_1.default.randomBytes(2).toString("hex");
        key = "".concat(start).concat(key).concat(end);
        return key;
    }
    else {
        key = key.substring(4, key.length);
        key = key.substring(0, key.length - 4);
        return key;
    }
};
