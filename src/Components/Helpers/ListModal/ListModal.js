import React, { useState } from "react";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";

import CommonNormal from '../CommonNormal.svg';
import CommonHover from '../Commonhover.svg';


import FurnitureNormal from '../FurnitureNormal.svg';
import FurnitureHover from '../Furniturehover.svg';


import LightingNormal from '../LightingNormal.svg';
import LightingHover from '../Lightinghover.svg';

import PaintsNormal from '../PaintsNormal.svg';
import PaintsHover from '../Paintshover.svg';

import FlooringNormal from '../FlooringNormal.svg';
import FlooringHover from '../Flooringhover.svg';


import SanitaryNormal from '../sanitarynormal.svg';
import SanitaryHover from '../sanitaryhover.svg';

import CatalogFurniture from '../CatalogFurniture.webp';
import Cataloglighting from '../Cataloglighting.webp';
import CatalogCommon from '../CatalogCommon.webp';
import CatalogPaints from '../CatalogPaints.webp';
import CatalogFlooring from '../CatalogFlooring.webp';
import CatalogSanitaryware from '../CatalogSanitaryware.webp';

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
            'Measurements', 'Use furniture from Catalog3D to virtually design any space.', 'View under varying lighting conditions. (Sunlight, night lighting etc.)', 'Collaborative usage for two or more users.'],
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
                        {/* <ButtonGroup> */}
                            <Button onClick={(e) => handleClick(e)} name="Common">
                                <img className="normalIcon" src={CommonNormal} />
                                <img className="hoverIcon" src={CommonHover} />
                                Common
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Furniture">
                                <img className="normalIcon" src={FurnitureNormal} />
                                <img className="hoverIcon" src={FurnitureHover} />
                                Furniture
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Lighting">
                                <img className="normalIcon" src={LightingNormal} />
                                <img className="hoverIcon" src={LightingHover} />
                                Lighting
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Paints">
                                <img className="normalIcon" src={PaintsNormal} />
                                <img className="hoverIcon" src={PaintsHover} />
                                Paints
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Flooring">
                                <img className="normalIcon" src={FlooringNormal} />
                                <img className="hoverIcon" src={FlooringHover} />
                                Flooring
                            </Button>
                            <Button onClick={(e) => handleClick(e)} name="Sanitaryware">
                                <img className="normalIcon" src={SanitaryNormal} />
                                <img className="hoverIcon" src={SanitaryHover} />
                                Sanitaryware
                            </Button>
                        {/* </ButtonGroup> */}
                    </div>
                    <Row>
                        <Col xs={12} md={5} className="servicesDetailDiv">
                            <div className="ListModalParentDiv">
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
                        </Col>
                        {/* <Col xs={12} md={1} className="hideCol"> </Col> */}
                        <Col xs={12} md={7} className="catalog3DCol">
                            <div className="catalog3DColImgDiv">
                                {console.log("DataVals", listName)}
                                <img src={listName?.imgUrl} alt="catalog3DCol" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

