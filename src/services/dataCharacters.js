const ENDPOINT = "https://hp-api.herokuapp.com/api/characters";

const getCharactersFromServer = () => {
  return fetch(ENDPOINT).then(res => res.json());
};

export default getCharactersFromServer;
