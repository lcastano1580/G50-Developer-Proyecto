"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaController = void 0;
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpresaController = class EmpresaController {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    create(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.create(empresa);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.find(filter);
        });
    }
    updateAll(empresa, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.updateAll(empresa, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.findById(id, filter);
        });
    }
    updateById(id, empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.empresaRepository.updateById(id, empresa);
        });
    }
    replaceById(id, empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.empresaRepository.replaceById(id, empresa);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.empresaRepository.deleteById(id);
        });
    }
};
__decorate([
    (0, rest_1.post)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Empresa model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa) } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, {
                    title: 'NewEmpresa',
                    exclude: ['id'],
                }),
            },
        },
    }))
], EmpresaController.prototype, "create", null);
__decorate([
    (0, rest_1.get)('/empresas/count'),
    (0, rest_1.response)(200, {
        description: 'Empresa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, rest_1.param.where(models_1.Empresa))
], EmpresaController.prototype, "count", null);
__decorate([
    (0, rest_1.get)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Array of Empresa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { includeRelations: true }),
                },
            },
        },
    }),
    __param(0, rest_1.param.filter(models_1.Empresa))
], EmpresaController.prototype, "find", null);
__decorate([
    (0, rest_1.patch)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Empresa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.where(models_1.Empresa))
], EmpresaController.prototype, "updateAll", null);
__decorate([
    (0, rest_1.get)('/empresas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Empresa model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { includeRelations: true }),
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.filter(models_1.Empresa, { exclude: 'where' }))
], EmpresaController.prototype, "findById", null);
__decorate([
    (0, rest_1.patch)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa PATCH success',
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    }))
], EmpresaController.prototype, "updateById", null);
__decorate([
    (0, rest_1.put)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa PUT success',
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, (0, rest_1.requestBody)())
], EmpresaController.prototype, "replaceById", null);
__decorate([
    (0, rest_1.del)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa DELETE success',
    }),
    __param(0, rest_1.param.path.string('id'))
], EmpresaController.prototype, "deleteById", null);
EmpresaController = __decorate([
    __param(0, (0, repository_1.repository)(repositories_1.EmpresaRepository))
], EmpresaController);
exports.EmpresaController = EmpresaController;
