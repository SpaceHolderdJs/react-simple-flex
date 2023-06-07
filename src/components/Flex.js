"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexColumn = exports.FlexRow = exports.Flex = void 0;
var styled_components_1 = require("styled-components");
var Elements_1 = require("./Elements");
// @ts-ignore
// too big type
exports.Flex = (0, styled_components_1.default)(Elements_1.Element)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1 1 auto;\n"], ["\n  display: flex;\n  flex: 1 1 auto;\n"])));
exports.FlexRow = (0, styled_components_1.default)(exports.Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.FlexColumn = (0, styled_components_1.default)(exports.Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
