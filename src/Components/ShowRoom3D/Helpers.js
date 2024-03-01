import React, { useState } from "react";
import { Button, Row, Col, Accordion, Card } from "react-bootstrap";
import Chair from './assets/Chair.webp';
import Table from './assets/Table.webp';
import Sofa from './assets/Sofa.webp';
import Lights from './assets/Lights.webp';
import Paints from './assets/Paints.webp';
import Tiles from './assets/Tiles.webp';
import BlackOfficeChair from './assets/BlackOfficeChair.png';
import BrownOfficeChair from './assets/BrownOfficeChair.webp';
import GreyOfficeChair from './assets/GreyOfficeChair.webp';
import smartPhone from '../Pricing/assets/smartPhone.svg';
import tablet from '../Pricing/assets/tablet.svg';
import desktop from '../Pricing/assets/desktop.svg';


import Cflooring from './assets/Cflooring.webp';
import Clighting from './assets/Clighting.webp';
import Cpaints from './assets/Cpaints.webp';
import Csanitary from './assets/Csanitary.webp';
import Cfurniture from './assets/Cfurniture.webp';

import Complience1 from './assets/3Dcomplience1.webp';
import Complience2 from './assets/3Dcomplience2.webp';
import Instore from './assets/Instore.webp';
import Online from './assets/Native.webp';
import Native1 from './assets/Native1.webp';
import Native2 from './assets/Native2.webp';
import PhoneTablet from './assets/PhoneTabletPc.webp';

const imgArr = [{ name: 'Chair', src: Chair }, { name: 'Table', src: Table }, { name: 'Sofa', src: Sofa }, { name: 'Lights', src: Lights }, { name: 'Paints', src: Paints }, { name: 'Tiles', src: Tiles }, { name: 'BlackOfficeChair', src: BlackOfficeChair }, { name: 'BrownOfficeChair', src: BrownOfficeChair }, { name: 'GreyOfficeChair', src: GreyOfficeChair }]
export const Chairs = () => {
    const [currentSource, setCurrentSource] = useState(Chair)
    const handleClick = (e) => {
        const currSourceName = e.currentTarget.name
        const srcVal = imgArr.find(val => val.name == currSourceName)?.src
        setCurrentSource(srcVal)
    }
    return (
        <div className='showRoomFPDiv'>
            <div className="showRoomBtDivP">
                <div className='showRoomBtDiv'>
                    <Button name="Chair" onClick={handleClick}>Chair</Button>
                    <Button name="Table" onClick={handleClick}>Table</Button>
                    <Button name="Sofa" onClick={handleClick}>Sofa</Button>
                    <Button name="Lights" onClick={handleClick}>Lighting</Button>
                    <Button name="Paints" onClick={handleClick}>Paints</Button>
                    <Button name="Tiles" onClick={handleClick}>Flooring</Button>
                </div>
            </div>
            <div className="imgDivsParent">
                <div className="imgDivsChild">
                    <img src={currentSource} />
                </div>
            </div>

        </div>
    )
}

export const DifferentChairs = () => {
    const [currentChairSource, setCurrentChairSource] = useState(BlackOfficeChair)
    const handleChairClick = (e) => {
        const currSourceName = e.currentTarget.name
        const srcVal = imgArr.find(val => val.name == currSourceName)?.src
        console.log("setCurrentChairSource", srcVal)
        setCurrentChairSource(srcVal)
    }
    return (
        <div className='materialsPPDiv'>
            <div className='materialsPDiv'>
                <div className='materialsCDiv'>
                    <div className='materialsBtDiv'>
                        <h3>Select<br />Material</h3>
                        <Button name="BlackOfficeChair" onClick={(e) => handleChairClick(e)} className='blackImg'>Black<br />Leather</Button>
                        <Button name="BrownOfficeChair" onClick={handleChairClick} className='brownImg'>Brown<br />Leather</Button>
                        <Button name="GreyOfficeChair" onClick={handleChairClick} className='greyImg'>Grey<br />Leather</Button>
                    </div>
                </div>
            </div>
            <div className='chairsImgDivs'>

                <img src={currentChairSource} />

            </div>
        </div>
    )
}

