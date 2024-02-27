import React, { useState } from "react";

export const ListModal = ({ catalogStateVal }) => {
    const [listName,setListName] = useState(catalogStateVal)
    const listArr = [{
        name: 'Common', lists: ['3DCommerce compliant',
            'Offered on smartphone, tablet, pc, kiosk',
            'Enhances commerce in-store and online',
            'Customized catalog taxonomy',
            '3D digital-twins of customer products',
            'Scalable catalog',
            'Novel queries']
    },
    {
        name: 'Furniture', lists: ['Digital twins of sofas, tables, chairs, beds, dining sets etc.',
            'Accurate shape and size',
            'Material fidelity',
            'Dynamics (e.g., recliner sofa)',
            'Material Variants (e.g., fabrics of diverse colors, textures )',
            '360-degree spins',
            'Measurements', 'Use furniture from Catalog3D to virtually design any space.', 'View under varying lighting conditions. (Sunlight, night lighting etc.)', 'Collaborative usage for two or more users.']
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
            'Light effects such as shadows, reflection, glow etc.']
    },
    {
        name: 'Paints',
        lists: ['Indoor & outdoor paints',
            'Colors, textures, stencils',
            'Painting services']
    },
    {
        name: 'Flooring',
        lists: ['Indoor & outdoor flooring',
            'Carpet, wood, granite, marble, tiles',
            'Special flooring  for wet-areas like kitchen, bathroom',
            'Diverse lighting conditions (sunlight, night-lighting etc)',
            'Tile layer services']
    },
    {
        name: 'Sanitaryware',
        lists: ['Digital-twins of faucets, sinks, tubs etc.',
            'Shape, size, accuracy',
            'Material fidelity  (e.g. ceramic)',
            'Simulate water',
            'Diverse lighting conditions',
            ' Design & installation services']
    }
    ]
    return (
        <>
            <div className="ListModalParentDiv">
                <ul className="ListModalDiv">
                    {
                        listArr.find(val=>val.name == catalogStateVal)?.lists?.map((val,idx)=>{
                            return (
                                <li key={idx}>{val}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}