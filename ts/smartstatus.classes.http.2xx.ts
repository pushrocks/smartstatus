import { HttpStatus, TStatusGroup } from './smartstatus.classes.http';

export class status200 extends HttpStatus {
  constructor() {
    super({
      code: 200,
      text: 'OK',
      description: `Standard response for successful HTTP requests.
        The actual response will depend on the request method used.
        In a GET request, the response will contain an entity corresponding to the requested resource.
        In a POST request, the response will contain an entity describing or containing the result of the action.`
    });
  }
}

export class status201 extends HttpStatus {
  constructor() {
    super({
      code: 201,
      text: 'Created',
      description: `The request has been fulfilled, resulting in the creation of a new resource.`
    });
  }
}

export class status202 extends HttpStatus {
  constructor() {
    super({
      code: 202,
      text: 'Accepted',
      description: `The request has been accepted for processing, but the processing has not been completed.
        The request might or might not be eventually acted upon, and may be disallowed when processing occurs.`
    });
  }
}

export class status203 extends HttpStatus {
  constructor() {
    super({
      code: 203,
      text: 'Non-Authoritative Information',
      description: `The server is a transforming proxy (e.g. a Web accelerator)
        that received a 200 OK from its origin, but is returning a modified version of the origin's response.`
    });
  }
}

export class status204 extends HttpStatus {
  constructor() {
    super({
      code: 204,
      text: 'Non-Authoritative Information',
      description: `The server successfully processed the request and is not returning any content.`
    });
  }
}

export class status205 extends HttpStatus {
  constructor() {
    super({
      code: 205,
      text: 'Reset Content',
      description: `The server successfully processed the request, but is not returning any content.
        Unlike a 204 response, this response requires that the requester reset the document view.`
    });
  }
}

export class status206 extends HttpStatus {
  constructor() {
    super({
      code: 206,
      text: 'Partial Content',
      description: `The server is delivering only part of the resource (byte serving)
        due to a range header sent by the client.
        The range header is used by HTTP clients to enable resuming of interrupted downloads,
        or split a download into multiple simultaneous streams.`
    });
  }
}

export class status207 extends HttpStatus {
  constructor() {
    super({
      code: 207,
      text: 'Multi-Status',
      description: `The message body that follows is an XML message
        and can contain a number of separate response codes,
        depending on how many sub-requests were made.`
    });
  }
}

export class status208 extends HttpStatus {
  constructor() {
    super({
      code: 208,
      text: 'Already Reported',
      description: `The members of a DAV binding have already been enumerated
        in a preceding part of the (multistatus) response,
        and are not being included again.`
    });
  }
}

export class status226 extends HttpStatus {
  constructor() {
    super({
      code: 226,
      text: 'IM Used',
      description: `The server has fulfilled a request for the resource,
        and the response is a representation of the result of one or more instance-manipulations
        applied to the current instance.`
    });
  }
}
