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
const DumbHero = ({inputValue, handleDirect, handleSearchValue, handleOnchange}: any) => (
    <StyleHero>
        <ContentWrapper>
            <MainText>Helping developers to get their dream job</MainText>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</Description>
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
    </StyleHero>
)

export default DumbHero