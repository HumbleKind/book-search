import React, { useState, useEffect } from 'react';
import { Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Book from '../components/Book/';
import API from '../utils/API';

function Search() {

	const [books, setBooks] = useState([]);
	const [search, setSearch] = useState();

	function handleInputChange(event) {
		// console.log(event.target.value);
		setSearch(event.target.value);
	};
	
	function handleFormSubmit(event) {
		event.preventDefault();
		API.getGoogle(search)
			.then(res => {
				// console.log(search);
				console.log(res.data);
				setBooks(res.data)})
			.catch(err => console.log(err));
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Enter Search Terms</Card.Title>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text>Book:</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control type='text' placeholder='title' onChange={handleInputChange} />
						<InputGroup.Append>
							<Button variant='primary' type='submit' onClick={handleFormSubmit}>
								Search
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Card.Body>
			</Card>
			<br />
			{books.length ? (
				books.map(book => (
					<div>
						<Book
							key={book.id}
							title={book.volumeInfo.title}
							authors={book.volumeInfo.authors}
							description={book.volumeInfo.description}
							thumbnail={book.volumeInfo.imageLinks.thumbnail}
						/>
						<br />
					</div>
				))
			) : (
        <h5 style={{ textAlign: "center" }}>No Results to Display</h5>
			)}
		</>
	);
};

export default Search;
