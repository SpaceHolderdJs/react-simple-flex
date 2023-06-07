"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
var styled_components_1 = require("styled-components");
var types_1 = require("../types");
var helpers_1 = require("../helpers");
exports.Element = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return (0, helpers_1.generateCSSStyledRules)(types_1.HTMLElementBasicPropsKeys, props);
});
var core = (0, helpers_1.buildCoreElementsLib)();
exports.default = core;
var templateObject_1;
