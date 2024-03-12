import React, { useState } from "react";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";

import CommonNormal from '../CatalogIcon.svg';
import CommonHover from '../CatalogIconH.svg';


import FurnitureNormal from '../FurnitureIcon.svg';
import FurnitureHover from '../FurnitureIconH.svg';


import LightingNormal from '../lightingicon.svg';
import LightingHover from '../lightingiconH.svg';

import PaintsNormal from '../Paintsicon.svg';
import PaintsHover from '../PaintsiconH.svg';

import FlooringNormal from '../FlooringIcon.svg';
import FlooringHover from '../FlooringIconH.svg';


import SanitaryNormal from '../Sanitarywareicon.svg';
import SanitaryHover from '../SanitarywareiconH.svg';

import CatalogFurniture from '../CatalogFurniture.webp';
import Cataloglighting from '../Cataloglighting.webp';
import CatalogCommon from '../CatalogCommon.webp';
import CatalogPaints from '../CatalogPaints.webp';
import CatalogFlooring from '../catalogflorring.webp';
import CatalogSanitaryware from '../catalog_Sanitaryware.webp';

import  CatalogBackground from '../CatalogBackground.webp';

export const ListModal = () => {
    const listArr = [{
        name: 'Common', lists: ['3DCommerce compliant',
            'Offered on smartphone, tablet, pc, kiosk',
            'Enhances commerce in-store and online',
            'Customized catalog taxonomy',
            '3D digital-twins of customer products',
            'Scalable catalog',
            'Novel queries'],
        imgUrl: CatalogCommon
    },
    {
        name: 'Furniture', lists: ['Digital twins of sofas, tables, chairs, beds, dining sets etc.',
            'Accurate shape and size',
            'Material fidelity',
            'Dynamics (e.g., recliner sofa)',
            'Material Variants (e.g., fabrics of diverse colors, textures )',
            '360-degree spins',
            'Measurements', 'Use furniture from Catalog3D to virtually design any space.',],
            //  'View under varying lighting conditions. (Sunlight, night lighting etc.)', 'Collaborative usage for two or more users.'],
        imgUrl: CatalogFurniture
    },
    {
        name: 'Lighting',
        lists: ['Digital twins of light fixtures',
            'Indoor & outdoor light fixtures.',
            'Shape, size accuracy',
            'Material fidelity',
            'Chandeliers, wall lamps, floor lamps, desk lamps, outdoor light-fixtures etc.',
            'Sunlight',
            'Light controls on/off, intensity, color',
            'Light effects such as shadows, reflection, glow etc.'],
        imgUrl: Cataloglighting
    },
    {
        name: 'Paints',
        lists: ['Indoor & outdoor paints',
            'Colors, textures, stencils',
            'Painting services'],
        imgUrl: CatalogPaints
    },
    {
        name: 'Flooring',
        lists: ['Indoor & outdoor flooring',
            'Carpet, wood, granite, marble, tiles',
            'Special flooring  for wet-areas like kitchen, bathroom',
            'Diverse lighting conditions (sunlight, night-lighting etc)',
            'Tile layer services'],
        imgUrl: CatalogFlooring
    },
    {
        name: 'Sanitaryware',
        lists: ['Digital-twins of faucets, sinks, tubs etc.',
            'Shape, size, accuracy',
            'Material fidelity  (e.g. ceramic)',
            'Simulate water',
            'Diverse lighting conditions',
            ' Design & installation services'],
        imgUrl: CatalogSanitaryware
    }
    ]
    const [listName, setListName] = useState(listArr[0])
    const handleClick = (e) => {
        const nameVal = e.currentTarget.name
        let vals = listArr.find(val => val.name == nameVal)
        setListName(vals)
    }
    const divBackground = {
        backgroundImage: `url(${CatalogBackground})`,
      };
    return (
        <>
            <div >
                <div>
                    <h4 className="CatalogHead">Catalog3D</h4>
                    <div className="servicesButtonDiv servicesButtonDivF">
                        <ButtonGroup>
                            <Button onClick={(e) => handleClick(e)} name="Common">
                                <img className="normalIcon" src={CommonNormal} />
                                <img className="hoverIcon" src={CommonHover} />
                                <p>Common</p>
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Furniture">
                                <img className="normalIcon" src={FurnitureNormal} />
                                <img className="hoverIcon" src={FurnitureHover} />
                                <p>Furniture</p>
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Lighting">
                                <img className="normalIcon" src={LightingNormal} />
                                <img className="hoverIcon" src={LightingHover} />
                                <p>Lighting</p>
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Paints">
                                <img className="normalIcon" src={PaintsNormal} />
                                <img className="hoverIcon" src={PaintsHover} />
                                <p>Paints</p>
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Flooring">
                                <img className="normalIcon" src={FlooringNormal} />
                                <img className="hoverIcon" src={FlooringHover} />
                                <p>Flooring</p>
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Sanitaryware">
                                <img className="normalIcon" src={SanitaryNormal} />
                                <img className="hoverIcon" src={SanitaryHover} />
                                <p>Sanitaryware</p>
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Row className="detailsColsRow">
                        <Col style={{order:'last'}} xs={12} md={12} lg={12} className="servicesDetailDiv">
                            <div className="ListModalParentDiv">
                                <h4>{listName?.name}</h4>
                                <ul className="ListModalDiv">
                                    {
                                        listArr.find(val => val.name == listName?.name)?.lists?.map((val, idx) => {
                                            return (
                                                <li key={idx}>{val}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="catalog3DColImgDiv">                          
                                 <div className="catalog3DColImgDivS" >
                                <img src={listName?.imgUrl} alt="catalog3DCol" />
                                </div>

                            </div>
                        </Col>
                        {/* <Col xs={12} md={1} className="hideCol"> </Col> */}
                        {/* <Col style={{order:'first'}} xs={12} md={6} className="catalog3DCol">
                            <div className="catalog3DColImgDiv">
                                <img src={listName?.imgUrl} alt="catalog3DCol" />
                            </div>
                        </Col> */}
                    </Row>
                </div>
            </div>
        </>
    )
}

