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
const test_helper_1 = require("./test-helper");
describe('HomePage', () => {
    let app;
    let client;
    before('setupApplication', () => __awaiter(void 0, void 0, void 0, function* () {
        ({ app, client } = yield (0, test_helper_1.setupApplication)());
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield app.stop();
    }));
    it('exposes a default home page', () => __awaiter(void 0, void 0, void 0, function* () {
        yield client
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/html/);
    }));
    it('exposes self-hosted explorer', () => __awaiter(void 0, void 0, void 0, function* () {
        yield client
            .get('/explorer/')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .expect(/<title>LoopBack API Explorer/);
    }));
});
