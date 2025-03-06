"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.DrapcodeApis = void 0;
var methods_1 = require("./methods/methods");
var DrapcodeApis = /** @class */ (function () {
    function DrapcodeApis(project_seo_name, xApiKey, authorization, environment) {
        if (xApiKey === void 0) { xApiKey = ""; }
        if (authorization === void 0) { authorization = ""; }
        if (environment === void 0) { environment = "PRODUCTION"; }
        this.API_PATH = "webkonnect.site/api/v1/developer";
        this.project_seo_name = project_seo_name;
        this.xApiKey = xApiKey;
        this.authorization = authorization;
        this.environment = environment;
    }
    DrapcodeApis.prototype.getBaseUrl = function () {
        switch (this.environment.toUpperCase()) {
            case "PRODUCTION":
                return "https://".concat(this.project_seo_name, ".api.").concat(this.API_PATH);
            case "PREVIEW":
                return "https://".concat(this.project_seo_name, ".api.preview.").concat(this.API_PATH);
            case "BETA":
                return "https://".concat(this.project_seo_name, ".api.sandbox.").concat(this.API_PATH);
            case "ALPHA":
                return "https://".concat(this.project_seo_name, ".api.uat.").concat(this.API_PATH);
            default:
                return "https://".concat(this.project_seo_name, ".api.").concat(this.API_PATH);
        }
    };
    DrapcodeApis.prototype.getHeaders = function () {
        var headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        if (this.xApiKey) {
            headers["x-api-key"] = this.xApiKey;
        }
        if (this.authorization) {
            headers["Authorization"] = this.authorization;
        }
        console.log("here is header", headers);
        return headers;
    };
    DrapcodeApis.prototype.getAllItems = function (collectionName, reqQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.getAllItems)(this.getBaseUrl(), this.getHeaders(), collectionName, reqQuery)];
            });
        });
    };
    DrapcodeApis.prototype.createItem = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.createItem)(this.getBaseUrl(), this.getHeaders(), collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.getItemsWithFilter = function (collectionName, filterUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.getItemsWithFilter)(this.getBaseUrl(), this.getHeaders(), collectionName, filterUuid)];
            });
        });
    };
    DrapcodeApis.prototype.getItemsCountWithFilter = function (collectionName, filterUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.getItemsCountWithFilter)(this.getBaseUrl(), this.getHeaders(), collectionName, filterUuid)];
            });
        });
    };
    DrapcodeApis.prototype.getItemWithUuid = function (collectionName, itemUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.getItemWithUuid)(this.getBaseUrl(), this.getHeaders(), collectionName, itemUuid)];
            });
        });
    };
    DrapcodeApis.prototype.updateItemWithUuid = function (collectionName, itemUuid, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.updateItemWithUuid)(this.getBaseUrl(), this.getHeaders(), collectionName, itemUuid, body)];
            });
        });
    };
    DrapcodeApis.prototype.deleteItemWithUuid = function (collectionName, itemUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.deleteItemWithUuid)(this.getBaseUrl(), this.getHeaders(), collectionName, itemUuid)];
            });
        });
    };
    DrapcodeApis.prototype.bulkDeleteItems = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.bulkDeleteItems)(this.getBaseUrl(), this.getHeaders(), collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.getItemsByids = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.getItemsByids)(this.getBaseUrl(), this.getHeaders(), collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.sendEmail = function (templateId, sendTo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, methods_1.sendEmail)(this.getBaseUrl(), this.getHeaders(), templateId, sendTo)];
            });
        });
    };
    return DrapcodeApis;
}());
exports.DrapcodeApis = DrapcodeApis;
__exportStar(require("./utils/index"), exports);
__exportStar(require("./utils/crypt"), exports);
