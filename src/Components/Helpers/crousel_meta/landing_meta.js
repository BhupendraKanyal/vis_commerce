import { FaStar } from 'react-icons/fa'
import Quardrant from '../Quardrant.svg'
import Circlelogo from '../Circlelogo.svg'
import forty from '../forty.svg';
import twohundred from '../twohundred.svg';
import macys from '../macys.svg';
import shopify from '../shopify.svg';
import lovesac from '../lovesac.svg';
import wayfair from '../Circlelogo.svg'
import ikea from '../ikea.svg'
import nvidia from '../nvidia.svg';
import { Carousel } from 'react-bootstrap'
export const crousel_meta = [
    (
        <Carousel.Item key={'0'}>
            <div className='crouselItemf' >
                <h4 >Shrenik Sadalgi</h4>
                <h2 >Chair of the 3D Commerce Working Group &</h2>
                <p >
                    “Building visualization techniques driven by 3D is increasingly a vital element of creating the best possible experience for shoppers, as it provides an invaluable way to explore beautiful imagery with context and authenticity. As we continue to transform the way people shop for ubiquitous in the coming years and that it is their homes, we believe that 3D will be imperative to standardize 3D content so it can be exchanged effectively and experienced consistantly”
                </p>
                <div className='crouselItemDivS'>
                    <div><img className='crouselItemFimg' src={wayfair} /></div>
                    <div>
                        <h3 className='logoName' >Wayfair</h3>
                        <div className='startsDiv'>
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                            <FaStar color='yellow' />
                        </div>
                    </div>
                </div>
                <img className='crouselItemSimg' src={Quardrant} />

            </div>
        </Carousel.Item>
    ),
    (<Carousel.Item key={'1'}>
        <div className='crouselItemf' >
            <h4 >Daniel Beauchamp </h4>
            <h2 >Head of Shoplify Virtual and Augmented Reality</h2>
            <p >
                “Shopify is deeply committed in making AR experiences readily available to everyday shoppers. We’re exited to propel the accessibility of 3D models for both big and small businesses, to lower the barrier for entrepreneurs to be able to sell using augmented Reality, Virtual Reality and 3D experiences”
            </p>
            <div className='crouselItemDivS'>
                <div><img className='crouselItemFimg' src={shopify} /></div>
                <div>
                    <h3 className='logoName' >Shopify</h3>
                    <div className='startsDiv'>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                    </div>
                </div>
            </div>
            <img className='crouselItemSimg' src={Quardrant} />

        </div>
    </Carousel.Item>),
    (<Carousel.Item key={'2'}>
        <div className='crouselItemf' >
            <h4 >Martin Enthed</h4>
            <h2 >IKEA Communications AB</h2>
            <p >
                “IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
            </p>
            <div className='crouselItemDivS'>
                <div><img className='crouselItemFimg' src={ikea} /></div>
                <div>
                    <h3 className='logoName' >IKEA</h3>
                    <div className='startsDiv'>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                    </div>
                </div>
            </div>
            <img className='crouselItemSimg' src={Quardrant} />

        </div>
    </Carousel.Item>),
    (<Carousel.Item key={'3'}>
        <div className='crouselItemf' >
            <h4 >David Weinstein</h4>
            <h2 >Director of Virtual Reality at Nvidia</h2>
            <p >
                “Industry cooperation throughout the creation and deployment pipeline for digital product model will help scale the market for 3D capable tools, cloud processing and client platforms- Including AR and VR devices. Nvidia enthusiastically supports the 3D commerce initiative at Khronos and will work to help maximize the project’s benifit’s to the industry ”
            </p>
            <div className='crouselItemDivS'>
                <div><img className='crouselItemFimg' src={nvidia} /></div>
                <div>
                    <h3 className='logoName' >Nvidia</h3>
                    <div className='startsDiv'>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                    </div>
                </div>
            </div>
            <img className='crouselItemSimg' src={Quardrant} />

        </div>
    </Carousel.Item>),
    (<Carousel.Item key={'4'}>
    <div className='crouselItemf' >
       
       <div><img className='textImg' src={twohundred} /></div>
        <p className='textImgSpan'>
        <span >Increase in average order value</span>
        </p>
        <div className='crouselItemDivS'>
            <div><img className='crouselItemFimg' src={macys} /></div>
            <div>
                <h3 className='logoName' >Macys</h3>
                <div className='startsDiv'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img className='crouselItemSimg' src={Quardrant} />
    
    </div>
    </Carousel.Item>),
(<Carousel.Item key={'5'}>
 <div className='crouselItemf' >
       
       <div><img className='textImg' src={forty} /></div>
        <p className='textImgSpan'>
        <span >Reduced product returns</span>
        </p>
        <div className='crouselItemDivS'>
            <div><img className='crouselItemFimg' src={shopify} /></div>
            <div>
                <h3 className='logoName' >Shopify</h3>
                <div className='startsDiv'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img className='crouselItemSimg' src={Quardrant} />
    
    </div>
</Carousel.Item>),
(<Carousel.Item key={'6'}>
 <div className='crouselItemf' >
       
       <div><img className='textImg' src={forty} /></div>
        <p className='textImgSpan'>
        <span >Increased revenue growth</span>
        </p>
        <div className='crouselItemDivS'>
            <div><img className='crouselItemFimg' src={lovesac} /></div>
            <div>
                <h3 className='logoName' >Lovesac</h3>
                <div className='startsDiv'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img className='crouselItemSimg' src={Quardrant} />
    
    </div>
</Carousel.Item>)
]

