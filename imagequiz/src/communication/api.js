let getFlowers = () => {
    return fetch("http://localhost:4001/flowers").then((x) => x.json())
}

let api = { getFlowers: getFlowers };

export default api;