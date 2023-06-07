"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCoreElementsLib = exports.generateCSSStyledRules = void 0;
var styled_components_1 = require("styled-components");
var types_1 = require("./types");
var generateCSSStyledRules = function (keys, props) {
    return keys
        .map(function (ruleName) { return "".concat(String(ruleName), ": ").concat(props[ruleName], ";"); })
        .filter(function (rule) { return !/undefined/.test(rule); })
        .join(";");
};
exports.generateCSSStyledRules = generateCSSStyledRules;
var buildCoreElementsLib = function () {
    var core = {};
    types_1.AllPossibleHTMLElements.forEach(function (tagName) {
        // ts-ignore
        var basicStyledWithTag = styled_components_1.default[tagName](templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
        core[tagName] = (0, styled_components_1.default)(basicStyledWithTag)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), function (props) {
            return (0, exports.generateCSSStyledRules)(types_1.HTMLElementBasicPropsKeys, props);
        });
    });
    return core;
};
exports.buildCoreElementsLib = buildCoreElementsLib;
var templateObject_1, templateObject_2;
