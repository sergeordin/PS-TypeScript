import { promises } from 'fs';
import { dirname, isAbsolute, join } from 'path';

export class FileService {
    private async isExist(path: string) {
        try {
            await promises.stat(path);
            return true;
        } catch {
            return false;
        }
    }
    public setFilePath(path: string, name: string, ext: string): string {
        if (!isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + '.' + ext);
    }

    async deleteFileIfExist(path: string) {
        if (await this.isExist(path)) {
            promises.unlink(path);
        }
    }
}
