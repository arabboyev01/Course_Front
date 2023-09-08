import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
    Description,
    Group,
    MoreButton,
    SlideStyle,
    StyleSwiper,
    SwiperStyle,
    Text
} from '@/re-usible/Swiper/style.swiper'
import RatingComponent from '@/re-usible/Rating'

const SwiperComponent = ({reviews, handleSingleRoute}: any) => {

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
                {reviews?.slice(0,3).map(({name, id, grade, reviewText, groupName}: any) =>
                <SwiperSlide style={SlideStyle} key={id}>
                    <RatingComponent value={grade} size="large"/>
                    <Text>{name}</Text>
                    <Description>{reviewText.substring(0, 200)}...
                      <MoreButton onClick={() => handleSingleRoute(id)}> read more</MoreButton>
                    </Description>
                    <Group>{groupName}</Group>
                </SwiperSlide>
                )}
            </Swiper>
        </StyleSwiper>
    )
}

export default SwiperComponent