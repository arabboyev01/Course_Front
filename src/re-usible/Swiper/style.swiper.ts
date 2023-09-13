import styled from 'styled-components';

export const StyleSwiper = styled.div`
  max-width: 1330px;
  height: 500px;
  width: 100%;
  margin: 120px auto 20px auto;
`

export const SwiperStyle = {
    width: '100%',
    height: '100%',
    background: "#8f8f8f",
}
export const SlideStyle: any = {
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    paddingLeft: "80px",
}
export const Text = styled.h2`
  margin-top: 20px;
  font-weight: 400;
  color: #333333;
  font-style: italic;
  text-align: start;
  max-width: 800px;
`
export const Description = styled.div`
 margin: 12px 0;
  max-width: 500px;
  width: 100%;
`

export const MoreButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  text-decoration: underline;
  margin-left: 20px;
  
  &:hover{
    cursor: pointer;
    color: orangered;
  }
`

export const Group = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: white;
  margin-top: 12px;
`