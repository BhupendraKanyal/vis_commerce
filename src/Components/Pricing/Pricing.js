import './style.css'
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import pricingImg from './assets/pricingImg.svg';
import catalog from './assets/catalog.svg';
import integration from './assets/integration.svg';

import ReCAPTCHA from 'react-google-recaptcha';
import { Helpers } from './Helper';
export const Pricing = () => {
    return (
        <Container>
            <Row className='fRow'>
            {/* order-last order-sm-first */}
                <Col xs={12} md={6} className=''>
                    <div className='pricingImgDiv'>
                        <img src={pricingImg} />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='parentDiv'>
                        <h5>Pricing</h5>
                        <h2>Depends on</h2>
                        <div className="ulPPDiv">
                            <div className="ulPDiv">
                                <div className="ulFDiv">
                                    <img src={catalog} />
                                    <p>Catalog</p>
                                </div>
                                <ul>
                                    <li>SKU Count</li>
                                    <li>Size</li>
                                    <li>Complexity</li>
                                </ul>
                            </div>
                            <div className="ulPDiv">
                                <div className="ulFDiv">
                                    <img src={integration} />
                                    <p>Integration</p>
                                </div>
                                <ul>
                                    <li>Website</li>
                                    <li>Online ECommerce Store</li>
                                    <li>CRM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
           <Helpers />

            {/* <Row className='sRow'><h4>Join Us</h4></Row> */}

            <Row className='tRow' style={{paddingTop:'80px'}}>
                {/* <Col xs={12} md={4} className='joinUsCol'>
                    <div className='joinUsPPDiv'>
                        <div className='joinUsPDiv'>
                            <div>
                            <h4>Contact Info</h4>
                            <div className='phoneDiv'>
                                <img src={phone} />
                                <p>+91 0000000000</p>
                            </div>
                            <div className='mailDiv'>
                                <img src={mail} />
                                <p>info@viscommerce.com</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </Col> */}
                <Col md={2} xs={12} className='hideCol'></Col>
                <Col xs={12} md={8} className='cols formCol'>
                    <div className='formPDiv'>
                        <FormComponent />
                    </div>
                </Col>
                <Col md={2} xs={12} className='hideCol'></Col>
            </Row>
        
        </Container>
    )
}


export const FormComponent = () => {
    const [recaptchaValidation, setRecaptchaValidation] = useState(false)
    const [formDataVals, setFormDataVals] = useState({
        fullName: '',
        emailAddress: '',
        phoneNum: '',
        description: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormDataVals({
          ...formDataVals,
          [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateForm(formDataVals) == 'no')
        alert("clicked")
    }
    const validateForm = (formData) => {
        let errors = 'no';
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!formData.fullName) {
          alert('Name is required')
          errors='yes'
        }
        else if (!formData.emailAddress) {
            alert('Email is required')
          errors='yes'
        } 
        else if(!regex.test(formData.emailAddress) && formData.emailAddress) {
            alert('Please enter a valid email-address')
            errors='yes'
        }
        else if(!formData.description){
            alert('Please enter a short description')
            errors='yes'
        }
        return errors
      }
    
    const handleRecaptchaChange = (value) => {
        setRecaptchaValidation(true)
    };
    const handleRecaptchaExpired = () => {
        setRecaptchaValidation(false)
    };
    return (
        <Form onSubmit={handleSubmit}>
            <h3>Contact us</h3>
            <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Name" name='fullName' onChange={handleInputChange} />
            </Form.Group>

            <Row className='flexControls'>
                <Col>
                    <Form.Group controlId="formEmail">
                        <Form.Control type="text" placeholder="Email" name='emailAddress' onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formPhone">
                        <Form.Control type="tel" placeholder="Phone (optional)" name='phoneNum' onChange={handleInputChange} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="formDescription">
                <Form.Control as="textarea" rows={3} placeholder="Description" name='description' onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formRecaptcha">
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptchaChange}
                    onExpired={handleRecaptchaExpired}
                    className="custom-recaptcha-style"
                />
            </Form.Group>
            <div style={{textAlign:'center'}}>
            <Button className='formBt' type="submit" disabled={!recaptchaValidation}>
                Submit
            </Button>
            </div>
        </Form>
    )
}