import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import FurnitureImg from './assets/Furniture20Living20Room.H03 1.webp';
import FileIcon from './assets/IconMedia.svg';
import {
  FurnitureHeader,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from './InitialState';
import { divBackground } from './InitialState';
import './css/Furniture.css';
import './../../../src/App.css';
import { useCallback, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Furniture = () => {
  const [currentButton, setCurrentButton] = useState({
    id: 1,
    name: 'Corporate office',
    correspondanceImgId: 1,
  });

  const [currentSofa, setCurrentSofa] = useState('');

  const onButtonClickHandler = useCallback(
    (id, name, correspondanceImgId) => {
      setCurrentButton({ id, name, correspondanceImgId });
    },
    [currentButton]
  );

  const onSofaChangeHandler = useCallback((val) => {
    setCurrentSofa(val);
  }, []);

  useEffect(() => {
    // Set Initial Sofa:

    if (SectionFour.length > 0 && SectionFour[2].type === 'image') {
      setCurrentSofa(SectionFour[2].data[0].imgSrc);
    }
  }, [SectionFour]);

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

      <Container>
        <Row style={{ marginTop: '70px' }} className="topBottomPad rowPadd ">
          {SectionThree.map((el, idx) => {
            if (el.type === 'Heading') {
              return <h2 className="text-center">{el.value}</h2>;
            } else if (el.type === 'image') {
              return (
                <div className="text-center  mb-4">
                  <img style={{ width: '70%' }} src={`${el.value}`} />

                  <div
                    className="text-center"
                    style={{
                      display: 'flex',
                      gap: '17px',
                      justifyContent: 'center',
                      marginTop: '20px',
                    }}
                  >
                    {el.data.map((el, index) => {
                      return (
                        <div
                          style={{
                            border: '1px solid white',
                            padding: '5px 13px',
                            backgroundColor: '#18181B',
                            borderRadius: '5px',
                            width: '125px',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2px',
                            alignItems: 'center',
                          }}
                        >
                          <img src={el.icon} />
                          {el.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </Row>

        <Row style={{ marginTop: '70px' }} className="topBottomPad rowPadd">
          {SectionFour.map((el, idx) => {
            if (el.type === 'Heading') {
              return <h2 className="text-center">{el.value}</h2>;
            } else if (el.type === 'subheading') {
              return (
                <h6
                  className="text-center mt-2 mb-5"
                  style={{ color: '#FF595D' }}
                >
                  {el.value}
                </h6>
              );
            } else if (el.type === 'image') {
              return (
                <div
                  style={{
                    width: '800px',
                    border: '0.5px solid white',
                    margin: '0 auto',
                    borderRadius: '11.15px',
                    height: '400px',
                    display: 'flex',
                    // justifyContent: 'center',
                    flexDirection: 'column',
                    background: '#383537',
                  }}
                >
                  <img
                    style={{ width: '75%', alignSelf: 'center' }}
                    src={currentSofa}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'center',
                      gap: '20px',
                    }}
                  >
                    {el.data.map((ele, idx) => {
                      return (
                        <Button
                          onClick={() => onSofaChangeHandler(ele.imgSrc)}
                          style={{
                            background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), ${ele.color}`,
                            height: '74.78px',
                            width: '89.41px',
                            borderRadius: '11px',

                            border:
                              ele.imgSrc === currentSofa
                                ? '5px solid white'
                                : 'none',
                          }}
                        ></Button>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </Row>
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
