// @ts-ignore
import { copyFile, existsSync, mkdirSync } from 'fs';

export default {
  oss(file) {
    // @ts-ignore
    const { name, baseDir, config } = this.ctx.app;
    const [, randomName] = file.filepath.split(name);
    const destFile = baseDir + config.statics_folder_path + randomName;
    const fileUrl = config.statics_folder_path + randomName;
    // const destFolder = destFile.slice(0, destFile.lastIndexOf('\/'));
    // if (!existsSync(destFolder)) {
    //   // @ts-ignore
    //   mkdirSync(destFile, { recursive: true });
    // }
    return new Promise((resolve, reject) => {
      copyFile(file.filepath, destFile, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve(fileUrl);
        // @ts-ignore
        this.ctx.cleanupRequestFiles();
      });
    });
  },
}
