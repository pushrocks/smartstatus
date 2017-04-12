"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartstatus_classes_http_1 = require("./smartstatus.classes.http");
class status300 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 300,
            text: ' Multiple Choices',
            description: `Indicates multiple options for the resource from which the client may choose
        (via agent-driven content negotiation).
        For example, this code could be used to present multiple video format options,
        to list files with different filename extensions, or to suggest word-sense disambiguation.`
        });
    }
}
exports.status300 = status300;
class status301 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 301,
            text: 'Moved Permanently',
            description: `This and all future requests should be directed to the given URI.`
        });
    }
}
exports.status301 = status301;
class status302 extends smartstatus_classes_http_1.HttpStatus {
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
        });
    }
}
exports.status302 = status302;
class status303 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 303,
            text: 'See Other',
            description: `The response to the request can be found under another URI using a GET method.
        When received in response to a POST (or PUT/DELETE),
        the client should presume that the server has received the data and should issue a redirect
        with a separate GET message.`
        });
    }
}
exports.status303 = status303;
class status304 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 304,
            text: 'Not Modified',
            description: `Indicates that the resource has not been modified
        since the version specified by the request headers If-Modified-Since or If-None-Match.
        In such case, there is no need to retransmit the resource since the client
        still has a previously-downloaded copy.`
        });
    }
}
exports.status304 = status304;
class status305 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 305,
            text: 'Use Proxy',
            description: `The requested resource is available only through a proxy,
        the address for which is provided in the response. Many HTTP clients (such as Mozilla[25]
        and Internet Explorer) do not correctly handle responses with this status code,
        primarily for security reasons.`
        });
    }
}
exports.status305 = status305;
class status306 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 306,
            text: 'Switch Proxy',
            description: `No longer used. Originally meant "Subsequent requests should use the specified proxy."`
        });
    }
}
exports.status306 = status306;
class status307 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 307,
            text: 'Temporary Redirect',
            description: `In this case, the request should be repeated with another URI;
      however, future requests should still use the original URI.
      In contrast to how 302 was historically implemented,
      the request method is not allowed to be changed when reissuing the original request.
      For example, a POST request should be repeated using another POST request.`
        });
    }
}
exports.status307 = status307;
class status308 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 308,
            text: 'Permanent Redirect',
            description: `The request and all future requests should be repeated using another URI.
      307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
      So, for example, submitting a form to a permanently redirected resource may continue smoothly.`
        });
    }
}
exports.status308 = status308;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdGF0dXMuY2xhc3Nlcy5odHRwLjN4eC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3RhdHVzLmNsYXNzZXMuaHR0cC4zeHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBcUU7QUFFckUsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNFLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixXQUFXLEVBQUU7OzttR0FHZ0Y7U0FDOUYsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBWEQsOEJBV0M7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0UsS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFdBQVcsRUFBRSxtRUFBbUU7U0FDakYsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0UsS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsT0FBTztZQUNiLFdBQVcsRUFBRTs7Ozs7cUdBS2tGO1NBQ2hHLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQWJELDhCQWFDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNFLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFdBQVc7WUFDakIsV0FBVyxFQUFFOzs7cUNBR2tCO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQVhELDhCQVdDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNFLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGNBQWM7WUFDcEIsV0FBVyxFQUFFOzs7Z0RBRzZCO1NBQzNDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQVhELDhCQVdDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNFLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFdBQVc7WUFDakIsV0FBVyxFQUFFOzs7d0NBR3FCO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQVhELDhCQVdDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNFLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGNBQWM7WUFDcEIsV0FBVyxFQUFFLHdGQUF3RjtTQUN0RyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFSRCw4QkFRQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDRSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxvQkFBb0I7WUFDMUIsV0FBVyxFQUFFOzs7O2lGQUk4RDtTQUM1RSxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFaRCw4QkFZQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDRSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxvQkFBb0I7WUFDMUIsV0FBVyxFQUFFOztxR0FFa0Y7U0FDaEcsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBVkQsOEJBVUMifQ==