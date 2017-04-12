"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartstatus_classes_http_1 = require("./smartstatus.classes.http");
class status500 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 500,
            text: 'Internal Server Error',
            description: 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.'
        });
    }
}
exports.status500 = status500;
class status501 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 501,
            text: 'Bad Request',
            description: `The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).`
        });
    }
}
exports.status501 = status501;
class status502 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 502,
            text: 'Payment Required',
            description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
        });
    }
}
exports.status502 = status502;
class status503 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 503,
            text: 'Forbidden',
            description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
        });
    }
}
exports.status503 = status503;
class status504 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 504,
            text: 'Gateway Time-out',
            description: `The server was acting as a gateway or proxy
          and did not receive a timely response from the upstream server.`
        });
    }
}
exports.status504 = status504;
class status505 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 505,
            text: 'HTTP Version Not Supported',
            description: `The server does not support the HTTP protocol version used in the request.`
        });
    }
}
exports.status505 = status505;
class status506 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 506,
            text: 'Variant Also Negotiates',
            description: `Transparent content negotiation for the request results in a circular reference.`
        });
    }
}
exports.status506 = status506;
class status507 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 507,
            text: 'Insufficient Storage',
            description: `The server is unable to store the representation needed to complete the request.`
        });
    }
}
exports.status507 = status507;
class status508 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 508,
            text: 'Loop Detected',
            description: `The server detected an infinite loop while processing the request`
        });
    }
}
exports.status508 = status508;
class status510 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 510,
            text: 'Loop Detected',
            description: `The server detected an infinite loop while processing the request`
        });
    }
}
exports.status510 = status510;
class status511 extends smartstatus_classes_http_1.HttpStatus {
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
exports.status511 = status511;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdGF0dXMuY2xhc3Nlcy5odHRwLjV4eC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3RhdHVzLmNsYXNzZXMuaHR0cC41eHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBcUU7QUFFckUsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLHVCQUF1QjtZQUM3QixXQUFXLEVBQUUsdUhBQXVIO1NBQ3JJLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVJELDhCQVFDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGFBQWE7WUFDbkIsV0FBVyxFQUFFLG9NQUFvTTtTQUNsTixDQUFDLENBQUE7SUFDTixDQUFDO0NBRUY7QUFURCw4QkFTQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxrQkFBa0I7WUFDeEIsV0FBVyxFQUFFLDZIQUE2SDtTQUMzSSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFSRCw4QkFRQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxXQUFXO1lBQ2pCLFdBQVcsRUFBRSw2SEFBNkg7U0FDM0ksQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLFdBQVcsRUFBRTswRUFDcUQ7U0FDbkUsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBVEQsOEJBU0M7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsNEJBQTRCO1lBQ2xDLFdBQVcsRUFBRSw0RUFBNEU7U0FDMUYsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUseUJBQXlCO1lBQy9CLFdBQVcsRUFBRSxrRkFBa0Y7U0FDaEcsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFdBQVcsRUFBRSxrRkFBa0Y7U0FDaEcsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsZUFBZTtZQUNyQixXQUFXLEVBQUUsbUVBQW1FO1NBQ2pGLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVJELDhCQVFDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGVBQWU7WUFDckIsV0FBVyxFQUFFLG1FQUFtRTtTQUNqRixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFSRCw4QkFRQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxpQ0FBaUM7WUFDdkMsV0FBVyxFQUFFOzsySUFFc0g7U0FDcEksQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBVkQsOEJBVUMifQ==