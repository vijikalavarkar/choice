import { Swiper, SwiperSlide } from 'swiper/react';
import slideBanner7 from '../../assets/images/slideBanner7.jpg'
import slideBanner8 from '../../assets/images/slideBanner8.jpg'
import slideBanner9 from '../../assets/images/slideBanner9.jpg'

import './HomeBanner.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeBanner = () => {
    return (
        <>
            <div className="homeBannerSection">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                   
                    <SwiperSlide><img src={slideBanner7} alt="" srcset="" className='w-100'/></SwiperSlide>
                    <SwiperSlide><img src={slideBanner8} alt="" srcset="" className='w-100'/></SwiperSlide>
                    <SwiperSlide><img src={slideBanner9} alt="" srcset="" className='w-100'/></SwiperSlide>
                    

                </Swiper>

            </div>
        </>
    )
}
export default HomeBanner