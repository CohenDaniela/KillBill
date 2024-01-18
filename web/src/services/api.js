const getDataProjects = async () => {
    const fetchData = await fetch('http://localhost:3000/api/listFive');
    const dataJson = await fetchData.json();
    return dataJson;
  };
  const object = {
    getDataProjects: getDataProjects,
  };
  
  export default object;