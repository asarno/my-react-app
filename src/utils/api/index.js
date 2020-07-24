
import { getResBody } from './helpers';

function Api() {
    async function request({
		method,
		body,
        url,
		headers = {},
	}) {

		if (headers["Content-Type"] === undefined) {
			headers["Content-Type"] = "application/json";
		}

		if (body instanceof FormData) {
			delete headers["Content-Type"];
		}

        // if payload is compressed
		if (body instanceof Buffer) {
			headers["Content-Encoding"] = "zlib";
		}

		const res = await fetch(url, {
			headers,
			method,
			mode: "cors",
			credentials: "same-origin",
			body:
				headers["Content-Type"] === "application/json" && !(body instanceof Buffer)
					? JSON.stringify(body)
					: body,
		});

		const resBody = await getResBody(res);
		const { status } = res;
		
		if (status >= 400 && status < 600) {
			throw new Error(url, method, res.status, res.headers, resBody);
		}
		
		return {
			method: method,
			body: resBody,
			statusCode: status,
			headers: res.headers,
		};
	}

    function get(options) {
        return request({ ...options, method: "GET"});
    }

    function post(options) {
        return request({ ...options, method: "POST"});
    }

    function put(options) {
        return request({ ...options, method: "PUT"});
    }

    function patch(options) {
        return request({ ...options, method: "PATCH"});
    }

    function del(options) {
        return request({ ...options, method: "DELETE"});
	}
	
	return {
		get,
		post,
		patch,
		put,
		del,
	}
}

export { Api };
