//const url = "https://www.potterapi.com/v1/spells?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty";

const url = "https://fedeperin-harry-potter-api.herokuapp.com/hechizos"

const getDataFromServer = () => {
  return fetch(url).then(response => response.json());
};

export default getDataFromServer;
