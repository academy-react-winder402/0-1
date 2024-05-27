import React from "react";
import ReactPaginate from "react-paginate";

export default function PageInation({ totalPages, handlePageClick }) {
  
  return (
   <>
   <div className="mx-auto">
     {totalPages > 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center items-center mt-32 mb-12 gap-x-2 "
            pageClassName="flex hover:bg-cyan-700 hover:text-white justify-center item-center border border-solid border-cyan-700 rounded-full w-10 h-10"
            activeClassName="bg-cyan-700 block  text-white"
            nextClassName="flex hover:bg-cyan-700 hover:text-white justify-center item-center border border-solid border-cyan-700 rounded-full w-10 h-10"
            previousClassName="flex hover:bg-cyan-700 hover:text-white justify-center item-center border border-solid border-cyan-700 rounded-full w-10 h-10"
          />
        )}
    </div>    
   </>
  );
}