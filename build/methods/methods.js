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
exports.aboutMe = exports.sendEmail = exports.deleteFieldItem = exports.clearItem = exports.deleteItemWithUuid = exports.updateItemWithUuid = exports.lastItem = exports.getItemWithUuid = exports.getItemsByids = exports.getAllItems = exports.getItemsCountWithFilter = exports.getItemsWithFilter = exports.createItem = exports.getItemOnly = exports.removeReferenceItem = exports.addReferenceItem = exports.bulkDeleteItems = exports.validateItem = exports.saveCSVData = exports.countItemByValue = exports.bulkCreateItems = void 0;
var constants_1 = require("../utils/constants");
var util_1 = require("../utils/util");
var request = function (version, url, options, process) {
    if (process === void 0) { process = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var response, result, error_1, message;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url, options)];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, util_1.createErrorResponse)(response)];
                case 2: return [2 /*return*/, _b.sent()];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    result = _b.sent();
                    if (version === 1) {
                        return [2 /*return*/, result];
                    }
                    return [2 /*return*/, process ? (0, util_1.processResponse)(result) : result];
                case 5:
                    error_1 = _b.sent();
                    message = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.message) === null || _a === void 0 ? void 0 : _a.replace("fetch failed", "Network Error");
                    return [2 /*return*/, { code: 500, error: message, message: message }];
                case 6: return [2 /*return*/];
            }
        });
    });
};
var bulkCreateItems = function (baseurl, headers, version, collectionName, body) {
    var url = "".concat(baseurl, "/collection/").concat(collectionName, "/bulk");
    console.log("url :>> ", url);
    return request(version, url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
    });
};
exports.bulkCreateItems = bulkCreateItems;
var countItemByValue = function (baseurl, headers, version, collectionName, fieldName, fieldValue) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/count-by-field");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ fieldName: fieldName, fieldValue: fieldValue }),
            })];
    });
}); };
exports.countItemByValue = countItemByValue;
var saveCSVData = function (baseurl, headers, version, collectionName, items) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/csv-items");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ items: items }),
            })];
    });
}); };
exports.saveCSVData = saveCSVData;
var validateItem = function (baseurl, headers, version, collectionName, item) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/validate-item");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ itemData: item }),
            })];
    });
}); };
exports.validateItem = validateItem;
var bulkDeleteItems = function (baseurl, headers, version, collectionName, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/bulkDelete");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            })];
    });
}); };
exports.bulkDeleteItems = bulkDeleteItems;
var addReferenceItem = function (baseurl, headers, version, collectionName, data) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/add-reference");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })];
    });
}); };
exports.addReferenceItem = addReferenceItem;
var removeReferenceItem = function (baseurl, headers, version, collectionName, data) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/remove-reference");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })];
    });
}); };
exports.removeReferenceItem = removeReferenceItem;
var getItemOnly = function (baseurl, headers, version, collectionName, itemUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/item-only/").concat(itemUuid);
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "GET", headers: headers })];
    });
}); };
exports.getItemOnly = getItemOnly;
var createItem = function (baseurl, headers, version, collectionName, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_2, message;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/items");
                console.log("url :>> ", url);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                console.log("version :>> ", version);
                return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(body),
                    })];
            case 2:
                response = _b.sent();
                if (!!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, util_1.processCreateErrorResponse)(response)];
            case 3: return [2 /*return*/, _b.sent()];
            case 4: return [4 /*yield*/, response.json()];
            case 5:
                result = _b.sent();
                console.log("result request:>> ", result);
                if (version === 1) {
                    return [2 /*return*/, result];
                }
                return [2 /*return*/, (0, util_1.processCreateItemResponse)(result)];
            case 6:
                error_2 = _b.sent();
                message = (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.message) === null || _a === void 0 ? void 0 : _a.replace("fetch failed", "Network Error");
                return [2 /*return*/, { code: 500, error: message, data: [], count: 0, status: "failed" }];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createItem = createItem;
var getItemsWithFilter = function (baseurl, headers, version, collectionName, filterUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_3, message;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/filter/").concat(filterUuid, "/items");
                console.log("url :>> ", url);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                console.log("version :>> ", version);
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 2:
                response = _b.sent();
                if (!!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, util_1.processCreateErrorResponse)(response)];
            case 3: return [2 /*return*/, _b.sent()];
            case 4: return [4 /*yield*/, response.json()];
            case 5:
                result = _b.sent();
                return [2 /*return*/, result];
            case 6:
                error_3 = _b.sent();
                message = (_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.message) === null || _a === void 0 ? void 0 : _a.replace("fetch failed", "Network Error");
                return [2 /*return*/, { code: 500, error: message, data: [], count: 0, status: "failed" }];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getItemsWithFilter = getItemsWithFilter;
var getItemsCountWithFilter = function (baseurl, headers, version, collectionName, filterUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_4, message;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/filter/").concat(filterUuid, "/count");
                console.log("url :>> ", url);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                console.log("version :>> ", version);
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 2:
                response = _b.sent();
                if (!!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, util_1.createErrorResponse)(response)];
            case 3: return [2 /*return*/, _b.sent()];
            case 4: return [4 /*yield*/, response.json()];
            case 5:
                result = _b.sent();
                return [2 /*return*/, (0, util_1.processFilterResponse)(result)];
            case 6:
                error_4 = _b.sent();
                message = (_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.message) === null || _a === void 0 ? void 0 : _a.replace("fetch failed", "Network Error");
                return [2 /*return*/, { code: 500, error: message, data: [], count: 0, status: "failed" }];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getItemsCountWithFilter = getItemsCountWithFilter;
