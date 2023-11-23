import styled from "styled-components"

export const SearchWrapper = styled.div`
 position: relative;
`
export const SearchInput = styled.input`
 border: ${({theme}) => theme.borderTheme}
`
export const StyleSearch = styled.div`
  max-width: 350px;
  width: 100%;
  height: auto;
  background: ${({theme}) => theme.body};
  position: absolute;
  left: -10px;
  top: 80px;
  border: ${({theme}) => theme.borderTheme};
  z-index: 100;
  border-radius: 8px;
  overflow: hidden;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding-left: 10px;
  border-bottom: .5px solid rgba(0, 0, 0, 0.3);
  background: rgb(62, 40, 222);
`

export const Title: any = styled.p`
  padding: 10px 20px;
  font-weight: ${(props: any) => props.active ? 700 : 400};
  cursor: pointer;
  text-transform: capitalize;
  color: #fff;
`

export const SingleReview = styled.div`
  padding: 12px;
  width: 100%;
  min-height: 100px;
  height: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
  &::-webkit-scrollbar{
    display: none;
  }
`

export const ReviewItem = styled.div`
  margin: 12px 0;
  border-bottom: .2px solid rgba(0, 0 0, 0.2);
  padding: 5px 2px;
  &:hover{
    background: ${({theme}) => theme.iconHover};
    cursor: pointer;
    border-radius: 3px;
  }
`

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 30px;
`

export const ReviewName = styled.h3`
  font-weight: 400;
  font-size: 15px;
`

export const GroupName = styled.p`
  font-weight: 500;
`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`