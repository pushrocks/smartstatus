export type TStatusGroup = 'clientError' | 'serverError'

export class HttpStatus {
  code: number
  text: string
  description: string
  constructor (optionsArg: {
      code: number,
      text: string,
      description: string
  }) {

  }
}

export * from './smartstatus.classes.http.1xx'
export * from './smartstatus.classes.http.2xx'
export * from './smartstatus.classes.http.3xx'
export * from './smartstatus.classes.http.4xx'
export * from './smartstatus.classes.http.5xx'
