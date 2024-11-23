"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("../util/player");
var Attacker = /** @class */ (function (_super) {
    __extends(Attacker, _super);
    function Attacker() {
        var attacker_data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attacker_data[_i] = arguments[_i];
        }
        // health : 0
        // strength : 1
        // attack : 2
        return _super.call(this, "attacker", attacker_data[0], attacker_data[1], attacker_data[2]) || this;
    }
    return Attacker;
}(player_1.default));
exports.default = Attacker;
