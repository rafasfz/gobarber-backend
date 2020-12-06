import fs from 'fs';
import path from 'path';
import uploadCofnig from '@config/upload';
import IStoragePrivider from '../models/IStorageProvider';

class DiskStorageProvider implements IStoragePrivider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadCofnig.tmpFolder, file),
      path.resolve(uploadCofnig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadCofnig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
