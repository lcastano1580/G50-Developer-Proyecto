"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const repository_1 = require("@loopback/repository");
let Cliente = class Cliente extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    })
], Cliente.prototype, "clienteid", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Cliente.prototype, "nombre", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Cliente.prototype, "apellidos", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Cliente.prototype, "documento", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Cliente.prototype, "telefono", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Cliente.prototype, "email", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Cliente.prototype, "direccion", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
    })
], Cliente.prototype, "empresaId", void 0);
Cliente = __decorate([
    (0, repository_1.model)({ settings: { strict: false } })
], Cliente);
exports.Cliente = Cliente;
