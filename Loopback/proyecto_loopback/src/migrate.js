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
exports.migrate = void 0;
const application_1 = require("./application");
function migrate(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
        console.log('Migrating schemas (%s existing schema)', existingSchema);
        const app = new application_1.ProyectoLoopbackApplication();
        yield app.boot();
        yield app.migrateSchema({ existingSchema });
        // Connectors usually keep a pool of opened connections,
        // this keeps the process running even after all work is done.
        // We need to exit explicitly.
        process.exit(0);
    });
}
exports.migrate = migrate;
migrate(process.argv).catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
});
