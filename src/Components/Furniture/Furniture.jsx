import { Col, Container, Row, Button } from 'react-bootstrap';
import FurnitureImg from './assets/Furniture20Living20Room.H03 1.webp';
import { FurnitureHeader } from './InitialState';
import { divBackground } from './InitialState';
import './css/Furniture.css';

const Furniture = () => {
  return (
    <div style={divBackground}>
      <Container>
        <Row className="FurnitureHead">
          <Col className="align-self-center furniture" md={6}>
            {FurnitureHeader &&
              Array.isArray(FurnitureHeader) &&
              FurnitureHeader.map((el) => {
                if (el.type === 'Heading') {
                  return <h1 style={{ fontSize: '1.5rem' }}>{el.value}</h1>;
                } else if (el.type === 'Button') {
                  return (
                    <Button
                      className={el.className || 'contactBt'}
                      style={{ ...el.style }}
                    >
                      {el.value}
                      {el?.icon && <img src={el?.icon} alt="Play Icon" />}
                    </Button>
                  );
                } else {
                  return (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <p style={{ fontSize: '1.4rem' }}>{el.value}</p>
                    </div>
                  );
                }
              })}
          </Col>

          <Col md={6}>
            <div>
              <img src={`${FurnitureImg}`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Furniture;
