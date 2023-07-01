var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises } from 'fs';
import { dirname, isAbsolute, join } from 'path';
export class FileService {
    isExist(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield promises.stat(path);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
    setFilePath(path, name, ext) {
        if (!isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + '.' + ext);
    }
    deleteFileIfExist(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.isExist(path)) {
                promises.unlink(path);
            }
        });
    }
}
