"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("./inversify.config");
const warrior_1 = require("./warrior");
const warrior = inversify_config_1.container.resolve(warrior_1.Warrior);
warrior.fight(); // Output: Swinging the sword!
