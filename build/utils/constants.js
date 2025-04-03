"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOperation = void 0;
var QueryOperation;
(function (QueryOperation) {
    QueryOperation["EQUALS"] = "EQUALS";
    QueryOperation["IS_NOT_NULL"] = "IS_NOT_NULL";
    QueryOperation["IS_NULL"] = "IS_NULL";
    QueryOperation["LIKE"] = "LIKE";
    QueryOperation["LESS_THAN_EQUALS_TO"] = "LESS_THAN_EQUALS_TO";
    QueryOperation["GREATER_THAN_EQUALS_TO"] = "GREATER_THAN_EQUALS_TO";
    QueryOperation["LESS_THAN"] = "LESS_THAN";
    QueryOperation["GREATER_THAN"] = "GREATER_THAN";
    QueryOperation["IN_LIST"] = "IN_LIST";
    QueryOperation["NOT_IN_LIST"] = "NOT_IN_LIST";
})(QueryOperation = exports.QueryOperation || (exports.QueryOperation = {}));
