import { HttpStatus, TStatusGroup } from './smartstatus.classes.http'

export class status100 extends HttpStatus {
  constructor () {
      super({
        code: 100,
        text: 'Continue',
        description: `The server has received the request headers and the client
            should proceed to send the request body
            (in the case of a request for which a body needs to be sent; for example, a POST request).
            Sending a large request body to a server after a request has been rejected
            for inappropriate headers would be inefficient.
            To have a server check the request's headers,
            a client must send Expect: 100-continue as a header in its initial request and receive
            a 100 Continue status code in response before sending the body.
            The response 417 Expectation Failed indicates the request should not be continued.`
      })
  }
}

export class status101 extends HttpStatus {
  constructor () {
      super({
        code: 101,
        text: 'Switching Protocols',
        description: `The requester has asked the server to switch protocols and the server has agreed to do so.`
      })
  }
}

export class status102 extends HttpStatus {
  constructor () {
      super({
        code: 102,
        text: 'Non-Authoritative Information',
        description: `A WebDAV request may contain many sub-requests involving file operations,
        requiring a long time to complete the request.
        This code indicates that the server has received and is processing the request,
        but no response is available yet.[6]
        This prevents the client from timing out and assuming the request was lost.`
      })
  }
}