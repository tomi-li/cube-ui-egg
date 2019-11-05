import { Controller } from 'egg';
const fs = require('mz/fs');

export default class HomeController extends Controller {

  public async index(ctx) {
    ctx.body = 'egg'
  }

  public async upload(ctx) {
    const { request, helper } = ctx;
    const [file] = request.files;
    try {
      // 处理文件，比如上传到云端
      const result = await helper.oss(file);
      console.log(result);
    } finally {
      // 需要删除临时文件
      await fs.unlink(file.filepath);
    }
    ctx.body = 'ok';
  }
}
