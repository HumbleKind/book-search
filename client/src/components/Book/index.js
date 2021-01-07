import React, { Link } from 'react';
import { Card, Button, InputGroup } from 'react-bootstrap';

function Book(props) {
  return (
		<Card>
			<Card.Body>
				<InputGroup style={{ display: 'flex' }}>
					<Card.Title>{ props.title }</Card.Title>
					<Button variant='primary' type='submit' style={{ marginLeft: 'auto' }}>
							View
					</Button>
					<Button variant='primary' type='submit'  style={{ marginLeft: '10px' }}>
							Save
					</Button>
				</InputGroup>
				<Card.Text>By: { props.authors }</Card.Text>
				<InputGroup>
					<InputGroup.Prepend>
						<Card.Img />
					</InputGroup.Prepend>
					<Card.Text>
					{ props.description }
					</Card.Text>
				</InputGroup>
			</Card.Body>
		</Card>
  );
};

export default Book;
