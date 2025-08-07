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
exports.sendEmail = exports.getItemsByids = exports.bulkDeleteItems = exports.deleteItemWithUuid = exports.updateItemWithUuid = exports.getItemWithUuid = exports.getItemsCountWithFilter = exports.getItemsWithFilter = exports.createItem = exports.getAllItems = void 0;
var constants_1 = require("../utils/constants");
var util_1 = require("../utils/util");
var getAllItems = function (baseurl, headers, collectionName, reqQuery, query) { return __awaiter(void 0, void 0, void 0, function () {
    var queryParams_1, url, response, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 7]);
                queryParams_1 = new URLSearchParams();
                console.log("headers :>> ", headers);
                console.log("query :>> ", query);
                console.log("reqQuery :>> ", reqQuery);
                if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.sortField)
                    queryParams_1.append("sortField", reqQuery.sortField);
                if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.sortOrder)
                    queryParams_1.append("sortOrder", reqQuery.sortOrder);
                if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.searchTerm)
                    queryParams_1.append("searchTerm", reqQuery.searchTerm);
                if (reqQuery === null || reqQuery === void 0 ? void 0 : reqQuery.isPagination) {
                    queryParams_1.append("page", reqQuery.page);
                    queryParams_1.append("limit", reqQuery.limit);
                }
                if (Array.isArray(query)) {
                    query.forEach(function (query) {
                        var conditionString = constants_1.QueryOperation[query.condition];
                        var field = "".concat(query.field);
                        var value = "".concat(query.value);
                        // double encoding the query params(remove after testing)
                        // const field = encodeURIComponent(query.field);
                        // const value = encodeURIComponent(query.value);
                        queryParams_1.append("".concat(field, ":").concat(conditionString), "".concat(value));
                    });
                }
                console.log("queryParams :>> ", queryParams_1);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/items?").concat(queryParams_1.toString());
                console.log("Generated URL:", url);
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 1:
                response = _a.sent();
                if (!!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, util_1.createErrorResponse)(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [4 /*yield*/, response.json()];
            case 4:
                result = _a.sent();
                console.log("Before Process Response :>> ", result);
                //TODO: Handle result is array
                return [2 /*return*/, (0, util_1.processResponse)(result)];
            case 5:
                error_1 = _a.sent();
                console.log("error :>> ", error_1);
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_1)];
            case 6: return [2 /*return*/, _a.sent()];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getAllItems = getAllItems;
var createItem = function (baseurl, headers, collectionName, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 8]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/items");
                console.log("url :>> ", url);
                return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(body),
                    })];
            case 1:
                response = _a.sent();
                if (!!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, util_1.createErrorResponse)(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                console.log("response.status :>> ", response.status);
                if (!(response.status &&
                    (response.status === 200 || response.status === 201))) return [3 /*break*/, 5];
                return [4 /*yield*/, response.json()];
            case 4:
                result = _a.sent();
                console.log("result :>> ", result);
                return [2 /*return*/, {
                        code: response.status,
                        success: true,
                        data: result,
                        error: "",
                        message: "",
                    }];
            case 5: return [3 /*break*/, 8];
            case 6:
                error_2 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_2)];
            case 7: return [2 /*return*/, _a.sent()];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.createItem = createItem;
var getItemsWithFilter = function (baseurl, headers, collectionName, filterUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/filter/").concat(filterUuid, "/items");
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, (0, util_1.processResponse)(result)];
            case 3:
                error_3 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_3)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getItemsWithFilter = getItemsWithFilter;
var getItemsCountWithFilter = function (baseurl, headers, collectionName, filterUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/filter/").concat(filterUuid, "/count");
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, (0, util_1.processResponse)(result)];
            case 3:
                error_4 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_4)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getItemsCountWithFilter = getItemsCountWithFilter;
var getItemWithUuid = function (baseurl, headers, collectionName, itemUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 7]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/item/").concat(itemUuid);
                return [4 /*yield*/, fetch(url, { method: "GET", headers: headers })];
            case 1:
                response = _a.sent();
                if (!(response.status && response.status === 404)) return [3 /*break*/, 2];
                return [2 /*return*/, {
                        code: response.status,
                        success: false,
                        data: "Please Check ItemUuid OR Collection Name",
                        error: "",
                        message: "",
                    }];
            case 2: return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                return [2 /*return*/, (0, util_1.processResponse)(result)];
            case 4: return [3 /*break*/, 7];
            case 5:
                error_5 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_5)];
            case 6: return [2 /*return*/, _a.sent()];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getItemWithUuid = getItemWithUuid;
var updateItemWithUuid = function (baseurl, headers, collectionName, itemUuid, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 7]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/item/").concat(itemUuid);
                return [4 /*yield*/, fetch(url, {
                        method: "PUT",
                        headers: headers,
                        body: JSON.stringify(body),
                    })];
            case 1:
                response = _a.sent();
                if (!(response.status && response.status === 404)) return [3 /*break*/, 2];
                return [2 /*return*/, {
                        code: response.status,
                        success: false,
                        data: "Please Check ItemUuid OR Collection Name",
                        error: "",
                        message: "",
                    }];
            case 2: return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                return [2 /*return*/, (0, util_1.processResponse)(result)];
            case 4: return [3 /*break*/, 7];
            case 5:
                error_6 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_6)];
            case 6: return [2 /*return*/, _a.sent()];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.updateItemWithUuid = updateItemWithUuid;
var deleteItemWithUuid = function (baseurl, headers, collectionName, itemUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/item/").concat(itemUuid);
                return [4 /*yield*/, fetch(url, {
                        method: "DELETE",
                        headers: headers,
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, {
                        code: result === null || result === void 0 ? void 0 : result.code,
                        success: (result === null || result === void 0 ? void 0 : result.code) == 200 ? true : false,
                        data: result.message,
                        error: "",
                        message: "",
                    }];
            case 3:
                error_7 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_7)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteItemWithUuid = deleteItemWithUuid;
var bulkDeleteItems = function (baseurl, headers, collectionName, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/bulkDelete");
                return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        headers: headers,
                        body: body,
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, { success: true, data: result.data, error: "", message: "" }];
            case 3:
                error_8 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_8)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.bulkDeleteItems = bulkDeleteItems;
var getItemsByids = function (baseurl, headers, collectionName, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                url = "".concat(baseurl, "/collection/").concat(collectionName, "/itemsbyids");
                return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        headers: headers,
                        body: body,
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, { success: true, data: result.data, error: "", message: "" }];
            case 3:
                error_9 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_9)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getItemsByids = getItemsByids;
var sendEmail = function (baseurl, headers, templateId, sendTo) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, result, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                url = "".concat(baseurl, "/sendEmail/").concat(templateId, "/user/").concat(sendTo);
                return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        headers: headers,
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, { success: true, data: result, error: "", message: "" }];
            case 3:
                error_10 = _a.sent();
                return [4 /*yield*/, (0, util_1.createErrorResponse)(error_10)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.sendEmail = sendEmail;
