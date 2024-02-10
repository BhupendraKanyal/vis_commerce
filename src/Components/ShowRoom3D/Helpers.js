import React from "react";
import { Button } from "react-bootstrap";
import chf from './assets/ch1.png';
export const Chairs =()=>{
    return(
         <div className='showRoomFPDiv'>
                        <div className='showRoomBtDiv'>
                            <Button>Chair</Button>
                            <Button>Table</Button>
                            <Button>Sofa</Button>
                            <Button>Lighting</Button>
                            <Button>Paints</Button>
                            <Button>Flooring</Button>
                        </div>
                        <div className='image-row row'>
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                            
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                        </div>
                        <div className='image-row row'>
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                            
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                        </div>
                        <div className='image-row row'>
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                            
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                            <div className='imgPDiv col-md-4'>
                                <div className='imgCDiv'>
                                <div>
                                    <img src={chf} />
                                </div>
                                <hr />
                                <p>Bucket seat chair</p>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}