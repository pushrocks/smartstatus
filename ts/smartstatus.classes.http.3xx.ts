import { HttpStatus, TStatusGroup } from './smartstatus.classes.http'

export class status300 extends HttpStatus {
  constructor() {
    super({
      code: 300,
      text: ' Multiple Choices',
      description: `Indicates multiple options for the resource from which the client may choose
        (via agent-driven content negotiation).
        For example, this code could be used to present multiple video format options,
        to list files with different filename extensions, or to suggest word-sense disambiguation.`
    })
  }
}

export class status301 extends HttpStatus {
  constructor() {
    super({
      code: 301,
      text: 'Moved Permanently',
      description: `This and all future requests should be directed to the given URI.`
    })
  }
}

export class status302 extends HttpStatus {
  constructor() {
    super({
      code: 302,
      text: 'Found',
      description: `This is an example of industry practice contradicting the standard.
        The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
        (the original describing phrase was "Moved Temporarily"),
        [20] but popular browsers implemented 302 with the functionality of a 303 See Other.
        Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.[21]
        However, some Web applications and frameworks use the 302 status code as if it were the 303.`
    })
  }
}

export class status303 extends HttpStatus {
  constructor() {
    super({
      code: 303,
      text: 'See Other',
      description: `The response to the request can be found under another URI using a GET method.
        When received in response to a POST (or PUT/DELETE),
        the client should presume that the server has received the data and should issue a redirect
        with a separate GET message.`
    })
  }
}

export class status304 extends HttpStatus {
  constructor() {
    super({
      code: 304,
      text: 'Not Modified',
      description: `Indicates that the resource has not been modified
        since the version specified by the request headers If-Modified-Since or If-None-Match.
        In such case, there is no need to retransmit the resource since the client
        still has a previously-downloaded copy.`
    })
  }
}

export class status305 extends HttpStatus {
  constructor() {
    super({
      code: 305,
      text: 'Use Proxy',
      description: `The requested resource is available only through a proxy,
        the address for which is provided in the response. Many HTTP clients (such as Mozilla[25]
        and Internet Explorer) do not correctly handle responses with this status code,
        primarily for security reasons.`
    })
  }
}

export class status306 extends HttpStatus {
  constructor() {
    super({
      code: 306,
      text: 'Switch Proxy',
      description: `No longer used. Originally meant "Subsequent requests should use the specified proxy."`
    })
  }
}

export class status307 extends HttpStatus {
  constructor() {
    super({
      code: 307,
      text: 'Temporary Redirect',
      description: `In this case, the request should be repeated with another URI;
      however, future requests should still use the original URI.
      In contrast to how 302 was historically implemented,
      the request method is not allowed to be changed when reissuing the original request.
      For example, a POST request should be repeated using another POST request.`
    })
  }
}

export class status308 extends HttpStatus {
  constructor() {
    super({
      code: 308,
      text: 'Permanent Redirect',
      description: `The request and all future requests should be repeated using another URI.
      307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
      So, for example, submitting a form to a permanently redirected resource may continue smoothly.`
    })
  }
}
