import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCharacters,
  setCurrentPage,
  setNextPage,
  setPrevPage,
} from "../../store/slices/charactersSlice/charactersSlice";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const [visiblePages, setVisiblePages] = useState([])

  const { nextPage, prevPage, currentPage } = useSelector(
    ({characters}) => characters
  );


  

  useEffect(() => {
    dispatch(getAllCharacters(currentPage));
  }, [dispatch, currentPage]);

  const calculateVisiblePages = ()=>{
    const visibleRange = 5;
    const minPage = Math.max(1, currentPage - Math.floor(visibleRange) / 2);
    const maxPage = Math.min(totalPages, minPage + visibleRange - 1);
    const pages = []
    
    for(let i = 0; minPage <= maxPage; i++){
      pages.push(i)
    }

    setVisiblePages(pages)
  }
  //useEffect(()=>{
  //  calculateVisiblePages()
  //},[currentPage])

  const handleNextPage = () => {
    if (nextPage) {
      const nextPageNumber = parseInt(nextPage.slice(-1));
      dispatch(setNextPage(nextPageNumber));
      dispatch(setCurrentPage(nextPageNumber));
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      const prevPageNumber = parseInt(prevPage.slice(-1));
      dispatch(setPrevPage(prevPageNumber));
      dispatch(setCurrentPage(prevPageNumber));
    }
  };

  //const handlePageClick = (pageNumber)

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      {
        currentPage + Math.floor(visiblePages.length / 2) < totalPages && (
          <span>...</span>
        )
      }
      {visiblePages.map((page)=>{
        return(
          <button key={page}></button>
        )
      })}
      <span>
        page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
