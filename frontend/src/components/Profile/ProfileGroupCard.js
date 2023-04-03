import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfileGroupCard = (props) => {
    console.log(props)
    return (
        <>
        <Container>
            <div class="card">
            <div class="card-body">
                {props.groupsName}
                프로필 그룹 카드 컴포넌트
                </div>
            </div>
            </Container>
        </>
    );
};

export default ProfileGroupCard;