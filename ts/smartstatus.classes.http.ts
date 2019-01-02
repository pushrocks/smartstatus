export type TStatusGroup = 'clientError' | 'serverError';

export class HttpStatus {
  public static statusMap: {[key:string]: any} = {};
  public static addStatus (statusStringArg: string, statusArg: any) {
    HttpStatus.statusMap[statusStringArg] = statusArg;
  }
  public static getHttpStatusByString (codeStringArg: string): HttpStatus {
    const statusInstance =  new (HttpStatus.statusMap[codeStringArg])();
    return statusInstance;
  }
  public code: number;
  public text: string;
  public description: string;
  constructor(optionsArg: { code: number; text: string; description: string }) {
    this.code = optionsArg.code;
    this.text = optionsArg.text;
    this.description = optionsArg.description;
  }
}

export * from './smartstatus.classes.http.1xx';
export * from './smartstatus.classes.http.2xx';
export * from './smartstatus.classes.http.3xx';
export * from './smartstatus.classes.http.4xx';
export * from './smartstatus.classes.http.5xx';
