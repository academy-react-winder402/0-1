import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { CourseListRight } from "./CorseListRight.jsx/CourseListRight";
import { CourseListMain } from "./CourseListMain.jsx/CourseListMain";
import CourseListProvider from "../../../Core/provider/CourseListProvider";
import { useState } from "react";
import { instance } from "../../../Core/Services/Interceptor/Interceptor";

const CourseList = () => {
  const [filter, setFilter] = useState({
    pageNumber: 1,
    rowOfPage: 9,
    sortCol: "Active",
    query: "",
    costDown: 0,
  });
  useEffect(() => {
    const url = `/Home/GetCoursesWithPagination?PageNumber=${
      filter.pageNumber
    }&RowsOfPage=${filter.rowOfPage}&SortingCol=${
      filter.sortCol
    }&SortType=DESC&CostDown=1${filter.query ? "&Query=" : ""}${
      filter.query ? filter.query : ""
    }&TechCount=0`;
    console.log("useeffect url",url);
    getFilteredCourses(url);
  }, [filter]);

  async function getFilteredCourses(url) {
    const response = await instance.get(url);
    //set to context
    console.log(response);
  }
  function searchHandler(searchTerm) {
    setFilter(prev=>{
      return {...prev, query: searchTerm}
    })
  }
  return (
    <div className=" h-auto w-[94%] flex gap-5 mt-14 mx-auto ">
      <CourseListProvider>
        <CourseListMain searchHandler={searchHandler} />
        <CourseListRight />
      </CourseListProvider>
    </div>
  );
};

export { CourseList };
