"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bow = exports.Sword = void 0;
const inversify_1 = require("inversify");
let Sword = class Sword {
    constructor() {
        this.name = "Sword";
    }
    use() {
        return 'Swinging the sword!';
    }
};
exports.Sword = Sword;
exports.Sword = Sword = __decorate([
    (0, inversify_1.injectable)()
], Sword);
let Bow = class Bow {
    constructor() {
        this.name = "Bow";
    }
    use() {
        return 'Shooting an arrow!';
    }
};
exports.Bow = Bow;
exports.Bow = Bow = __decorate([
    (0, inversify_1.injectable)()
], Bow);
