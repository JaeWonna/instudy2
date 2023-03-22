import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        // <Link to={props.menu.link}>
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Body>
        //             <Card.Title>{props.menu.title}</Card.Title>
        //         </Card.Body>
        //     </Card>
        // </Link>

    // <Link to={props.menu.link}>
    //     <Card className="bg-dark text-white">
    //         <Card.Img src="holder.js/100px270" alt="Card image" />
    //         <Card.ImgOverlay>
    //             <Card.Title>{props.menu.title}</Card.Title>
    //         </Card.ImgOverlay>
    //     </Card>
    // </Link>
        <>
            {[
                'Primary',
            ].map((variant) => (
                <Link to={props.menu.link}>
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>{props.menu.title} </Card.Title>
                        <Card.Text>카드 height를 늘어나게 하고 싶다</Card.Text>
                    </Card.Body>
                </Card>
                </Link>

            ))}
        </>
    );
}
