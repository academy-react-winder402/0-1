import { instance } from "../../Interceptor/Interceptor";

 const getAllNews = async (pageNumber, rowsOfPage) => {
    try {
      let params = {
        PageNumber: pageNumber ? pageNumber : undefined,
        rowsOfPage: rowsOfPage ? rowsOfPage : undefined,
      };
      const response = await instance.get("/News", { params });
  
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export {getAllNews}
  









