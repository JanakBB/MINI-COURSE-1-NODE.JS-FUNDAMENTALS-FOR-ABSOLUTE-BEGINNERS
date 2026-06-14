function buildUrl(base, path, params = {}) {
    const url = new URL(path, base);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });
    return url.toString();
}

console.log(buildUrl("https://api.example.com", "/users", { page: 1, limit: 10 }));