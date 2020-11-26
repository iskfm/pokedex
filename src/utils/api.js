const API_URL = process.env.API || 'https://pokeapi.co/api/v2';

const api = async (url) => {
  const cachedResponse = localStorage.getItem(url);
  const endpoint = `${API_URL}${url}`;

  if (cachedResponse !== null) {
    return Promise.resolve(JSON.parse(cachedResponse));
  }
  return fetch(endpoint).then((response) => {
    if (response.ok) {
      const json = response.json();
      json.then((data) => localStorage.setItem(url, JSON.stringify(data)));
      return json;
    }
    throw new Error('Something went wrong ...');
  });
};

export default api;