export const div_meta_data = [
    (
   
        <div className='crouselItemL' >
            <h4 >Shrenik Sadalgi</h4>
            <h2 >Chair of the 3D Commerce Working Group &</h2>
            <p >
                “Building visualization techniques driven by 3D is increasingly a vital element of creating the best possible experience for shoppers, as it provides an invaluable way to explore beautiful imagery with context and authenticity. As we continue to transform the way people shop for ubiquitous in the coming years and that it is their homes, we believe that 3D will be imperative to standardize 3D content so it can be exchanged effectively and experienced consistantly”
            </p>
            <div className='crouselItemDivS'>
                <div><img className='crouselItemFimg' src={wayfair} /></div>
                <div>
                    <h3 className='logoName' >Wayfair</h3>
                    <div className='startsDiv'>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                    </div>
                </div>
            </div>
            <img className='crouselItemSimg' src={Quardrant} />

        </div>
  
),
(
    <div className='crouselItemL' >
        <h4 >Daniel Beauchamp </h4>
        <h2 >Head of Shoplify Virtual and Augmented Reality</h2>
        <p >
            “Shopify is deeply committed in making AR experiences readily available to everyday shoppers. We’re exited to propel the accessibility of 3D models for both big and small businesses, to lower the barrier for entrepreneurs to be able to sell using augmented Reality, Virtual Reality and 3D experiences”
        </p>
        <div className='crouselItemDivS'>
            <div><img className='crouselItemFimg' src={shopify} /></div>
            <div>
                <h3 className='logoName' >Shopify</h3>
                <div className='startsDiv'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img className='crouselItemSimg' src={Quardrant} />

    </div>
),
(
    <div className='crouselItemL' >
        <h4 >Martin Enthed</h4>
        <h2 >IKEA Communications AB</h2>
        <p >
            “IKEA has been working on large scale promoting open standards and collaboration all to meet the demands of our customers.”
        </p>
        <div className='crouselItemDivS'>
            <div><img className='crouselItemFimg' src={ikea} /></div>
            <div>
                <h3 className='logoName' >IKEA</h3>
                <div className='startsDiv'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img className='crouselItemSimg' src={Quardrant} />

    </div>
),
(
    <div className='crouselItemL' >
        <h4 >David Weinstein</h4>
        <h2 >Director of Virtual Reality at Nvidia</h2>
        <p >
            “Industry cooperation throughout the creation and deployment pipeline for digital product model will help scale the market for 3D capable tools, cloud processing and client platforms- Including AR and VR devices. Nvidia enthusiastically supports the 3D commerce initiative at Khronos and will work to help maximize the project’s benifit’s to the industry ”
        </p>
        <div className='crouselItemDivS'>
            <div><img className='crouselItemFimg' src={nvidia} /></div>
            <div>
                <h3 className='logoName' >Nvidia</h3>
                <div className='startsDiv'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
            </div>
        </div>
        <img className='crouselItemSimg' src={Quardrant} />

    </div>
),
(
<div className='crouselItemL' >
   
   <div><img className='textImg' src={twohundred} /></div>
    <p className='textImgSpan'>
    <span >Increase in average order value</span>
    </p>
    <div className='crouselItemDivS'>
        <div><img className='crouselItemFimg' src={macys} /></div>
        <div>
            <h3 className='logoName' >Macys</h3>
            <div className='startsDiv'>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
            </div>
        </div>
    </div>
    <img className='crouselItemSimg' src={Quardrant} />

</div>
),
(
<div className='crouselItemL' >
   
   <div><img className='textImg' src={forty} /></div>
    <p className='textImgSpan'>
    <span >Reduced product returns</span>
    </p>
    <div className='crouselItemDivS'>
        <div><img className='crouselItemFimg' src={shopify} /></div>
        <div>
            <h3 className='logoName' >Shopify</h3>
            <div className='startsDiv'>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
            </div>
        </div>
    </div>
    <img className='crouselItemSimg' src={Quardrant} />

</div>
),
(
<div className='crouselItemL' >
   
   <div><img className='textImg' src={forty} /></div>
    <p className='textImgSpan'>
    <span >Increased revenue growth</span>
    </p>
    <div className='crouselItemDivS'>
        <div><img className='crouselItemFimg' src={lovesac} /></div>
        <div>
            <h3 className='logoName' >Lovesac</h3>
            <div className='startsDiv'>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
            </div>
        </div>
    </div>
    <img className='crouselItemSimg' src={Quardrant} />

</div>
)
] 