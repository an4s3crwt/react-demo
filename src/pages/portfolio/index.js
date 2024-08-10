import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta ,dataP} from '../../content_option';
import { Container, Row, Col } from 'react-bootstrap';

import "./style.css";

const Portfolio = () => {
  return (
    <HelmetProvider>
        <Container className='About-header'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Portfolio | {meta.title} </title>{" "}
                <meta name='description' content={meta.description} />
            </Helmet>
            <Row className='mb-5 po_items_ho'>
                <Col lg="8">
                    <h1 className='display-4 mb-4'>
                        Portfolio
                    </h1>{" "}
                
                    <hr className='t_border my-4 ml-0 text-left'></hr>
                </Col>
            </Row>

            <div className='mb-5 po_items_ho'>
            {dataP.map((data, i) => {
                return ( 
                <div key={i} className='po_item'>
                <img src={`${process.env.PUBLIC_URL}/images/${data.img}`} alt='' />
                <div className='content'>
                    <p>{data.description}</p>
                    <a href={data.link}>
                        view project
                    </a>
                </div>
                </div>
                    );
            })}
            </div>

        </Container>
    </HelmetProvider>
  )
}

export default Portfolio;