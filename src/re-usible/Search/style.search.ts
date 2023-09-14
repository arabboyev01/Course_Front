import styled from "styled-components"

export const SearchWrapper = styled.div`
 position: relative;
`
export const StyleSearch = styled.div`
  max-width: 400px;
  width: 100%;
  background: #fff;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 80px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding-left: 10px;
  border-bottom: .2px solid rgba(0, 0, 0, 0.3);
`

export const Title: any = styled.p`
  text-decoration: ${(props: any) => (props.active ? "underline" : "none")};
  padding: 10px 0;
  font-weight: ${(props: any) => props.active ? 900 : 400};
  cursor: pointer;
  text-transform: capitalize;

`

export const SingleReview = styled.div`
  padding: 12px;
  width: 100%;
  max-height: 400px;
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

`

export const GroupName = styled.p`

`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`