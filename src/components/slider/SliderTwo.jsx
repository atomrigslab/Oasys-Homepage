import React , { useState } from 'react';
//import { Link } from 'react-router-dom'
import item from '../../assets/fake-data/item';

// 추가


const SliderTwo = () => {

    const [datatext] = useState({
        subtitle: '',
        title: '-',
        desc: 'Welcome to Gamverse'
    })

    return (
        <section className="tf-section hero-slider style-2 ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text pt-24 center">
                            {/*<h6 className="sub-title mb-6" data-aos="fade-up">{datatext.subtitle}</h6>*/}
                            {/*<h2 className="title mb-26" data-aos="fade-up">Most Popular NFT <br /> Collections</h2>*/}
                            <div className="title mb-26" data-aos="fade-up"><img className='desc' src={item.logo} alt="Monteno" /></div>   {/* item.js 에 임의로 로고 위치지정  */}
                            <p className="desc mb-44 m-auto" data-aos="fade-up">{datatext.desc}</p>
                            {/*<Link to="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration="1200" >Get Connected</Link>*/}
                            
                            <div className="shape">
                                <div className="item bg-1"><img src={item.item11} alt="Monteno" /></div>
                                <div className="item2 bg-2"><img src={item.item12} alt="Monteno" /></div>
                                <div className="item3 bg-1"><img src={item.item13} alt="Monteno" /></div>
                                <div className="item bg-1"><img src={item.item14} alt="Monteno" /></div>
                                {/*<div className="item bg-2"><img src={item.item6} alt="Monteno" /></div>*/}
                                <div className="item2 bg-2"><img src={item.item15} alt="Monteno" /></div>
                                <div className="item3 bg-1"><img src={item.item16} alt="Monteno" /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SliderTwo;