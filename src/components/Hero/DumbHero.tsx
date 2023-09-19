import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import DumbSlicer from '@/components/Hero/DumbSlicer'
import { HeroProps } from '@/globalTypes'
import { ContentWrapper, Description, DoneIconStyle, InputWrapper, MainText, News, StyleHero, } from '@/components/Hero/style.hero'
import SearchFiled from '@/re-usible/SearchFiled'

const DumbHero: React.FC<HeroProps> = ({ handleDirect, reviews}) => (
    <StyleHero>
        <ContentWrapper>
            <MainText>Helping people to share their experience </MainText>
            <Description>This platform is created to share some topics and theme about Book, Movie or News and you can
                rate or leave a comment to the every post.
            </Description>
            <InputWrapper>
                <SearchFiled />
            </InputWrapper>
            <News>
                <Description><DoneIcon sx={DoneIconStyle}/> Daily new reviews</Description>
                <Description> <DoneIcon sx={DoneIconStyle}/> Join us today</Description>
            </News>
        </ContentWrapper>
        <DumbSlicer reviews={reviews} handleDirect={handleDirect}/>
    </StyleHero>
)

export default DumbHero