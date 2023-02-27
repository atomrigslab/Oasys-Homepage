import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';

const Testimonials2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section testimonial" id='testimonial'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Games</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial__content style-2">
                        <Swiper
                            className='swiper'
                            modules={[Pagination , Scrollbar, A11y]}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                767: {
                                    slidesPerView: 2,
                                },
                            }}
                            scrollbar={{ draggable: true }}                
                        >
                            {
                                data.map((data,index) => (
                                    <SwiperSlide key={index}>
                                        <div className="box-testimonial">
                                        <img className="quote" src={data.game} alt="Monteno" />
                                        <div className="info">
                                            <div>
                                                <h6>{data.name}</h6>
                                                <div className="social">
                                                    <a href={data.twitter}>
                                                        <img src={data.twitter_image} alt="twitter" />
                                                    </a>
                                                    <a href={data.linkedin}>
                                                        <img src={data.linkedin_image} alt="twitter"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials2;