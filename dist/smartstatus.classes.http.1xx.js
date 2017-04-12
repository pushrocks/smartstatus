"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartstatus_classes_http_1 = require("./smartstatus.classes.http");
class status100 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
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
        });
    }
}
exports.status100 = status100;
class status101 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 101,
            text: 'Switching Protocols',
            description: `The requester has asked the server to switch protocols and the server has agreed to do so.`
        });
    }
}
exports.status101 = status101;
class status102 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 102,
            text: 'Non-Authoritative Information',
            description: `A WebDAV request may contain many sub-requests involving file operations,
        requiring a long time to complete the request.
        This code indicates that the server has received and is processing the request,
        but no response is available yet.[6]
        This prevents the client from timing out and assuming the request was lost.`
        });
    }
}
exports.status102 = status102;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdGF0dXMuY2xhc3Nlcy5odHRwLjF4eC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3RhdHVzLmNsYXNzZXMuaHR0cC4xeHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBcUU7QUFFckUsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsV0FBVyxFQUFFOzs7Ozs7OzsrRkFRMEU7U0FDeEYsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBaEJELDhCQWdCQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxxQkFBcUI7WUFDM0IsV0FBVyxFQUFFLDRGQUE0RjtTQUMxRyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFSRCw4QkFRQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSwrQkFBK0I7WUFDckMsV0FBVyxFQUFFOzs7O29GQUkrRDtTQUM3RSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFaRCw4QkFZQyJ9