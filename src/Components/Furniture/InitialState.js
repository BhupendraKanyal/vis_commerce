import backImg from '../Helpers/backImg.webp';
import contactIcon from '../Helpers/contactIcon.svg';
import pdfIcon from './assets/IconMedia.svg';
import nvidiaIcon from './assets/IconNvidia.svg';
import cadIcon from './assets/IconsGltf.svg';
import substanceIcon from './assets/IconSubstance.svg';
import iconShape from './assets/IconShape.svg';

export const FurnitureHeader = [
  {
    type: 'Heading',
    value: 'Furniture',
  },
  {
    type: 'Content',
    value: 'Transform furniture buying experience with 3DCommerce innovations',
  },

  {
    type: 'Button',
    value: 'Try Now',
    icon: `${contactIcon}`,
    className: 'contactBt',
    style: {
      color: 'black',
      'margin-right': '5rem',
      padding: '0.4rem 1.4rem',
    },
  },
  {
    type: 'Button',
    value: 'Contact Us',
    style: {
      background: 'transparent',
      color: 'white',
      border: '0.5px solid',
      padding: '0.8rem 2.5rem',
    },
  },
];

export const SectionOne = [
  {
    type: 'Heading',
    value: 'Showcase and Sell',
  },
  {
    type: 'image',

    name: '3D Models Development',
  },

  {
    type: 'card',
    data: [
      {
        imgSrc: `${iconShape}`,
        description:
          'Shape, Size reconstructed using Ai from images or CAD files',
      },
      {
        imgSrc: `${nvidiaIcon}`,
        description: 'Nvidia Nerf 3D recognition technology',
      },
      {
        imgSrc: `${pdfIcon}`,
        description:
          'Digital material with high-fidelity developed from images',
      },
      {
        imgSrc: `${substanceIcon}`,
        description: 'Adobe substance sampler',
      },
      {
        imgSrc: `${cadIcon}`,
        description: '3D commerce compliant. (g1TF)',
      },
    ],
  },
  // {
  //   type: 'card',
  //   data: [
  //     {
  //       imgSrc: `${substanceIcon}`,
  //       description: 'Adobe substance sampler',
  //     },
  //     {
  //       imgSrc: `${cadIcon}`,
  //       description: '3D commerce compliant. (g1TF)',
  //     },
  //   ],
  // },
];

export const divBackground = {
  backgroundImage: `url(${backImg})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  background:
    'background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)',
};
