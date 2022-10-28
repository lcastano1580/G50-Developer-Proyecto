"use strict";
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
const application_1 = require("./application");
/**
 * Export the OpenAPI spec from the application
 */
function exportOpenApiSpec() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            rest: {
                port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
                host: (_b = process.env.HOST) !== null && _b !== void 0 ? _b : 'localhost',
            },
        };
        const outFile = (_c = process.argv[2]) !== null && _c !== void 0 ? _c : '';
        const app = new application_1.ProyectoLoopbackApplication(config);
        yield app.boot();
        yield app.exportOpenApiSpec(outFile);
    });
}
exportOpenApiSpec().catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err);
    process.exit(1);
});
