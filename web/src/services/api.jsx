const callToApi = () => {
  const URL = "http://localhost:3001/api/killbill";
  return (
    fetch(URL)
      // return fetch("https://killbill-backend.onrender.com/api/killbill")
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
      })
  );
};

export default callToApi;
