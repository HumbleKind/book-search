import React, { Link } from 'react';
import { Card, Button, InputGroup, Row, Col } from 'react-bootstrap';

function Book(props) {
  return (
		<Card>
			<Card.Body>
				<InputGroup style={{ display: 'flex' }}>
					<Card.Title>{ props.title }</Card.Title>
					<Button 
						variant='success' 
						type='button' 
						style={{ marginLeft: 'auto' }} 
						onClick={() => (window.open(props.previewLink, '_blank'))}>
							View
					</Button>
					<Button 
						variant='warning' 
						type='button' 
						style={{ marginLeft: '10px' }}>
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
