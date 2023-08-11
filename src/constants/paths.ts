import { resolve } from 'path';

export const ROOT_PATH = resolve(__dirname, '../');
export const IS_PROD = process.env.NODE_ENV === 'prod';
