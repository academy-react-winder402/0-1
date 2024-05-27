import { instance } from "../../Interceptor/Interceptor";

 const getBlogById = async (id) => {
    try {
      const response = await instance.get(`/News/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export {getBlogById}