import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SlideStyle, StyleSwiper, SwiperStyle } from '@/re-usible/Swiper/style.swiper'

const SwiperComponent = ({reviews}: any) => {

    return (
        <StyleSwiper>
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
                style={SwiperStyle}
            >
                {reviews?.map(({name, id}: any) =>
                <SwiperSlide style={SlideStyle} key={id}>{name}</SwiperSlide>
                )}
            </Swiper>
        </StyleSwiper>
    )
}

export default SwiperComponent