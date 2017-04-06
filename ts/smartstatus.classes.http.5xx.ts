import { HttpStatus, TStatusGroup } from './smartstatus.classes.http'

export class error500 extends HttpStatus {
  constructor () {
      super({
        code: 500,
        text: '',
        description: 'You\'ve encountered an Http error 400. That means that the page you are looking for couldn\'t be found for some reason'
      })
  }
}
