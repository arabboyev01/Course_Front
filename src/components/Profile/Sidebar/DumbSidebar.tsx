import React from 'react'
import { SidebarProps } from '@/globalTypes'
import {
    ItemIcon,
    ItemText,
    Sidebar,
    SidebarLogo,
    SidebarMenu,
    SidebarMenuItem
} from '@/components/Profile/Sidebar/style.sidebar'

const DumbSidebar: React.FC<SidebarProps> = ({ pathname, sidebarNavItems, handleActive}) => (
    <Sidebar>
        <SidebarLogo>Profile</SidebarLogo>
        <SidebarMenu>
            {sidebarNavItems.map((item: any) => (
                <SidebarMenuItem active={item.to === pathname} key={item.id}
                                 onClick={() => handleActive(item.to)}
                >
                    <ItemIcon active={item.to === pathname}>{item.icon}</ItemIcon>
                    <ItemText active={item.to === pathname}>{item.display}</ItemText>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </Sidebar>
)
export default DumbSidebar;