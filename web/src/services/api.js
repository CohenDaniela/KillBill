
const callToFiveList = () => {
  return fetch("http://localhost:3000/api/listFive")
    .then((response) => response.json())
    .then((result) => {
      return result; // Suponiendo que la API devuelve un objeto directamente
    });
};

const callToOthers = () => {
  return fetch("http://localhost:3000/api/others")
    .then((response) => response.json())
    .then((result) => {
      return result; // Suponiendo que la API devuelve un objeto directamente
    });
};

const objectApi = {
  getA: callToFiveList,
  getC: callToOthers,
};

export default objectApi;
