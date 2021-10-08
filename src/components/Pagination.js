import ReactPaginate from "react-paginate";
import React from "react";
import propTypes from "prop-types";
import { StyledPaginationContainer } from "../styles/pagination";

const Pagination = ({pageCount,paginate})=>{

	return(
		<StyledPaginationContainer>
			<ReactPaginate
				previousLabel={"prev"}
				nextLabel={"next"}
				breakLabel={"..."}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={paginate}
				containerClassName={"paginate-ul"}
				pageClassName={"li"}
				pageLinkClassName={"anchor"}
				previousClassName={"prevnext"}
				// previousLinkClassName={""}
				nextClassName={"prevnext"}
				nextLinkClassName={"f"}
				breakClassName={"dots"}
				// breakLinkClassName={""}
				activeClassName={"active"}
			/>
		</StyledPaginationContainer>
	)
}
Pagination.propTypes = {
	pageCount: propTypes.number,
	paginate:propTypes.func
};

export default Pagination;