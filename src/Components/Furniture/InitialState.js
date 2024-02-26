import backImg from '../Helpers/backImg.webp';
import contactIcon from '../Helpers/contactIcon.svg';
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

export const divBackground = {
  backgroundImage: `url(${backImg})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  background:
    'background: linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)',
};
