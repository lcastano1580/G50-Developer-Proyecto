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
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('PingController', () => {
    let app;
    let client;
    before('setupApplication', () => __awaiter(void 0, void 0, void 0, function* () {
        ({ app, client } = yield (0, test_helper_1.setupApplication)());
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield app.stop();
    }));
    it('invokes GET /ping', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield client.get('/ping?msg=world').expect(200);
        (0, testlab_1.expect)(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
    }));
});
