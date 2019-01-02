import { HttpStatus, TStatusGroup } from './smartstatus.classes.http';

export class Status500 extends HttpStatus {
  constructor() {
    super({
      code: 500,
      text: 'Internal Server Error',
      description:
        'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.'
    });
  }
}
HttpStatus.addStatus('500', Status500);

// tslint:disable-next-line: max-classes-per-file
export class Status501 extends HttpStatus {
  constructor() {
    super({
      code: 501,
      text: 'Bad Request',
      description: `The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).`
    });
  }
}
HttpStatus.addStatus('501', Status501);

// tslint:disable-next-line: max-classes-per-file
export class Status502 extends HttpStatus {
  constructor() {
    super({
      code: 502,
      text: 'Payment Required',
      description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
    });
  }
}
HttpStatus.addStatus('502', Status502);

// tslint:disable-next-line: max-classes-per-file
export class Status503 extends HttpStatus {
  constructor() {
    super({
      code: 503,
      text: 'Forbidden',
      description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
    });
  }
}
HttpStatus.addStatus('503', Status503);

// tslint:disable-next-line: max-classes-per-file
export class Status504 extends HttpStatus {
  constructor() {
    super({
      code: 504,
      text: 'Gateway Time-out',
      description: `The server was acting as a gateway or proxy
          and did not receive a timely response from the upstream server.`
    });
  }
}
HttpStatus.addStatus('504', Status504);

// tslint:disable-next-line: max-classes-per-file
export class Status505 extends HttpStatus {
  constructor() {
    super({
      code: 505,
      text: 'HTTP Version Not Supported',
      description: `The server does not support the HTTP protocol version used in the request.`
    });
  }
}
HttpStatus.addStatus('505', Status505);

// tslint:disable-next-line: max-classes-per-file
export class Status506 extends HttpStatus {
  constructor() {
    super({
      code: 506,
      text: 'Variant Also Negotiates',
      description: `Transparent content negotiation for the request results in a circular reference.`
    });
  }
}

HttpStatus.addStatus('506', Status506);

// tslint:disable-next-line: max-classes-per-file
export class Status507 extends HttpStatus {
  constructor() {
    super({
      code: 507,
      text: 'Insufficient Storage',
      description: `The server is unable to store the representation needed to complete the request.`
    });
  }
}

HttpStatus.addStatus('507', Status507);

// tslint:disable-next-line: max-classes-per-file
export class Status508 extends HttpStatus {
  constructor() {
    super({
      code: 508,
      text: 'Loop Detected',
      description: `The server detected an infinite loop while processing the request`
    });
  }
}
HttpStatus.addStatus('508', Status508);

// tslint:disable-next-line: max-classes-per-file
export class Status510 extends HttpStatus {
  constructor() {
    super({
      code: 510,
      text: 'Loop Detected',
      description: `The server detected an infinite loop while processing the request`
    });
  }
}

// tslint:disable-next-line: max-classes-per-file
export class Status511 extends HttpStatus {
  constructor() {
    super({
      code: 511,
      text: 'Network Authentication Required',
      description: `The client needs to authenticate to gain network access.
          Intended for use by intercepting proxies used to control access to the network
          (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot)`
    });
  }
}
HttpStatus.addStatus('511', Status511);
