import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={props.menu.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.menu.title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}
