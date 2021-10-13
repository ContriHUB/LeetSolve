import React, {useState} from "react";
import propTypes, { array } from "prop-types";

import {
	TableContainer,
	Table,
	TBody,
	THead,
	Tr,
	Th,
	Td,
} from "../styles/table";

import {
	Pagination,
	PaginationItem,
	Prev, 
	Next
} from "../styles/pagination";

import { Scrollable } from "../styles/scrollbar";

const QuestionsTable = ({ data}) => {
	// const tempData = propTypes.object(data);
	const dataLimit = 11;
	const pageLimit = 5;

	const [pages] = useState(Math.round( data["stat_status_pairs"].length / dataLimit));
	const [currentPage, setCurrentPage] = useState(1);

	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}

	function goToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}

	function changePage(event) {
		console.log("called");
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data["stat_status_pairs"].slice(startIndex, endIndex);
	};

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
	};

	console.log("DATA:", data);
	return (
		<TableContainer>
			<Table>
				<colgroup>
					{/* added new column for "question_id" */}
					<col span="1" style={{ width: "10%" }} />
					<col span="1" style={{ width: "60%" }} />
					<col span="1" style={{ width: "15%" }} />
					<col span="1" style={{ width: "15%" }} />
				</colgroup>
				<THead>
					<Tr>
						<Th>ID</Th>
						<Th>Title</Th>
						<Th style={{ color: "pink" }}>Level</Th>
						<Th>Status</Th>
					</Tr>
				</THead>
			</Table>
			<div></div>
			<Scrollable maxHeight="68vh">
				<Table>
					<colgroup>
						<col span="1" style={{ width: "10%" }} />
						<col span="1" style={{ width: "60%" }} />
						<col span="1" style={{ width: "15%" }} />
						<col span="1" style={{ width: "15%" }} />
					</colgroup>
					<TBody>
						{getPaginatedData().map((que, index) => {
							return (
								<Tr key={index}>
									<Td>
										{que["stat"]["frontend_question_id"]}
									</Td>
									<Td>
										<a
											href={`https://leetcode.com/problems/${que["stat"]["question__title_slug"]}`}
											target="_blank"
											rel="noreferrer"
										>
											{que["stat"]["question__title"]}
										</a>
									</Td>
									<Td>
										{que["difficulty"]["level"] == 1
											? "Easy"
											: que["difficulty"]["level"] == 2
											? "Medium"
											: "Hard"}
									</Td>
									<Td>
										{que["status"] === "ac"
											? "AC"
											: que["status"] === "notac"
											? "Not-AC"
											: "Not-Attempted"}
									</Td>
								</Tr>
							);
						})}
					</TBody>
				</Table>
			</Scrollable>
			{/* <div className="pagination"> */}
				{/* previous button */}
				<Pagination style={{padding: "1.2rem 0rem"}}>
					<Prev
						onClick={() => {goToPreviousPage()}}
						disabled={(currentPage === 1 ? true : false)}
						active={(currentPage===1) ? false: true}
					>
						Previous
					</Prev>

					{/* show page numbers */}
					{getPaginationGroup().map((item, index) => (
						<PaginationItem
							key={index}
							onClick={(event) => {changePage(event)}}
							active={(currentPage===item) ? true: false}
							// className={`paginationItem ${currentPage === item ? 'active' : null}`}
						>
						<span>{item}</span>
						</PaginationItem>
					))}

					{/* next button */}
					<Next
						onClick={() => {goToNextPage()}}
						disabled={(currentPage === pages ? true : false)}
						active={(currentPage===pages) ? false: true}
					>
						Next
					</Next>
				</Pagination>
			{/* </div> */}
		</TableContainer>
	);
};

QuestionsTable.propTypes = {
	data: propTypes.shape({
		stat_status_pairs: propTypes.arrayOf(
			propTypes.shape({
				difficulty: propTypes.shape({ level: propTypes.number }),
				stat: propTypes.shape({
					question__title: propTypes.string,
					question__title_slug: propTypes.string,
				}),
				level: propTypes.number,
				status: propTypes.string,
			})
		),
	}),
};

export default QuestionsTable;
