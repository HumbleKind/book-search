import React, { Link } from 'react';
import { Card, Button, InputGroup } from 'react-bootstrap';

function Book() {
  return (
		<Card>
			<Card.Body>
				<InputGroup style={{ display: 'flex' }}>
					<Card.Title>The Hunger Games</Card.Title>
					<Button variant='primary' type='submit' style={{ marginLeft: 'auto' }}>
							View
					</Button>
					<Button variant='primary' type='submit'  style={{ marginLeft: '10px' }}>
							Save
					</Button>
				</InputGroup>
				<Card.Text>By: Suzanne Collins</Card.Text>
				<InputGroup>
					<InputGroup.Prepend>
						<Card.Img className="img-thumbnail" src='http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' />
					</InputGroup.Prepend>
					<Card.Text>
						Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.
					</Card.Text>
				</InputGroup>
			</Card.Body>
		</Card>
  );
};

export default Book;
