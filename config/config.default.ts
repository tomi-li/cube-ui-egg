import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571740424721_1671';

  // add your egg config in here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.statics_folder_path = '/upload';

  config.multipart = {
    mode: 'file',
  };

  config.security = {
    csrf: false,
    domainWhiteList: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
    ],
  };

  return config;
};
