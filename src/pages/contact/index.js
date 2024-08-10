import React from 'react';
import {useState} from "react";
import { contactConfig} from "../../content_option";
import * as emailjs from "emailjs-com";


import {Helmet, HelmetProvider} from "react-helmet-async";
import { meta} from "../../content_option";
import "./style.css";

import { Container, Row, Col, Alert } from "react-bootstrap";

const  ContactUs = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show:false,
        alertmessage: "",
        variant: "",

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ loading: true});

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: contactConfig.YOUR_EMAIL,
            message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )

      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            loading: false,
            alertmessage: "SUCCESS!!, Thank you for your message",
            variant: "success",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      )
    };


    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,

      });
    };
  return (
   <HelmetProvider>
    <Container>
      <Helmet>
          <meta charSet='utf-8'/>
          <title>{meta.title} | Contact</title>
          <meta name='description'content={meta.description}/>        
      </Helmet>

      <Row className='mb-5 mt-3 pt-md-3'>
        <Col lg="8">
          <h1 className='display-4 mb-64'>Contact me</h1>
          <hr className='t_border my-4 ml-0 text-left'/>
        </Col>
      </Row>

      <Row className='sec_sp'>
        <Col lg="12">
          <Alert
            variant={formData.variant}
            className={`rounded-0 co_alert ${
              formData.show ? "d_block" : "d-none"
            }`}
            onClose={() => setFormData({show: false})}
            dismissible>

              <p className='my-0'>{formData.alertmessage}</p>
          </Alert>
        </Col>
        <Col lg="5" className='mb-5'>
            <h3 className='color_sec py-4'>Get in touch</h3>
            <address>
              <strong>
                Email:
              </strong>{" "}
            </address>
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) :(" "

            )}
            <p>{contactConfig.description}</p>
        </Col>
          
        <Col lg="7" className='d-flex align-items-center'>
            <form onSubmit={handleSubmit} className='contact__form'>
              <Row>
                <Col lg="6" className='form_group rounded-0'>
                  <input className='form-control'
                  id='name'
                  name='name'
                  placeholder='Name'
                  value={formData.name || ""}
                  type='text'
                  required
                  onChange={handleChange} 
                  />
                </Col>
                <Col lg="6" className='form_group'>
                  <input 
                  className='form-control rounded-0'
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  value={formData.email || ""}
                  required
                  onChange={handleChange}
                  />                
                </Col>
              </Row>
              <textarea
              className='form-control rounded-0'
              
              id='message'
              name='message'
              placeholder='Message'
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required></textarea>
              <br />
              <Row>
                <Col lg="12" className='form-group'>
                  <button className='btn ac_btn' type='submit'>
                    {formData.loading ? "Sending..." : "Send"}
                    </button>                
                </Col>
              </Row>

            </form>
        
        </Col>
      </Row>

    </Container>

    <div className={formData.loading ? "loading-bar" : "d-none"}></div>
   </HelmetProvider>
  );
};

export default ContactUs;