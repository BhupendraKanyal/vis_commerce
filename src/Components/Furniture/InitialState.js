import backImg from '../Helpers/backImg.webp';
import contactIcon from '../Helpers/contactIcon.svg';
import pdfIcon from './assets/IconMedia.svg';
import nvidiaIcon from './assets/IconNvidia.svg';
import cadIcon from './assets/IconsGltf.svg';
import substanceIcon from './assets/IconSubstance.svg';
import iconShape from './assets/IconShape.svg';
import office1 from './assets/Offfice1.webp';
import office2 from './assets/Office2.webp';
import office3 from './assets/Office3.webp';
import homeOffice1 from './assets/Homeoffice1.webp';
import homeOffice2 from './assets/Homeoffice2.webp';
import homeOffice3 from './assets/Homeoffice3.webp';
import livingRoom1 from './assets/Livingroom1.webp';
import livingRoom2 from './assets/Livingroom2.webp';
import livingRoom3 from './assets/Livingroom3.webp';
import bedRoom1 from './assets/Bedroom1.webp';
import bedRoom2 from './assets/Bedroom2.webp';
import bedRoom3 from './assets/Bedroom3.webp';
import diningRoom1 from './assets/Diningroom1.webp';
import diningRoom2 from './assets/Diningroom2.webp';
import diningRoom3 from './assets/Diningroom3.webp';

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

export const SectionTwo = [
  {
    type: 'Heading',
    value: 'Design Your Space Your Way',
  },

  {
    type: 'Button',
    data: [
      {
        id: 1,
        name: 'Corporate office',
        correspondanceImgId: 1,
      },
      { id: 2, name: 'Home office room', correspondanceImgId: 4 },
      { id: 3, name: 'Living room', correspondanceImgId: 7 },
      { id: 4, name: 'Bed room', correspondanceImgId: 10 },
      { id: 5, name: 'Dining room', correspondanceImgId: 13 },
    ],
  },

  {
    type: 'Carousel',
    data: [
      {
        id: 1,
        image: `${office1}`,
      },
      { id: 2, image: `${office2}` },
      { id: 3, image: `${office3}` },
      { id: 4, image: `${homeOffice1}` },
      { id: 5, image: `${homeOffice2}` },
      { id: 6, image: `${homeOffice3}` },
      { id: 7, image: `${livingRoom1}` },
      { id: 8, image: `${livingRoom2}` },
      { id: 9, image: `${livingRoom3}` },
      { id: 10, image: `${bedRoom1}` },
      { id: 11, image: `${bedRoom2}` },
      { id: 12, image: `${bedRoom3}` },
      { id: 13, image: `${diningRoom1}` },
      { id: 14, image: `${diningRoom2}` },
      { id: 15, image: `${diningRoom3}` },
    ],
  },
];

export const divBackground = {
  backgroundImage: `url(${backImg})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  background:
    'background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)',
};
