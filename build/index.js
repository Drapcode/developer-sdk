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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrapcodeApis = exports.Environment = void 0;
var methods_1 = require("./methods/methods");
var Environment;
(function (Environment) {
    Environment["PRODUCTION"] = "PRODUCTION";
    Environment["PREVIEW"] = "PREVIEW";
    Environment["BETA"] = "BETA";
    Environment["ALPHA"] = "ALPHA";
})(Environment = exports.Environment || (exports.Environment = {}));
var DrapcodeApis = /** @class */ (function () {
    // private protocol: string = "http";
    function DrapcodeApis(projectSeoName, opts) {
        if (opts === void 0) { opts = {}; }
        var _a;
        //Network/URL Related
        // private API_PATH = "drapcode.io/api/";
        this.API_PATH = "webkonnect.site/api";
        // private API_PATH = "prodeless.com:5002/api";
        this.version = 1;
        this.protocol = "https";
        this.seoName = projectSeoName;
        this.xApiKey = opts.xApiKey;
        this.xTenantId = opts.xTenantId;
        this.xSubTenantId = opts.xSubTenantId;
        this.authorization = opts.authorization;
        this.environment =
            (_a = opts.environment) !== null && _a !== void 0 ? _a : Environment.PRODUCTION;
        this.builderKey = opts.builderKey;
        this.version = opts.version;
    }
    DrapcodeApis.prototype.setProjectSeoName = function (seo_name) {
        this.seoName = seo_name;
    };
    DrapcodeApis.prototype.getProjectSeoName = function () {
        return this.seoName;
    };
    DrapcodeApis.prototype.setXApiKey = function (apiKey) {
        this.xApiKey = apiKey;
    };
    DrapcodeApis.prototype.getXApiKey = function () {
        return this.xApiKey;
    };
    DrapcodeApis.prototype.setAuthorization = function (authorization) {
        this.authorization = authorization;
    };
    DrapcodeApis.prototype.getAuthorization = function () {
        return this.authorization;
    };
    DrapcodeApis.prototype.setEnvironment = function (env) {
        this.environment = env;
    };
    DrapcodeApis.prototype.getEnvironment = function () {
        return this.environment;
    };
    DrapcodeApis.prototype.setBuilderKey = function (builderKey) {
        this.builderKey = builderKey;
    };
    DrapcodeApis.prototype.getBuilderKey = function () {
        return this.builderKey;
    };
    DrapcodeApis.prototype.setVersion = function (version) {
        this.version = version;
    };
    DrapcodeApis.prototype.getVersion = function () {
        return this.version;
    };
    DrapcodeApis.prototype.setXTenantId = function (tenantId) {
        this.xTenantId = tenantId;
    };
    DrapcodeApis.prototype.getXTenantId = function () {
        return this.xTenantId;
    };
    DrapcodeApis.prototype.setXSubTenantId = function (subTenantId) {
        this.xSubTenantId = subTenantId;
    };
    DrapcodeApis.prototype.getXSubTenantId = function () {
        return this.xSubTenantId;
    };
    DrapcodeApis.prototype.info = function () {
        // private protocol :string= "https"
        return {
            seoName: this.seoName,
            xApiKey: this.xApiKey,
            xTenantId: this.xTenantId,
            xSubTenantId: this.xSubTenantId,
            authorization: this.authorization,
            environment: this.environment,
            builderKey: this.builderKey,
            api: this.API_PATH,
            version: this.version,
            protocol: this.protocol,
            headers: this.getHeaders(),
            url: this.getBaseUrl(),
        };
    };
    DrapcodeApis.prototype.getEnvSubdomain = function () {
        var env = String(this.environment).toUpperCase();
        switch (env) {
            case Environment.PREVIEW:
                return "preview";
            case Environment.BETA:
                return "sandbox";
            case Environment.ALPHA:
                return "uat";
            case Environment.PRODUCTION:
            default:
                return ""; // no extra subdomain for prod
        }
    };
    DrapcodeApis.prototype.getBaseUrl = function () {
        var envSub = this.getEnvSubdomain();
        if (envSub) {
            return "".concat(this.protocol, "://").concat(this.seoName, ".api.").concat(envSub, ".").concat(this.API_PATH, "/v").concat(this.version, "/developer");
        }
        return "".concat(this.protocol, "://").concat(this.seoName, ".api.").concat(this.API_PATH, "/v").concat(this.version, "/developer");
    };
    DrapcodeApis.prototype.getHeaders = function () {
        var headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        if (this.xApiKey) {
            headers["x-api-key"] = this.xApiKey;
        }
        if (this.xTenantId) {
            headers["x-tenant-id"] = this.xTenantId;
        }
        if (this.xSubTenantId) {
            headers["x-sub-tenant-id"] = this.xSubTenantId;
        }
        if (this.authorization) {
            headers["Authorization"] = this.authorization;
        }
        if (this.builderKey) {
            headers["builder-key"] = this.builderKey;
        }
        return headers;
    };
    DrapcodeApis.prototype.callApi = function (fn, name) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fn.apply(void 0, __spreadArray([this.getBaseUrl(),
                        this.getHeaders(),
                        this.getVersion() || 2,
                        name], args, false))];
            });
        });
    };
    DrapcodeApis.prototype.getAllItems = function (collectionName, reqQuery, query) {
        if (reqQuery === void 0) { reqQuery = null; }
        if (query === void 0) { query = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.getAllItems, collectionName, reqQuery, query)];
            });
        });
    };
    DrapcodeApis.prototype.createItem = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.createItem, collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.getItemsWithFilter = function (collectionName, filterUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.getItemsWithFilter, collectionName, filterUuid)];
            });
        });
    };
    DrapcodeApis.prototype.getItemsCountWithFilter = function (collectionName, filterUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.getItemsCountWithFilter, collectionName, filterUuid)];
            });
        });
    };
    DrapcodeApis.prototype.getItemWithUuid = function (collectionName, itemUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.getItemWithUuid, collectionName, itemUuid)];
            });
        });
    };
    DrapcodeApis.prototype.getItemOnly = function (collectionName, itemUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.getItemOnly, collectionName, itemUuid)];
            });
        });
    };
    DrapcodeApis.prototype.countItemByValue = function (collectionName, fieldName, fieldValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.countItemByValue, collectionName, fieldName, fieldValue)];
            });
        });
    };
    DrapcodeApis.prototype.saveCSVData = function (collectionName, items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.saveCSVData, collectionName, items)];
            });
        });
    };
    DrapcodeApis.prototype.validateItem = function (collectionName, item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.validateItem, collectionName, item)];
            });
        });
    };
    DrapcodeApis.prototype.lastItem = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.lastItem, collectionName)];
            });
        });
    };
    DrapcodeApis.prototype.updateItemWithUuid = function (collectionName, itemUuid, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.updateItemWithUuid, collectionName, itemUuid, body)];
            });
        });
    };
    DrapcodeApis.prototype.clearItem = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.clearItem, collectionName)];
            });
        });
    };
    DrapcodeApis.prototype.deleteFieldItem = function (collectionName, fieldName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.deleteFieldItem, collectionName, fieldName)];
            });
        });
    };
    DrapcodeApis.prototype.deleteItemWithUuid = function (collectionName, itemUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.deleteItemWithUuid, collectionName, itemUuid)];
            });
        });
    };
    DrapcodeApis.prototype.bulkDeleteItems = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.bulkDeleteItems, collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.removeReferenceItem = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.removeReferenceItem, collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.addReferenceItem = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.addReferenceItem, collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.getItemsByids = function (collectionName, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.getItemsByids, collectionName, body)];
            });
        });
    };
    DrapcodeApis.prototype.sendEmail = function (templateId, sendTo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callApi(methods_1.sendEmail, templateId, sendTo)];
            });
        });
    };
    return DrapcodeApis;
}());
exports.DrapcodeApis = DrapcodeApis;
__exportStar(require("./utils/index"), exports);
__exportStar(require("./utils/crypt"), exports);
__exportStar(require("./utils/constants"), exports);
