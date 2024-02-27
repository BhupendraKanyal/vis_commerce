import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import FurnitureImg from './assets/Furniture20Living20Room.H03 1.webp';
import FileIcon from './assets/IconMedia.svg';
import { FurnitureHeader, SectionOne } from './InitialState';
import { divBackground } from './InitialState';
import './css/Furniture.css';
import './../../../src/App.css';

const Furniture = () => {
  return (
    <>
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

      <Container>
        <Row className="topBottomPad rowPadd">
          <Col>
            {SectionOne.map((el, idx) => {
              if (el.type === 'Heading') {
                return <h2 className="text-center">{el.value}</h2>;
              } else if (el.type === 'image') {
                return (
                  <div className="text-center mt-5 mb-5">
                    <img src={`${FileIcon}`} />
                    <h6 className="mt-3">{el.name}</h6>
                  </div>
                );
              } else if (el.type === 'card') {
                return (
                  <Row>
                    <Col>
                      <Cards
                        numColumns={3}
                        key={`${idx + Date.now()}`}
                        data={el.data}
                      />
                    </Col>
                  </Row>
                );
              }
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Furniture;

const Cards = ({ numColumns, data }) => {
  const renderCards = () => {
    return data.map((item, index) => (
      <Col key={index}>
        <Card className="custom-card">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img
              style={{}}
              height={'50px'}
              width={'50px'}
              src={item.imgSrc}
              className="mb-2"
            />
            <div
              style={{ color: '#949494', overflow: 'hidden', fontSize: '14px' }}
              className="text-center"
            >
              {item.description}
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      {/* Rows */}
      {[...Array(1)].map((_, index) => (
        <Row
          key={index}
          className="justify-content-center"
          style={{ marginBottom: '15px' }}
        >
          <Col md={1} className="hideCol"></Col>
          {renderCards().slice(0, 3)} {/* Render first 3 cards */}
        </Row>
      ))}
      <Row className="justify-content-center">
        <Col md={3} className="hideCol"></Col>
        {renderCards().slice(3)} {/* Render remaining cards */}
        <Col md={2} className="hideCol"></Col>
      </Row>
    </Container>
  );
};
