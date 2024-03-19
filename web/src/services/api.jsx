const callToApi = () => {
  const URL = "/api/killbill";
  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      throw error;
    });
};

export default callToApi;
