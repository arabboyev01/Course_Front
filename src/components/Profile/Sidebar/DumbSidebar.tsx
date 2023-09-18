import React from 'react'
import { SideBarNavType, SidebarProps } from '@/globalTypes'
import {
    CloseIconStyle, HamburgerIcon, IconHover,
    ItemIcon,
    ItemText,
    Sidebar,
    SidebarLogo,
    SidebarMenu,
    SidebarMenuItem
} from '@/components/Profile/Sidebar/style.sidebar'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const DumbSidebar: React.FC<SidebarProps>
    = ({pathname, handleActive, handleOpen, handleClose, open, sidebarDumb}) => (
    <React.Fragment>
        <MenuIcon sx={HamburgerIcon} onClick={handleOpen}/>
        <Sidebar open={open}>
            <SidebarLogo>Profile</SidebarLogo>
            <IconHover>
                <CloseIcon onClick={handleClose} sx={CloseIconStyle}/>
            </IconHover>
            <SidebarMenu>
                {sidebarDumb.map((item: SideBarNavType) => (
                    <SidebarMenuItem active={item.to === pathname} key={item.id} onClick={() => handleActive(item.to)}>
                        <ItemIcon active={item.to === pathname}>{item.icon}</ItemIcon>
                        <ItemText logout={item.display === 'Log-out'} active={item.to === pathname}>{item.display}</ItemText>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </Sidebar>
    </React.Fragment>
)
export default DumbSidebar;