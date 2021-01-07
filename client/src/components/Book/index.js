import React from 'react';
import { Card, Button, InputGroup, Row, Col } from 'react-bootstrap';

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
				<Row>
					<Col sm={2}>
						<Card.Img src={ props.thumbnail } />
					</Col>
					<Col>
						<Card.Text>
						{ props.description }
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
  );
};

export default Book;
