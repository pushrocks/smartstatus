"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartstatus_classes_http_1 = require("./smartstatus.classes.http");
class status200 extends smartstatus_classes_http_1.HttpStatus {
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
exports.status200 = status200;
class status201 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 201,
            text: 'Created',
            description: `The request has been fulfilled, resulting in the creation of a new resource.`
        });
    }
}
exports.status201 = status201;
class status202 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 202,
            text: 'Accepted',
            description: `The request has been accepted for processing, but the processing has not been completed.
        The request might or might not be eventually acted upon, and may be disallowed when processing occurs.`
        });
    }
}
exports.status202 = status202;
class status203 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 203,
            text: 'Non-Authoritative Information',
            description: `The server is a transforming proxy (e.g. a Web accelerator)
        that received a 200 OK from its origin, but is returning a modified version of the origin's response.`
        });
    }
}
exports.status203 = status203;
class status204 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 204,
            text: 'Non-Authoritative Information',
            description: `The server successfully processed the request and is not returning any content.`
        });
    }
}
exports.status204 = status204;
class status205 extends smartstatus_classes_http_1.HttpStatus {
    constructor() {
        super({
            code: 205,
            text: 'Reset Content',
            description: `The server successfully processed the request, but is not returning any content.
        Unlike a 204 response, this response requires that the requester reset the document view.`
        });
    }
}
exports.status205 = status205;
class status206 extends smartstatus_classes_http_1.HttpStatus {
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
exports.status206 = status206;
class status207 extends smartstatus_classes_http_1.HttpStatus {
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
exports.status207 = status207;
class status208 extends smartstatus_classes_http_1.HttpStatus {
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
exports.status208 = status208;
class status226 extends smartstatus_classes_http_1.HttpStatus {
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
exports.status226 = status226;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdGF0dXMuY2xhc3Nlcy5odHRwLjJ4eC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3RhdHVzLmNsYXNzZXMuaHR0cC4yeHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBcUU7QUFFckUsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixXQUFXLEVBQUU7OztrSEFHNkY7U0FDM0csQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBWEQsOEJBV0M7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsU0FBUztZQUNmLFdBQVcsRUFBRSw4RUFBOEU7U0FDNUYsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsVUFBVTtZQUNoQixXQUFXLEVBQUU7K0dBQzBGO1NBQ3hHLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVRELDhCQVNDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLCtCQUErQjtZQUNyQyxXQUFXLEVBQUU7OEdBQ3lGO1NBQ3ZHLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVRELDhCQVNDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLCtCQUErQjtZQUNyQyxXQUFXLEVBQUUsaUZBQWlGO1NBQy9GLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVJELDhCQVFDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGVBQWU7WUFDckIsV0FBVyxFQUFFO2tHQUM2RTtTQUMzRixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFURCw4QkFTQztBQUVELGVBQXVCLFNBQVEscUNBQVU7SUFDdkM7UUFDSSxLQUFLLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxpQkFBaUI7WUFDdkIsV0FBVyxFQUFFOzs7Z0VBRzJDO1NBQ3pELENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVhELDhCQVdDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLGNBQWM7WUFDcEIsV0FBVyxFQUFFOztzREFFaUM7U0FDL0MsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBVkQsOEJBVUM7QUFFRCxlQUF1QixTQUFRLHFDQUFVO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLFdBQVcsRUFBRTs7MENBRXFCO1NBQ25DLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQVZELDhCQVVDO0FBRUQsZUFBdUIsU0FBUSxxQ0FBVTtJQUN2QztRQUNJLEtBQUssQ0FBQztZQUNKLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFNBQVM7WUFDZixXQUFXLEVBQUU7O3lDQUVvQjtTQUNsQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0Y7QUFWRCw4QkFVQyJ9