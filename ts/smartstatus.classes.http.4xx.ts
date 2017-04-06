import { HttpStatus, TStatusGroup } from './smartstatus.classes.http'

export class error400 extends HttpStatus {
  constructor () {
      super({
        code: 400,
        text: 'Bad Request',
        description: `The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).`
      })
  }

}

export class error402 extends HttpStatus {
  constructor () {
      super({
        code: 402,
        text: 'Payment Required',
        description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
      })
  }
}

export class error403 extends HttpStatus {
  constructor () {
      super({
        code: 403,
        text: 'Forbidden',
        description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
      })
  }
}

export class error401 extends HttpStatus {
  constructor () {
      super({
        code: 401,
        text: 'Unauthorized',
        description: `Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.[32] 401 semantically means "unauthenticated",[33] i.e. the user does not have the necessary credentials.
        Note: Some sites issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.`
      })
  }

}

export class error404 extends HttpStatus {
  constructor () {
      super({
        code: 404,
        text: 'Not Found',
        description: `The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.`
      })
  }
}
