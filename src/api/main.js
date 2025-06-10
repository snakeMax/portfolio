async function tryGetEndpointUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

console.log(tryGetEndpointUrl("localhost:5044/api/projects"));