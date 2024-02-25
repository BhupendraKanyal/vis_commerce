import smartPhone from './assets/smartPhone.svg';
import tablet from './assets/tablet.svg';
import desktop from './assets/desktop.svg';
import {Row, Col } from "react-bootstrap";
export const Helpers = ()=>{
    return(
        <>
        <Row className='ulSRow ulSRowDesk'>
               
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

</Row>

<div className='row ulSRowMob'>
<div className='ulSRow'>
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
