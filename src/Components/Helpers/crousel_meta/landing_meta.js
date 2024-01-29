import { FaStar } from 'react-icons/fa'
import Quardrant from '../Quardrant.svg'
import Circlelogo from '../Circlelogo.svg'
import { Carousel } from 'react-bootstrap'
export const crousel_meta = [
    (
        <Carousel.Item key={'0'}>
            <div style={{ background: '#000', borderRadius: '20px' }}>
                <h4 style={{ padding: '25px 40px 0 40px' }}>Shrenik Sadalgi</h4>
                <h2 style={{ color: '#FF4B4B', fontSize: '15px', padding: '0 40px' }}>Chair of the 3D Commerce Working Group &</h2>
                <p style={{ padding: '0 40px 15px 40px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'100px' }}>
                    “Building visualization techniques driven by 3D is increasingly a vital element of creating the best possible experience for shoppers, as it provides an invaluable way to explore beautiful imagery with context and authenticity. As we continue to transform the way people shop for ubiquitous in the coming years and that it is their homes, we believe that 3D will be imperative to standardize 3D content so it can be exchanged effectively and experienced consistantly”
                </p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
                    <div>
                        <h2 className='logoName' style={{fontSize:'20px',padding:'5px 40px',marginLeft:'50px',marginRight:'50px'}}>Wayfair</h2>
                        <div className='startsDiv'>
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                        </div>
                    </div>
                </div>
                <img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

            </div>
        </Carousel.Item>
    ),
    (<Carousel.Item key={'1'}>
        <div style={{ background: '#000', borderRadius: '20px', }}>
                <h4 style={{ padding: '25px 40px 0 40px' }}>Daniel Beauchamp </h4>
                <h2 style={{ color: '#FF4B4B', fontSize: '15px', padding: '0 40px' }}>Head of Shoplify Virtual and Augmented Reality</h2>
                <p style={{ padding: '0 40px 15px 40px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'100px'}}>
                “Shopify is deeply committed in making AR experiences readily available to everyday shoppers. We’re exited to propel the accessibility of 3D models for both big and small businesses, to lower the barrier for entrepreneurs to be able to sell using augmented Reality, Virtual Reality and 3D experiences”
                </p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
                    <div>
                        <h2 className='logoName' style={{fontSize:'20px',padding:'5px 40px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
                        <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                        </div>
                    </div>
                </div>
                <img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

            </div>
    </Carousel.Item>),
    (<Carousel.Item key={'2'}>
    <div style={{ background: '#000', borderRadius: '20px', }}>
            <h4 style={{ padding: '25px 40px 0 40px' }}>Martin Enthed</h4>
            <h2 style={{ color: '#FF4B4B', fontSize: '15px', padding: '0 40px' }}>IKEA Communications AB</h2>
            <p style={{ padding: '0 40px 15px 40px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'100px'}}>
            “IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
                <div>
                    <h2 className='logoName' style={{fontSize:'20px',padding:'5px 40px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
                    <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                    </div>
                </div>
            </div>
            <img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

        </div>
</Carousel.Item>),
(<Carousel.Item key={'3'}>
<div style={{ background: '#000', borderRadius: '20px', }}>
        <h4 style={{ padding: '25px 40px 0 40px' }}>David Weinstein</h4>
        <h2 style={{ color: '#FF4B4B', fontSize: '15px', padding: '0 40px' }}>Director of Virtual Reality at Nvidia</h2>
        <p style={{ padding: '0 40px 15px 40px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'100px'}}>
        “Industry cooperation throughout the creation and deployment pipeline for digital product model will help scale the market for 3D capable tools, cloud processing and client platforms- Including AR and VR devices. Nvidia enthusiastically supports the 3D commerce initiative at Khronos and will work to help maximize the project’s benifit’s to the industry ”
        </p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
            <div>
                <h2 className='logoName' style={{fontSize:'20px',padding:'5px 40px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
                <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

    </div>
</Carousel.Item>)
]

export const div_meta_data = [
    (<div style={{ background: '#000', borderRadius: '20px', }}>
    <h4 style={{ padding: '20px 30px 0 30px' }}>Martin Enthed</h4>
    <h2 style={{ color: '#FF4B4B', fontSize: '13px', padding: '0 30px' }}>IKEA Communications AB</h2>
    <p style={{ padding: '0 30px 10px 30px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'80px'}}>
    “IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
    </p>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
        <div>
            <h2 className='logoName' style={{fontSize:'15px',padding:'5px 30px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
            <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
            </div>
        </div>
    </div>
    <img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

</div>),
(<div style={{ background: '#000', borderRadius: '20px', }}>
<h4 style={{ padding: '20px 30px 0 30px' }}>Martin Enthed</h4>
<h2 style={{ color: '#FF4B4B', fontSize: '13px', padding: '0 30px' }}>IKEA Communications AB</h2>
<p style={{ padding: '0 30px 10px 30px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'80px'}}>
“IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
</p>
<div style={{ display: 'flex', flexDirection: 'row' }}>
    <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
    <div>
        <h2 className='logoName' style={{fontSize:'15px',padding:'5px 30px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
        <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
        </div>
    </div>
</div>
<img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

</div>),
(<div style={{ background: '#000', borderRadius: '20px', }}>
<h4 style={{ padding: '20px 30px 0 30px' }}>Martin Enthed</h4>
<h2 style={{ color: '#FF4B4B', fontSize: '13px', padding: '0 30px' }}>IKEA Communications AB</h2>
<p style={{ padding: '0 30px 10px 30px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'80px'}}>
“IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
</p>
<div style={{ display: 'flex', flexDirection: 'row' }}>
    <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
    <div>
        <h2 className='logoName' style={{fontSize:'15px',padding:'5px 30px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
        <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
        </div>
    </div>
</div>
<img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

</div>),
(<div style={{ background: '#000', borderRadius: '20px', }}>
<h4 style={{ padding: '20px 30px 0 30px' }}>Martin Enthed</h4>
<h2 style={{ color: '#FF4B4B', fontSize: '13px', padding: '0 30px' }}>IKEA Communications AB</h2>
<p style={{ padding: '0 30px 10px 30px',margin:'0',fontSize:'13px',fontWeight:300,minHeight:'80px'}}>
“IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
</p>
<div style={{ display: 'flex', flexDirection: 'row' }}>
    <div><img src={Circlelogo} style={{ marginLeft: '30px',width:'100px' }} /></div>
    <div>
        <h2 className='logoName' style={{fontSize:'15px',padding:'5px 30px',marginLeft:'50px',marginRight:'50px'}}>Wayfair2</h2>
        <div className='startsDiv' style={{marginLeft:'60px',marginTop:'2px'}}>
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
            <FaStar color='yellow' />
        </div>
    </div>
</div>
<img style={{ marginTop: '-110px',borderBottomLeftRadius:'20px',width:'150px' }} src={Quardrant} />

</div>),
] 