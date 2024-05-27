import { instance } from "../../Interceptor/Interceptor";


export const getCourseListAll = async (pageNumber, rowsOfPage) => {
  try {
    let params = {
      PageNumber: pageNumber ? pageNumber : undefined,
      RowsOfPage: rowsOfPage ? rowsOfPage : undefined,
    };
    const response = await instance.get(`/Home/GetCoursesWithPagination`,{params});
    return response;
  } catch (error) {
    console.log(error);
  }
};