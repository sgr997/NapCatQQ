import fs from 'node:fs';
import path from 'node:path';
import { selfInfo } from '@/core/data';
import { logDebug, logError } from '@/common/utils/log';
import { ConfigBase } from '@/common/utils/ConfigBase';
import { json } from 'stream/consumers';

export interface OB11Config {
  http: {
    enable: boolean;
    host: string;
    port: number;
    secret: string;
    enableHeart: boolean;
    enablePost: boolean;
    postUrls: string[];
  };
  ws: {
    enable: boolean;
    host: string;
    port: number;
  };
  reverseWs: {
    enable: boolean;
    urls: string[];
  };

  debug: boolean;
  heartInterval: number;
  messagePostFormat: 'array' | 'string';
  enableLocalFile2Url: boolean;
  musicSignUrl: string;
  reportSelfMessage: boolean;
  token: string;
  GroupLocalTimeRecord: boolean;
  GroupLocalTimeRecordList: Array<number>;

  read(): OB11Config;

  save(config: OB11Config): void;
}

class Config extends ConfigBase<OB11Config> implements OB11Config {
  http = {
    enable: false,
    host: '',
    port: 3000,
    secret: '',
    enableHeart: false,
    enablePost: false,
    postUrls: [],
  };
  ws = {
    enable: false,
    host: '',
    port: 3001,
  };
  reverseWs = {
    enable: false,
    urls: [],
  };
  debug = false;
  heartInterval = 30000;
  messagePostFormat: 'array' | 'string' = 'array';
  enableLocalFile2Url = true;
  musicSignUrl = '';
  reportSelfMessage = false;
  token = '';
  GroupLocalTimeRecord = false;
  GroupLocalTimeRecordList = [] as Array<number>;

  getConfigPath() {
    return path.join(this.getConfigDir(), `onebot11_${selfInfo.uin}.json`);
  }

  protected getKeys(): string[] | null {
    return null;
  }
}

export const ob11Config = new Config();
