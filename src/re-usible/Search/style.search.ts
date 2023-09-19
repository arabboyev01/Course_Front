import styled from "styled-components"

export const SearchWrapper = styled.div`
 position: relative;
`
export const StyleSearch = styled.div`
  max-width: 350px;
  width: 100%;
  max-height: 250px;
  min-height: 100px;
  background: #fff;
  position: absolute;
  left: 20px;
  top: 80px;
  border: 1px solid rgba(0,0,0, 0.3);
  z-index: 100;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding-left: 10px;
  border-bottom: .5px solid rgba(0, 0, 0, 0.3);
`

export const Title: any = styled.p`
  padding: 10px 20px;
  font-weight: ${(props: any) => props.active ? 900 : 400};
  cursor: pointer;
  text-transform: capitalize;

`

export const SingleReview = styled.div`
  padding: 12px;
  width: 100%;
  min-height: 100px;
  max-height: 200px;
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
    background: #ddd;
    cursor: pointer;
  }
`

export const ReviewName = styled.h3`
  font-weight: 400;
  font-size: 15px;
`

export const GroupName = styled.p`

`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`