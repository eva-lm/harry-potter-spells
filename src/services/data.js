//const url = "https://www.potterapi.com/v1/spells?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty";

export const urlSpells = "https://fedeperin-harry-potter-api.herokuapp.com/hechizos";

export const HTTPMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
}
export const fetchService = async (path, state, method = HTTPMethods.GET, bodyObject = '') => {
  let headers = new Headers();
  let response;
  switch (method) {
    case HTTPMethods.GET:
      response = fetch(path, {
        headers: headers,
        method: HTTPMethods.GET,
      }).then(res => res.json()).catch(err => {
        console.log("Error getting: ", err);
      })
      break;
      case HTTPMethods.POST:
          response = fetch(path, {
              headers: headers,
              method: HTTPMethods.POST,
              body: JSON.stringify(bodyObject)
          }).then(res => res.json()).catch(err => {
              console.log("Error posting: ", err);
          });
          break;
      case HTTPMethods.PUT:
          response = fetch(path, {
              headers: headers,
              method: HTTPMethods.PUT,
              body: JSON.stringify(bodyObject)
          }).then(res => res.json()).catch(err => {
              console.log("Error putting: ", err);
          });
          break;
      case HTTPMethods.DELETE:
          response = fetch(path, {
              headers: HTTPMethods.DELETE,
              method: method,
          }).then(res => res.json()).catch(err => {
              console.log("Error deleting: ", err);
          });
          break;
      default:
          response = fetch(path, {
              headers: headers,
              method: HTTPMethods.GET,
          }).then(res => res.json()).catch(err => {
              console.log("Error getting: ", err);
          });
  }
  return response;
  }
