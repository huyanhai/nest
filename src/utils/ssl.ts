import { readFileSync } from 'fs';
import { resolve } from 'path';
import { ROOT_PATH } from 'src/constants/paths';

export const genSslOptions = () => {
  return {
    ca: readFileSync(resolve(ROOT_PATH, '../../', 'ssl/shui.one.crt')),
    key: readFileSync(resolve(ROOT_PATH, '../../', 'ssl/shui.one.key')),
    cert: readFileSync(resolve(ROOT_PATH, '../../', 'ssl/shui.one.crt')),
  };
};
