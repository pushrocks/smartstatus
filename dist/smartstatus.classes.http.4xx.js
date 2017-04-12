"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartstatus_classes_http_1 = require("./smartstatus.classes.http");
class status400 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 400,
            text: 'Bad Request',
            description: `The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).`
        });
    }
}
exports.status400 = status400;
class status401 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 401,
            text: 'Unauthorized',
            description: `Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.[32] 401 semantically means "unauthenticated",[33] i.e. the user does not have the necessary credentials.
        Note: Some sites issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.`
        });
    }
}
exports.status401 = status401;
class status402 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 402,
            text: 'Payment Required',
            description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
        });
    }
}
exports.status402 = status402;
class status403 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 403,
            text: 'Forbidden',
            description: `The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.`
        });
    }
}
exports.status403 = status403;
class status404 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 404,
            text: 'Not Found',
            description: `The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.`
        });
    }
}
exports.status404 = status404;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdGF0dXMuY2xhc3Nlcy5odHRwLjR4eC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3RhdHVzLmNsYXNzZXMuaHR0cC40eHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBcUU7QUFFckUsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGFBQWE7WUFDbkIsV0FBVyxFQUFFLG9NQUFvTTtTQUNsTixDQUFDLENBQUE7SUFDTixDQUFDO0NBRUY7QUFURCw4QkFTQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxjQUFjO1lBQ3BCLFdBQVcsRUFBRTt3TEFDbUs7U0FDakwsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUVGO0FBVkQsOEJBVUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLFdBQVcsRUFBRSw2SEFBNkg7U0FDM0ksQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsV0FBVztZQUNqQixXQUFXLEVBQUUsNkhBQTZIO1NBQzNJLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVJELDhCQVFDO0FBSUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFdBQVc7WUFDakIsV0FBVyxFQUFFLGtJQUFrSTtTQUNoSixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFSRCw4QkFRQyJ9