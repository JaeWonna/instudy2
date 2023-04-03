import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileGroupCard from '../components/Profile/ProfileGroupCard';

const ProfileGroupView = () => {
    const groups = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ];

    return (
        <div>
            <Container>
      <Row>
      </Row>
      <Row>
        {
             groups.map((content, idx) => 
             <Col sm><ProfileGroupCard groupsName={groups.username}/></Col>
             )
        }
      </Row>
    </Container>
        </div>
    );
};

export default ProfileGroupView;