import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import {
    Description,
    Group,
    MoreButton,
    StyleSwiper,
    SwiperStyle,
    Text
} from '@/re-usible/Swiper/style.swiper'
import RatingComponent from '@/re-usible/Rating'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ReviewType } from '@/globalTypes'

const SwiperComponent = ({reviews, handleSingleRoute}: any) => (
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
            {/*style={{backgroundImage: `url(${imageUrl})`}}*/}
            {reviews?.slice(0, 3).map(({name, id, grade, reviewText, groupName, imageUrl}: ReviewType) =>
                <SwiperSlide  className="slide-style" key={id}>
                    <Text>{name}</Text>
                    <Description>{reviewText.substring(0, 180)}...
                        <MoreButton onClick={() => handleSingleRoute(id)}> read more</MoreButton>
                    </Description>
                    <RatingComponent value={grade} size="middle"/>
                    <Group>{groupName}</Group>
                </SwiperSlide>
            )}
        </Swiper>
    </StyleSwiper>
)


export default SwiperComponent