var getAllItems = function (baseurl, headers, version, collectionName, reqQuery, query) { return __awaiter(void 0, void 0, void 0, function () {
    var queryParams, url;
    return __generator(this, function (_a) {
        queryParams = new URLSearchParams();
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.sortField)
            queryParams.append("sortField", reqQuery.sortField);
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.sortOrder)
            queryParams.append("sortOrder", reqQuery.sortOrder);
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.searchTerm)
            queryParams.append("searchTerm", reqQuery.searchTerm);
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.isPagination) {
            queryParams.append("page", reqQuery.page);
            queryParams.append("limit", reqQuery.limit);
        }
        if (Array.isArray(query)) {
            query.forEach(function (query) {
                var conditionString = constants_1.QueryOperation[query.condition];
                var field = "".concat(query.field);
                var value = "".concat(query.value);
                queryParams.append("".concat(field, ":").concat(conditionString), "".concat(value));
            });
        }
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/items?").concat(queryParams.toString());
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "GET", headers: headers })];
    });
}); };
exports.getAllItems = getAllItems;
var getAllItemsOnly = function (baseurl, headers, version, collectionName, reqQuery, query) { return __awaiter(void 0, void 0, void 0, function () {
    var queryParams, url;
    return __generator(this, function (_a) {
        queryParams = new URLSearchParams();
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.sortField)
            queryParams.append("sortField", reqQuery.sortField);
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.sortOrder)
            queryParams.append("sortOrder", reqQuery.sortOrder);
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.searchTerm)
            queryParams.append("searchTerm", reqQuery.searchTerm);
        if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.isPagination) {
            queryParams.append("page", reqQuery.page);
            queryParams.append("limit", reqQuery.limit);
        }
        if (Array.isArray(query)) {
            query.forEach(function (query) {
                var conditionString = constants_1.QueryOperation[query.condition];
                var field = "".concat(query.field);
                var value = "".concat(query.value);
                queryParams.append("".concat(field, ":").concat(conditionString), "".concat(value));
            });
        }
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/items-only?").concat(queryParams.toString());
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "GET", headers: headers })];
    });
}); };
exports.getAllItemsOnly = getAllItemsOnly;
var getItemsByids = function (baseurl, headers, version, collectionName, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/itemsbyids");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            })];
    });
}); };
exports.getItemsByids = getItemsByids;
var getItemWithUuid = function (baseurl, headers, version, collectionName, itemId) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_5, message;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/item/").concat(itemId);
                console.log("url :>> ", url);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                console.log("version :>> ", version);
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 2:
                response = _b.sent();
                if (!!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, util_1.processCreateErrorResponse)(response)];
            case 3: return [2 /*return*/, _b.sent()];
            case 4: return [4 /*yield*/, response.json()];
            case 5:
                result = _b.sent();
                return [2 /*return*/, result];
            case 6:
                error_5 = _b.sent();
                message = (_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.message) === null || _a === void 0 ? void 0 : _a.replace("fetch failed", "Network Error");
                return [2 /*return*/, { code: 500, error: message, data: [], count: 0, status: "failed" }];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getItemWithUuid = getItemWithUuid;
/**
 * Final Stop
 */
var lastItem = function (baseurl, headers, version, collectionName) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/last-item");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "GET", headers: headers })];
    });
}); };
exports.lastItem = lastItem;
/**
 * PUT Call
 */
var updateItemWithUuid = function (baseurl, headers, version, collectionName, itemUuid, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/item/").concat(itemUuid);
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(body),
            })];
    });
}); };
exports.updateItemWithUuid = updateItemWithUuid;
/**
 * DELETE Call
 */
var deleteItemWithUuid = function (baseurl, headers, version, collectionName, itemUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/item/").concat(itemUuid);
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "DELETE", headers: headers })];
    });
}); };
exports.deleteItemWithUuid = deleteItemWithUuid;
var clearItem = function (baseurl, headers, version, collectionName) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/clear-item/");
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "DELETE", headers: headers })];
    });
}); };
exports.clearItem = clearItem;
var deleteFieldItem = function (baseurl, headers, version, collectionName, fieldName) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/collection/").concat(collectionName, "/delete-field-record/").concat(fieldName);
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "DELETE", headers: headers })];
    });
}); };
exports.deleteFieldItem = deleteFieldItem;
/**
 * EMAIL
 */
var sendEmail = function (baseurl, headers, version, templateId, sendTo) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/sendEmail/").concat(templateId, "/user/").concat(sendTo);
        console.log("url :>> ", url);
        return [2 /*return*/, request(version, url, { method: "POST", headers: headers })];
    });
}); };
exports.sendEmail = sendEmail;
var aboutMe = function (baseurl, headers, version, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "".concat(baseurl, "/user/me");
        return [2 /*return*/, request(version, url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            })];
    });
}); };
exports.aboutMe = aboutMe;
