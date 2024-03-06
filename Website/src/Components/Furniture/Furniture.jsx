import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import FurnitureImg from './assets/Furniture20Living20Room.H03 1.webp';
import FileIcon from './assets/IconMedia.svg';
import { FurnitureHeader, SectionOne, SectionTwo } from './InitialState';
import { divBackground } from './InitialState';
import './css/Furniture.css';
import './../../../src/App.css';
import { useCallback, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Furniture = () => {
  const [currentButton, setCurrentButton] = useState({
    id: 1,
    name: 'Corporate office',
    correspondanceImgId: 1,
  });

  const onButtonClickHandler = useCallback(
    (id, name, correspondanceImgId) => {
      setCurrentButton({ id, name, correspondanceImgId });
    },
    [currentButton]
  );

  return (
    <>
      <div style={divBackground}>
        <Container style={{ minHeight: '50vh' }}>
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

      <Container
        style={{
          border: '1px solid white',
          borderRadius: '10px',
          paddingBottom: '50px',
        }}
      >
        {SectionTwo.map((el, idx) => {
          if (el.type === 'Heading') {
            return (
              <div style={{ marginTop: '70px' }}>
                <h3 className="mt-3 text-center">{el.value}</h3>
              </div>
            );
          } else if (el.type === 'Button') {
            return (
              <Row
                className="justify-content-center"
                style={{ marginTop: '40px', marginBottom: '100px' }}
              >
                {el.data.map((el, idx) => {
                  return (
                    <Col key={idx} xs={2} style={{ marginLeft: '20px' }}>
                      <Button
                        style={{ fontSize: '13px' }}
                        onClick={() =>
                          onButtonClickHandler(
                            el.id,
                            el.name,
                            el.correspondanceImgId
                          )
                        }
                        className={
                          currentButton.id === el.id
                            ? 'custom-button-active'
                            : 'custom-button-inactive'
                        }
                      >
                        {el.name}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            );
          } else if (el.type === 'Carousel') {
            return (
              <Container>
                <Carousel
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  // autoPlay={false}
                  infiniteLoop={true}
                  showStatus={false}
                  centerMode={true}
                  centerSlidePercentage={33.4}
                  slidesToShow={3}
                  dynamicHeight={true}
                  transitionTime={'0.3s'}
                  selectedItem={currentButton.correspondanceImgId}
                  // autoPlay={true}
                >
                  {el.data.map((ele, idx) => {
                    return (
                      <div
                        style={{
                          marginLeft: '12px',
                          width: '300px',
                        }}
                        key={ele.id}
                      >
                        <img style={{ borderRadius: '40px' }} src={ele.image} />
                      </div>
                    );
                  })}
                </Carousel>
              </Container>
            );
          }
        })}
      </Container>
    </>
  );
};

export default Furniture;

const Cards = ({ numColumns, data }) => {
  const renderCards = () => {
    return data.map((item, index) => (
      <Col key={index} xs={3}>
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
    <>
      {/* Rows */}
      {[...Array(1)].map((_, index) => (
        <Row
          xs={1}
          md="5"
          key={index}
          className="justify-content-center gap-flex-cl"
          style={{ marginBottom: '15px' }}
        >
          {renderCards().slice(0, 3)}
        </Row>
      ))}
      <Row md="5" className="justify-content-center gap-flex-cl">
        {renderCards().slice(3)}
      </Row>
    </>
  );
};
