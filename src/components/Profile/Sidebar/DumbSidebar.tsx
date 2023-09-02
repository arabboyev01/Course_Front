import React from 'react'
import { SidebarProps } from '@/globalTypes'
import {
    ItemIcon,
    ItemText,
    MenuIndicator,
    Sidebar,
    SidebarLogo,
    SidebarMenu,
    SidebarMenuItem
} from '@/components/Profile/Sidebar/style.sidebar'

const DumbSidebar: React.FC<SidebarProps> = ({ activeIndex, sidebarNavItems, handleActive}) => (
    <Sidebar>
        <SidebarLogo>Profile</SidebarLogo>
        <SidebarMenu>
            <MenuIndicator style={{transform: `translateX(-50%) translateY(${activeIndex * activeIndex}px)`}}></MenuIndicator>
            {sidebarNavItems.map((item: any, index: number) => (
                <SidebarMenuItem active={activeIndex === index} key={item.id}
                                 onClick={() => handleActive(item.id, item.to)}
                >
                    <ItemIcon active={activeIndex === index}>{item.icon}</ItemIcon>
                    <ItemText active={activeIndex === index}>{item.display}</ItemText>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </Sidebar>
)
export default DumbSidebar