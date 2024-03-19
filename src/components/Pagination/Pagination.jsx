import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCharacters,
  setCurrentPage,
  setNextPage,
  setPrevPage,
} from "../../store/slices/charactersSlice/charactersSlice";
import "./pagination.css"

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const [visiblePages, setVisiblePages] = useState([])

  const { nextPage, prevPage, currentPage } = useSelector(
    ({characters}) => characters
  );


  

  useEffect(() => {
    dispatch(getAllCharacters(currentPage));
  }, [currentPage]);

  const calculateVisiblePages = ()=>{
    const visibleRange = 5;
    const minPage = Math.max(1, currentPage - Math.floor(visibleRange / 2) );
    const maxPage = Math.min(totalPages, minPage + visibleRange - 1);
    const pages = []
    
    for(let i = minPage; i <= maxPage; i++){
      pages.push(i)
    }

    setVisiblePages(pages)
  }
  useEffect(()=>{
    calculateVisiblePages()
  },[totalPages , currentPage])

  const handleNextPage = () => {
    if (nextPage) {
      const nextPageNumber = parseInt(nextPage.split("=").pop());
      dispatch(setNextPage(nextPageNumber));
      dispatch(setCurrentPage(nextPageNumber));
    }
  };

  const handlePageClick = (pageNumber) =>{
    dispatch(setCurrentPage(pageNumber))
  }

  const handlePrevPage = () => {
    if (prevPage) {
      const prevPageNumber = parseInt(prevPage.split("=").pop());
      dispatch(setPrevPage(prevPageNumber));
      dispatch(setCurrentPage(prevPageNumber));
    }
  };

  //const handlePageClick = (pageNumber)

  return (
    <div className="pagination__container">
      <div className="numbers__pages__container">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      {
        currentPage + Math.floor(visiblePages.length / 2)  < totalPages && (
          <span>...</span>
        )
      }
      {visiblePages.map((page)=>{
        return(
          <button key={page}onClick={()=> handlePageClick(page)}>{page}</button>
        )
      })}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      <span>
        page {currentPage} / {totalPages}
      </span>
      </div>
    </div>
  );
};

export default Pagination;
