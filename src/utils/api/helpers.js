function getResContentMimeType(res) {
    const headerValue = res.headers.get("content-type") || "";
    const contentType = headerValue.split(";")[0];
    return contentType;
};

async function getResBody(res) {
    const mime = getResContentMimeType(res);
    return mime === "application/json" ? res.json() : res.text();
};

export { getResBody };