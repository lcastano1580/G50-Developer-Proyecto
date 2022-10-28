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
exports.ClienteController = void 0;
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteController = class ClienteController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    create(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepository.create(cliente);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepository.find(filter);
        });
    }
    updateAll(cliente, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepository.updateAll(cliente, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepository.findById(id, filter);
        });
    }
    updateById(id, cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clienteRepository.updateById(id, cliente);
        });
    }
    replaceById(id, cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clienteRepository.replaceById(id, cliente);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clienteRepository.deleteById(id);
        });
    }
};
__decorate([
    (0, rest_1.post)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewCliente',
                    exclude: ['id'],
                }),
            },
        },
    }))
], ClienteController.prototype, "create", null);
__decorate([
    (0, rest_1.get)('/clientes/count'),
    (0, rest_1.response)(200, {
        description: 'Cliente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, rest_1.param.where(models_1.Cliente))
], ClienteController.prototype, "count", null);
__decorate([
    (0, rest_1.get)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Array of Cliente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
                },
            },
        },
    }),
    __param(0, rest_1.param.filter(models_1.Cliente))
], ClienteController.prototype, "find", null);
__decorate([
    (0, rest_1.patch)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.where(models_1.Cliente))
], ClienteController.prototype, "updateAll", null);
__decorate([
    (0, rest_1.get)('/clientes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.filter(models_1.Cliente, { exclude: 'where' }))
], ClienteController.prototype, "findById", null);
__decorate([
    (0, rest_1.patch)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PATCH success',
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    }))
], ClienteController.prototype, "updateById", null);
__decorate([
    (0, rest_1.put)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PUT success',
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, (0, rest_1.requestBody)())
], ClienteController.prototype, "replaceById", null);
__decorate([
    (0, rest_1.del)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente DELETE success',
    }),
    __param(0, rest_1.param.path.string('id'))
], ClienteController.prototype, "deleteById", null);
ClienteController = __decorate([
    __param(0, (0, repository_1.repository)(repositories_1.ClienteRepository))
], ClienteController);
exports.ClienteController = ClienteController;
