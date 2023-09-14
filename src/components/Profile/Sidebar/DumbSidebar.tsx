import React from 'react'
import { SidebarProps } from '@/globalTypes'
import {
    CloseIconStyle, HamburgerIcon,
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
    = ({
           pathname,
           sidebarNavItems,
           handleActive,
           handleOpen,
           handleClose,
           open
       }) => (
    <React.Fragment>
        <MenuIcon sx={HamburgerIcon} onClick={handleOpen}/>
        <Sidebar open={open}>
            <SidebarLogo>Profile</SidebarLogo>
            <CloseIcon onClick={handleClose} sx={CloseIconStyle}/>
            <SidebarMenu>
                {sidebarNavItems.map((item: any) => (
                    <SidebarMenuItem active={item.to === pathname} key={item.id} onClick={() => handleActive(item.to)}>
                        <ItemIcon active={item.to === pathname}>{item.icon}</ItemIcon>
                        <ItemText active={item.to === pathname}>{item.display}</ItemText>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </Sidebar>
    </React.Fragment>
)
export default DumbSidebar;