export const NativeDevices = () => {
    return (
        <>

            <div>
                <div className='ulSRow ulSRowDesk topBottomPadMore'>
                    <Col className='ulSCol d-flex justify-content-center align-items-center' xs={12} md={4}>
                        <div className='ulSDivP'>
                            <div className='ulSDiv'>
                                <img src={smartPhone} alt="Smartphone" />
                                <p>Smartphone</p>
                            </div>
                            <ul className=" ulList">
                                <li>Android, IOS</li>
                                <li>IPhone, Google Pixel Samsung Galaxy...</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='ulSCol d-flex justify-content-center align-items-center' xs={12} md={4}>
                        <div className='ulSDivP'>
                            <div className='ulSDiv'>
                                <img src={tablet} alt="Tablet" />
                                <p>Tablet</p>
                            </div>
                            <ul className="ulList">
                                <li>IPad, Samsung Galaxy, Microsoft surface</li>
                                <li>IOS, Android, Windows</li>
                                <li>Various screen sizes</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='ulSCol d-flex justify-content-center align-items-center' xs={12} md={4}>
                        <div className='ulSDivP'>
                            <div className='ulSDiv'>
                                <img src={desktop} alt="Desktop" />
                                <p>Desktop</p>
                            </div>
                            <ul className=" ulList">
                                <li>Windows, IMac, Linux</li>
                            </ul>
                        </div>
                    </Col>
                </div>
            </div>

            <div className=' ulSRowMob topBottomPadMore'>
                <div className='ulSRow'>
                    <h4 className="headings">MySpace<span>3D</span></h4>
                    <div className='ulSCol d-flex col-sm-12 col-md-4'>
                        <div className='ulSDivP'>
                            <div className='ulSDiv'>
                                <img src={smartPhone} alt="Smartphone" />
                                <p>Smartphone</p>
                            </div>
                            <ul className=" ulList">
                                <li>Android, IOS</li>
                                <li>IPhone, Google Pixel Samsung Galaxy...</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ulSCol d-flex col-sm-12 col-md-4' xs={12} md={4}>
                        <div className='ulSDivP'>
                            <div className='ulSDiv'>
                                <img src={tablet} alt="Tablet" />
                                <p>Tablet</p>
                            </div>
                            <ul className="ulList">
                                <li>IPad, Samsung Galaxy, Microsoft surface</li>
                                <li>IOS, Android, Windows</li>
                                <li>Various screen sizes</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ulSCol d-flex col-sm-12 col-md-4' xs={12} md={4}>
                        <div className='ulSDivP'>
                            <div className='ulSDiv ulSDivImgs'>
                                <img src={desktop} alt="Desktop" />
                                <p>Desktop</p>
                            </div>
                            <ul className=" ulList">
                                <li>Windows, IMac, Linux</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const UrlSections = () => {
    const arrData = [{ name: 'Furniture', imgurl: Cfurniture }, { name: 'Lighting', imgurl: Clighting }, { name: 'Flooring', imgurl: Cflooring }, { name: 'Paints', imgurl: Cpaints }, { name: 'Sanitaryware', imgurl: Csanitary }]
    return (
        <>
            <div className='urlSectionsDiv'>
                {arrData.map((val, idx) => {
                    return (
                        <div key={idx} className="urlSections">
                            <div className="urlSectionsImg">
                                <img src={val?.imgurl} />
                            </div>
                            <div className="urlSectionsHeading">
                                <h4>{val?.name}</h4>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}



export const NativeSections = () => {
    const arrData = [{
        name: 'Instore/Online', imgurl: {
            url1: Instore,
            url2: Online
        }, multiImg: true
    }, {
        name: 'Web/Native', imgurl: {
            url1: Native1,
            url2: Native2
        }, multiImg: true
    },
    { name: 'Phone, tablet & PC\'S', imgurl: PhoneTablet },
    { name: 'Technology', imgurl: PhoneTablet },
    {
        name: '3DCommerce compliance', imgurl: {
            url1: Complience1,
            url2: Complience2
        }, multiImg: true
    }]
    const [currVal, setCurrVal] = useState(arrData[0])
    const handlePClick = (e) => {

        const curr = e.target.name
        setCurrVal(arrData.find(val => val.name == curr))
    }
    return (
        <>
            <div className='nativeSectionsDiv container'>

                <div className="nativeSectionsHeads">
                    {
                        arrData.map((val, idx) => {
                            return (
                                <Button style={{ background: 'none', border: 'none' }} name={val?.name} key={idx} onClick={handlePClick}>{val?.name}</Button>
                            )
                        })
                    }
                </div>
                <div className="nativeSections">
                    <div className="nativeSectionsRow row">
                        {currVal?.multiImg && <>
                            <div className="col-md-6">
                                <img src={currVal?.imgurl?.url1} />
                            </div>
                            <div className="col-md-6">
                                <img src={currVal?.imgurl?.url2} />
                            </div>
                        </>
                        }
                        {!currVal?.multiImg && <img src={currVal?.imgurl} />}
                    </div>
                </div>

            </div>
        </>
    )
}


const MyAccordion = () => {
    const panelData = [
        {
            name: 'Quality', ulLists: [
                { name: 'BrowserStack', list: ['Test mobile apps and web-apps on live devices.'] },
                {
                    name: 'Regression test automation', list: ['Kaizen3D',
                        'Puppeteer for browser automation and pixel-match for image-comparison',
                        'Leads to higher quality and lower cost']
                },
                { name: 'Unity test framework for native Unity based apps' }]
            , ismulti: true
        },
        { name: 'Performance', ulLists: ['Responsiveness of web-apps compliant to industry standards', '3D Rendering pipeline optimized to ensure web-apps are performant'], ismulti: false },
        {
            name: 'UX/Ui',
            ulLists: ['Spinner for long running operations', 'Status exposed via color-coded messages.', 'Integration of UI / UX to customer requirements'],
            ismulti: false
        }
    ]
    return (
        <>
            <Accordion className="acc" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accHeader"><h4>Quality, Performance and UX/Ui</h4></Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {panelData.map((val, idx) => (
                                <Col className="accordionCols" key={idx} xs={12} md={4}>
                                    <div className="accordionP">
                                        <h4>{val?.name}</h4>
                                        {val?.ismulti ? (
                                            val?.ulLists.map((item, itemIdx) => (
                                                <div key={itemIdx} className="accordionList">
                                                    <h3>{item?.name}</h3>
                                                    {item?.list &&
                                                        <ul className="accordionUnorderedList">
                                                            {item?.list.map((val, id) => {
                                                                return (
                                                                    <li key={id}>{val}</li>
                                                                )
                                                            })
                                                            }
                                                        </ul>
                                                    }
                                                </div>
                                            ))
                                        ) : (
                                            <ul className="accordionUnorderedList">
                                            {val.ulLists.map((val,id)=>{
                                                return(
                                                    <li key={id}>{val}</li>
                                                )
                                            })}
                                            </ul>
                                           
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
export default MyAccordion;