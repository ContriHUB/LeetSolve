import React, { useState,useEffect } from "react";
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
import Pagination from "./Pagination";


const QuestionsTable = ({ data }) => {
	console.log("DATA:", data);
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage, setQuestionsPerPage] = useState(10);
	const [questionsForCurrentPage, setQuestionsForCurrentPage] = useState([])

	useEffect(() => {
		const IndexOfLastQuestion = questionPerPage * currentPage;
		const IndexOfFirstQuestion = IndexOfLastQuestion -questionPerPage;
		const dataForThisPage =data["stat_status_pairs"].slice(IndexOfFirstQuestion,IndexOfLastQuestion);
		setQuestionsForCurrentPage(dataForThisPage);
	}, [currentPage])
	const paginate = ({selected})=>
	{
		const pageNumber = selected;//0 based indexed
		setCurrentPage(selected+1)
	}
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
			<Table>
				<colgroup>
					<col span="1" style={{ width: "10%" }} />
					<col span="1" style={{ width: "60%" }} />
					<col span="1" style={{ width: "15%" }} />
					<col span="1" style={{ width: "15%" }} />
				</colgroup>
				<TBody>
					{questionsForCurrentPage.map((que, index) => {
						return (
							<Tr key={index}>
								<Td>{
									que["stat"]["frontend_question_id"]
								}</Td>
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
			
			<Pagination pageCount={data["stat_status_pairs"].length/questionPerPage} paginate={paginate}/>
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
