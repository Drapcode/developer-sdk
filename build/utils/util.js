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
Object.defineProperty(exports, "__esModule", { value: true });
exports.processResponse = exports.processListResponse = exports.processCreateErrorResponse = exports.processCreateItemResponse = exports.processCountFilterResponse = exports.processFilterResponse = exports.createErrorResponse = void 0;
var defaultMessages = {
    401: "Unauthorized",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error",
};
var createErrorResponse = function (error) { return __awaiter(void 0, void 0, void 0, function () {
    var status, cloneError, responseData, _a, finalMessage;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                status = error === null || error === void 0 ? void 0 : error.status;
                cloneError = error.clone();
                console.log("status :>> ", status);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 5]);
                return [4 /*yield*/, error.json()];
            case 2:
                // Try parsing as JSON
                responseData = _b.sent();
                return [3 /*break*/, 5];
            case 3:
                _a = _b.sent();
                return [4 /*yield*/, cloneError.text()];
            case 4:
                // If it's not JSON, fallback to text
                responseData = _b.sent();
                return [3 /*break*/, 5];
            case 5:
                console.log("responseData :>> ", responseData);
                if (status === 404) {
                    finalMessage = "Not found";
                    if (responseData.error || responseData.message) {
                        finalMessage = responseData.error || responseData.message;
                    }
                    else if (responseData == "This url does not exist. Please publish again.") {
                        finalMessage = "Please check your project name or publish again.";
                    }
                    else if (responseData === null || responseData === void 0 ? void 0 : responseData.message) {
                        finalMessage = responseData === null || responseData === void 0 ? void 0 : responseData.message;
                    }
                    else {
                        finalMessage = responseData;
                    }
                    return [2 /*return*/, {
                            code: status,
                            success: false,
                            data: responseData,
                            error: finalMessage,
                            message: finalMessage,
                        }];
                }
                if (status === 401) {
                    return [2 /*return*/, {
                            code: status,
                            success: false,
                            data: (responseData === null || responseData === void 0 ? void 0 : responseData.message) || "Unauthorized Access",
                            error: "",
                            message: "",
                        }];
                }
                if (status === 400) {
                    return [2 /*return*/, {
                            code: status,
                            success: false,
                            data: responseData || "Please check your credentials",
                            error: "",
                            message: "",
                        }];
                }
                return [2 /*return*/, {
                        code: (error === null || error === void 0 ? void 0 : error.code) || 500,
                        success: false,
                        data: "",
                        error: (error === null || error === void 0 ? void 0 : error.message) || "Please check your project name or publish again.",
                        message: "",
                    }];
        }
    });
}); };
exports.createErrorResponse = createErrorResponse;
var processFilterResponse = function (response) {
    console.log("response :>> ", response);
    var code = response.code, message = response.message, result = response.result, count = response.count;
    if (code === 200) {
        return {
            code: code,
            data: result,
            count: count,
            error: "",
            status: "success",
            message: "",
        };
    }
    return {
        code: code,
        data: [],
        count: 0,
        error: message,
        status: "failed",
        message: message,
    };
};
exports.processFilterResponse = processFilterResponse;
var processCountFilterResponse = function () { };
exports.processCountFilterResponse = processCountFilterResponse;
var processCreateItemResponse = function (response) {
    console.log("1", response);
    var code = response.code, message = response.message, data = response.data, status = response.status, error = response.error;
    if ([200, 201].includes(code)) {
        return {
            code: code,
            data: data,
            status: status,
            error: error,
            message: message,
        };
    }
};
exports.processCreateItemResponse = processCreateItemResponse;
var processCreateErrorResponse = function (error) { return __awaiter(void 0, void 0, void 0, function () {
    var status, cloneError, responseData, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                status = error === null || error === void 0 ? void 0 : error.status;
                cloneError = error.clone();
                console.log("status :>> ", status);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 5]);
                return [4 /*yield*/, error.json()];
            case 2:
                // Try parsing as JSON
                responseData = _b.sent();
                return [3 /*break*/, 5];
            case 3:
                _a = _b.sent();
                return [4 /*yield*/, cloneError.text()];
            case 4:
                // If it's not JSON, fallback to text
                responseData = _b.sent();
                return [3 /*break*/, 5];
            case 5:
                console.log("responseData :>> ", responseData);
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.processCreateErrorResponse = processCreateErrorResponse;
var processListResponse = function () { };
exports.processListResponse = processListResponse;
var processResponse = function (result) {
    var _a, _b;
    console.log("1", result);
    if ((result === null || result === void 0 ? void 0 : result.status) === "FAILED") {
        var statusCode = ((_a = result === null || result === void 0 ? void 0 : result.error) === null || _a === void 0 ? void 0 : _a.errStatus) || 400;
        var errorMessage = ((_b = result === null || result === void 0 ? void 0 : result.error) === null || _b === void 0 ? void 0 : _b.message) || defaultMessages[statusCode] || "API Failed";
        return {
            code: statusCode,
            success: false,
            error: errorMessage,
            message: errorMessage,
            data: "",
        };
    }
    console.log("2", result === null || result === void 0 ? void 0 : result.code);
    if (![200, 201].includes(result === null || result === void 0 ? void 0 : result.code)) {
        var errorMessage = (result === null || result === void 0 ? void 0 : result.data) || defaultMessages[result === null || result === void 0 ? void 0 : result.code] || "An error occurred";
        return {
            code: result.code,
            success: false,
            error: errorMessage,
            message: errorMessage,
            data: "",
        };
    }
    return {
        code: 200,
        success: true,
        error: "",
        message: "",
        data: (result === null || result === void 0 ? void 0 : result.result) || result,
        totalItems: (result === null || result === void 0 ? void 0 : result.totalItems) || 0,
        totalPages: (result === null || result === void 0 ? void 0 : result.totalPages) || 0,
    };
};
exports.processResponse = processResponse;
