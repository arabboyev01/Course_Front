import styled from 'styled-components';

export const Sidebar: any = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  height: 100vh;
  width: ${(props: any) => (props.open ? '300px' : '0')};
  background-color: ${({theme}) => theme.body};
  overflow-y: auto;
  z-index: 100;
  transition: left 0.3s ease, right 0.3s ease;

  @media (max-width: 440px) {
    top: 50px;
    width: ${(props: any) => (props.open ? '100%' : '0')};
  }
`

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Mochiy Pop P one', sans-serif;
  
   @media (max-width: 440px) {
    justify-content: start;
     margin-left: 50px;
  }
`

export const SidebarMenu = styled.div`
  position: relative;
  padding-top: 1rem;
  height: 500px;
  overflow-y: scroll;
  
  @media(max-width: 440px){
    height: 400px;
  }
`

export const ItemIcon: any = styled.div`
  color: ${(props: any) => (props.active ? '#fff' : '#555555')};
`

export const ItemText: any = styled.p`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 700;
  color: ${({theme}) => theme.text};
  color: ${(props: any) => (props.active ? '#fff' : props.logout && '#bf0000')};
  transition: color 0.3s ease-in-out;
  font-size: 17px;
`
export const SidebarMenuItem: any = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 3rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  background-color: ${(props: any) => (props.active ? 'rgb(62, 40, 222)' : 'transparent')};

  &:hover {
    background: ${({theme}) => theme.mainHover};
    color: ${({theme}) => theme.text};
  }
`;

export const CloseIconStyle = {
  fontWeight: 900,
  fontSize: "2rem"
};


export const IconHover = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 250px;
  top: 40px;

  &:hover {
    background: ${({theme}) => theme.iconHover};
    border-radius: 50px;
    cursor: pointer;
  }
  
  @media(max-width: 440px){
    left: 80%;
  }
`

export const HamburgerIcon = {
    position: 'fixed',
    left: '180px',
    top: '120px',
    background: 'rgb(62, 40, 222)',
    width: '40px',
    height: '40px',
    padding: '5px',
    color: '#fff',
    borderRadius: '50%',
    zIndex: 1,
    cursor: "pointer",
    '@media (max-width: 650px)': {
        left: '20px',
        top: '100px',
    }
}