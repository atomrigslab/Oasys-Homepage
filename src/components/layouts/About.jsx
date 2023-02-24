import { React , useState } from 'react';
import { Link } from 'react-router-dom'

import item from '../../assets/fake-data/item';

const About = () => {

    const [data] = useState(
        {
            subtitle: 'GAMVERSE',
            title: '',
            desc1: 'Gamverse is Layer 2 of Oasys blockchain network.',
            desc2: 'Gamverse’s extensive experience with blockchain solution company Atomrigs Lab helps users and game companies ensure Blockchain Game is running and playing reliably in Oasys.',
        }
    )

    return (
        <section className="tf-section section-about">
            <div className="container">
                <div className="row reverse">
                    <div className="col-xl-5 col-md-12">
                        <div className="group-image">
                            {/*
                            <div className="left">
                                <div className="item bg-1"><img src={item.item8} alt="Monteno" /></div>
                            </div>
                            */}
                            <div className="right">
                                <div className="item bg-2"><img src={item.item8} alt="Monteno" /></div>
                            {/*
                                <div className="item bg-3"><img src={item.item10} alt="Monteno" /></div>
                                */}
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="block-text pt-12">
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                            <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                            <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                            <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                            <Link to="https://www.gitbook.com/" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;