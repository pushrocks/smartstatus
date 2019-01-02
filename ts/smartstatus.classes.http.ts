export type TStatusGroup = 'clientError' | 'serverError';

export class HttpStatus {
  protected static statusMap: {[key:string]: HttpStatus} = {};
  public static getHttpStatusByString (codeArg: number) {
    return HttpStatus.statusMap[codeArg.toString()];
  }
  code: number;
  text: string;
  description: string;
  constructor(optionsArg: { code: number; text: string; description: string }) {
    this.code = optionsArg.code;
    this.text = optionsArg.text;
    this.description = optionsArg.description;
    HttpStatus.statusMap[this.code.toString()] = this;
  }
}

export * from './smartstatus.classes.http.1xx';
export * from './smartstatus.classes.http.2xx';
export * from './smartstatus.classes.http.3xx';
export * from './smartstatus.classes.http.4xx';
export * from './smartstatus.classes.http.5xx';
