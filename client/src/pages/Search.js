import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, InputGroup, Button } from 'react-bootstrap';

import API from '../utils/API';

function Search() {
	return (
		<Card>
			<Card.Body>
				<Card.Title>Search</Card.Title>
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text>Book:</InputGroup.Text>
					</InputGroup.Prepend>
					<Form.Control type="text" placeholder="name" />
					<InputGroup.Append>
						<Button variant="primary" type="submit">
							Search
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Card.Body>
		</Card>
	);
};

export default Search;
