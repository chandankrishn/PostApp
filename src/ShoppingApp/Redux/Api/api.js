export const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response;

      console.log("in api rec" ,data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  