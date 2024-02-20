import React,{useState} from "react";
import { Button,Row,Col } from "react-bootstrap";
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

const imgArr=[{name:'Chair',src:Chair},{name:'Table',src:Table},{name:'Sofa',src:Sofa},{name:'Lights',src:Lights},{name:'Paints',src:Paints},{name:'Tiles',src:Tiles},{name:'BlackOfficeChair',src:BlackOfficeChair},{name:'BrownOfficeChair',src:BrownOfficeChair},{name:'GreyOfficeChair',src:GreyOfficeChair}]
export const Chairs =()=>{
    const[currentSource,setCurrentSource] = useState(Chair) 
    const handleClick = (e)=>{
        const currSourceName = e.currentTarget.name
        const srcVal = imgArr.find(val=>val.name == currSourceName)?.src
        setCurrentSource(srcVal)
    }
    return(
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
                        <div  className="imgDivsParent">
                            <div className="imgDivsChild">
                                <img src={currentSource} />
                            </div>
                            </div>
                     
                    </div>
    )
}

export const DifferentChairs = ()=>{
    const[currentChairSource,setCurrentChairSource] =useState(BlackOfficeChair)
    const handleChairClick = (e)=>{
        const currSourceName = e.currentTarget.name
        const srcVal = imgArr.find(val=>val.name == currSourceName)?.src
        console.log("setCurrentChairSource",srcVal)
        setCurrentChairSource(srcVal) 
    }
    return(
    <div className='materialsPPDiv'>
                    <div className='materialsPDiv'>
                        <div className='materialsCDiv'>                          
                            <div className='materialsBtDiv'>
                            <h3>Select<br/>Material</h3>
                            <Button name="BlackOfficeChair" onClick={(e)=>handleChairClick(e)} className='blackImg'>Black<br/>Leather</Button>
                            <Button name="BrownOfficeChair" onClick={handleChairClick} className='brownImg'>Brown<br/>Leather</Button>
                            <Button name="GreyOfficeChair"  onClick={handleChairClick} className='greyImg'>Grey<br/>Leather</Button>
                            </div>
                        </div>
                    </div>
                    <div className='chairsImgDivs'>
                      
                            <img src={currentChairSource} />
                        
                    </div>
                    </div>
    )
}

export const NativeDevices=()=>{
    return(
        <>
        <Row >
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
        </Row>
        <div className='row ulSRowMob topBottomPadMore'>
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