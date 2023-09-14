import {
    ContentWrapper,
    Description,
    Forms,
    InputWrapper,
    MainText,
    News,
    StyleHero, SubmitButton
} from '@/components/Hero/style.hero'
import { FOUNDATION_FORM_VALUES } from '@/components/Login/LoginConfig'
import { CssTextField } from '@/re-usible/form-style'
import React from 'react'
import { Form } from 'react-final-form'
import DoneIcon from '@mui/icons-material/Done';
import SearchSuggested from '@/re-usible/Search/SearchSuggested'
import DumbSlicer from '@/components/Hero/DumbSlicer'
import { HeroProps } from '@/globalTypes'
const DumbHero: React.FC<HeroProps> = ({inputValue, handleDirect, handleSearchValue, handleOnchange, reviews}) => (
    <StyleHero>
        <ContentWrapper>
            <MainText>Helping people to share their experience </MainText>
            <Description>This platform is created to share some topics and theme about Book, Movie or News and you can rate the every post.</Description>
            <InputWrapper>
                <Form
                    onSubmit={handleSearchValue}
                    render={({handleSubmit}) => (
                        <Forms onSubmit={handleSubmit} noValidate >
                            <CssTextField {...FOUNDATION_FORM_VALUES.search} onChange={(e: any) => handleOnchange(e.target.value)}/>
                            <SubmitButton type="submit">Search Now</SubmitButton>
                        </Forms>
                    )}
                />
                {inputValue ? <SearchSuggested inputValue={inputValue} handleDirect={handleDirect} /> : null}
            </InputWrapper>
            <News>
                <Description><DoneIcon /> Weekly new reviews</Description>
                <Description> <DoneIcon /> Join us today</Description>
            </News>
        </ContentWrapper>
        <DumbSlicer reviews={reviews} handleDirect={handleDirect}/>
    </StyleHero>
)

export default DumbHero