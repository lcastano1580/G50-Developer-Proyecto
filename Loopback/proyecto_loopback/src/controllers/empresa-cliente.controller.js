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
exports.EmpresaClienteController = void 0;
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpresaClienteController = class EmpresaClienteController {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    find(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.clientes(id).find(filter);
        });
    }
    create(id, cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.clientes(id).create(cliente);
        });
    }
    patch(id, cliente, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.clientes(id).patch(cliente, where);
        });
    }
    delete(id, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.empresaRepository.clientes(id).delete(where);
        });
    }
};
__decorate([
    (0, rest_1.get)('/empresas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Array of Empresa has many Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter'))
], EmpresaClienteController.prototype, "find", null);
__decorate([
    (0, rest_1.post)('/empresas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Empresa model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewClienteInEmpresa',
                    exclude: ['clienteid'],
                    optional: ['empresaId']
                }),
            },
        },
    }))
], EmpresaClienteController.prototype, "create", null);
__decorate([
    (0, rest_1.patch)('/empresas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Empresa.Cliente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    __param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Cliente)))
], EmpresaClienteController.prototype, "patch", null);
__decorate([
    (0, rest_1.del)('/empresas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Empresa.Cliente DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Cliente)))
], EmpresaClienteController.prototype, "delete", null);
EmpresaClienteController = __decorate([
    __param(0, (0, repository_1.repository)(repositories_1.EmpresaRepository))
], EmpresaClienteController);
exports.EmpresaClienteController = EmpresaClienteController;
