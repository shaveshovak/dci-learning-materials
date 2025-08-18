import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// props = properties
const CardItem = ({
    title, 
    description,
    btnTitle,
    image
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{btnTitle}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;