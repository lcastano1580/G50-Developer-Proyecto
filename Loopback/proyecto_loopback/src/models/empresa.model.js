"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
let Empresa = class Empresa extends repository_1.Entity {
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
], Empresa.prototype, "empresaid", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Empresa.prototype, "nombre", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Empresa.prototype, "nit", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Empresa.prototype, "telefono", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Empresa.prototype, "email", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    })
], Empresa.prototype, "direccion", void 0);
__decorate([
    (0, repository_1.hasMany)(() => cliente_model_1.Cliente)
], Empresa.prototype, "clientes", void 0);
Empresa = __decorate([
    (0, repository_1.model)({ settings: { strict: false } })
], Empresa);
exports.Empresa = Empresa;
