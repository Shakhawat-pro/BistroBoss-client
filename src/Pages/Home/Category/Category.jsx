import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
        return (
            <section className='mb-24 w-11/12 mx-auto max-w-screen-xl'>
                <SectionTitle 
                subHeading={"From 11.00am to 10pm"}
                heading={"Order Online"}
                
                ></SectionTitle>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true} 
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, FreeMode, Navigation]}
                    className="mySwiper  relative"
                    breakpoints={{

                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className="max-sm:text-3xl text-4xl uppercase text-center absolute bottom-5 left-1/2 max-[370px]:-translate-x-12 -translate-x-[70px]  text-white">Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className="max-sm:text-3xl text-4xl uppercase text-center absolute bottom-5 left-1/2 max-[370px]:-translate-x-12 -translate-x-[70px]  text-white">Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className="max-sm:text-3xl text-4xl uppercase text-center absolute bottom-5 left-1/2 max-[370px]:-translate-x-12 -translate-x-[70px]  text-white">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className="max-sm:text-3xl text-4xl uppercase text-center absolute bottom-5 left-1/2 max-[370px]:-translate-x-12 -translate-x-[70px]  text-white">Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className="max-sm:text-3xl text-4xl uppercase text-center absolute bottom-5 left-1/2 max-[370px]:-translate-x-12 -translate-x-[70px]  text-white">Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        );
};

export default Category;