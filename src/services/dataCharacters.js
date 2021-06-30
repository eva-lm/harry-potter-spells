const ENDPOINT = "https://hp-api.herokuapp.com/api/characters";

// const ENDPOINT = "https://www.potterapi.com/v1/characters?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty";

const getCharactersFromServer = () => {
  return fetch(ENDPOINT).then(res => res.json());
};

export default getCharactersFromServer;


