import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, InputGroup, Button } from 'react-bootstrap';

import API from '../utils/API';
import Book from '../components/Book/';

function Search() {

	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({});
	
	function searchBooks() {
		API.findAll()
			.then(res => setBooks(res.data))
			.catch(err => console.log(err));
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Search</Card.Title>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text>Book:</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control type="text" placeholder="title" />
						<InputGroup.Append>
							<Button variant="primary" type="submit">
								Search
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Card.Body>
			</Card>
			<br />
			<Book />
		</>
	);
};

export default Search;
