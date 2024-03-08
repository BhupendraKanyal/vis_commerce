import sofaAnimation from './assets/SofaAnimation.png';
import sofaVideo from './assets/SofaAnimation.png';
import lightBulb from './assets/lightBulb.svg';
import sixseatseightslides from './assets/sixseatseightslides.png';
import sixseatsthreeslides from './assets/sixseatseightslides.png';
import sixseatsfiveslides from './assets/sixseatseightslides.png';
import { useCallback, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
export const sectionFirst = {
    heading: 'What is a Digital Twin ?',
    imageF: sofaAnimation,
    imageS: lightBulb,
    imageT: sofaVideo
}
export const crouselData = [
    // {
    //   type: 'Heading',
    //   value: 'Design Your Space Your Way',
    // },
    {
        type: 'Button',
        data: [
            { id: 1, name: 'Furniture', correspondanceImgId: 1, },
            { id: 2, name: 'Lighting', correspondanceImgId: 4 },
            { id: 3, name: 'Paints', correspondanceImgId: 7 },
            { id: 4, name: 'Flooring', correspondanceImgId: 10 },
            { id: 5, name: 'Sanitaryware', correspondanceImgId: 13 },
        ],
    },
    {
        type: 'Carousel',
        data: [
            { id: 1, image: `${sixseatseightslides}`, },
            { id: 2, image: `${sixseatsthreeslides}` },
            { id: 3, image: `${sixseatsfiveslides}` },
            { id: 4, image: `${sixseatseightslides}` },
            { id: 5, image: `${sixseatsthreeslides}` },
            { id: 6, image: `${sixseatsfiveslides}` },
            { id: 7, image: `${sixseatseightslides}`, },
            { id: 8, image: `${sixseatsthreeslides}` },
            { id: 9, image: `${sixseatsfiveslides}` },
            { id: 10, image: `${sixseatseightslides}` },
            { id: 11, image: `${sixseatsthreeslides}` },
            { id: 12, image: `${sixseatsfiveslides}` },
            { id: 13, image: `${sixseatseightslides}`, },
            { id: 14, image: `${sixseatsthreeslides}` },
            { id: 15, image: `${sixseatsfiveslides}` },
        ],
    },
];

export const CarouselComponent = ({ heading, imags }) => {
    const [currentButton, setCurrentButton] = useState({
        id: 1,
        name: 'Furniture',
        correspondanceImgId: 1,
    });
    const onButtonClickHandler = useCallback(
        (id, name, correspondanceImgId) => {
            setCurrentButton({ id, name, correspondanceImgId });
        },
        [currentButton]
    );
    return (
        crouselData.map((val, idx) => {
            if (val.type == 'Button') {
                return (
                    <>
                        <div key={idx} className='carouselbuttons'>
                                <Row>
                                <Col md={1} xs={12} lg={1} className='hideCol'></Col>
                                <Col md={10} xs={12} lg={10} className='carouselbuttons'>
                                    <div className='button-container'>
                            {
                                val.data.map((val, idx) => {
                                    return (
                                        <Button className={
                                            currentButton.id === val.id
                                                ? 'custom-button-active'
                                                : 'custom-button-inactive'
                                        } name={val?.name} key={idx} onClick={() =>
                                            onButtonClickHandler(
                                                val.id,
                                                val.name,
                                                val.correspondanceImgId
                                            )
                                        }>{val?.name}</Button>
                                    )
                                })
                            }
                            </div>
                            </Col>
                            <Col md={1} xs={12} lg={1} className='hideCol'></Col>
                             </Row>
                            </div>
                           
                    </>
                )
            }
            if (val.type == 'Carousel') {
                return (
                    <Carousel
                        showThumbs={false}
                        showArrows={false}
                        showIndicators={false}
                        infiniteLoop={true}
                        showStatus={false}
                        centerMode={true}
                        centerSlidePercentage={33.4}
                        slidesToShow={3}
                        dynamicHeight={true}
                        transitionTime={'0.3s'}
                        selectedItem={currentButton.correspondanceImgId}
                    >
                        {val.data.map((ele, idx) => {
                            return (
                                <div
                                    key={ele.id}
                                >
                                    <img src={ele.image} />
                                </div>
                            );
                        })}
                    </Carousel>
                )
            }
        })
    )
}
