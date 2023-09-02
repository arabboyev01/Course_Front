import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: #fff;
  overflow-y: auto;
`

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Mochiy Pop P one', sans-serif;
`

export const SidebarMenu = styled.div`
  position: relative;
  padding-top: 1rem;
`

export const ItemIcon: any = styled.div`
  color: ${(props: any) => (props.active ? '#fff' : '#555555')};
`

export const ItemText: any = styled.p`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 500;
  color: ${(props: any) => (props.active ? '#fff' : '#555555')};
  transition: color 0.3s ease-in-out;
`
export const SidebarMenuItem: any = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  background-color: ${(props: any) => (props.active ? '#308efe' : 'transparent')};
  
`;