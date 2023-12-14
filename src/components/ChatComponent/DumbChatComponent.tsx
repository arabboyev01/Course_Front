import { ContentWrapper, StyleChatComponent } from '@/components/ChatComponent/style.chat.component'
import Navigator from '@/components/Navigator'
import React from 'react'
import ChatSystem from '@/re-usible/ChatSystem'

const DumbChatComponent = () => (
    <StyleChatComponent>
        <ContentWrapper>
            <Navigator/>
            <ChatSystem/>
        </ContentWrapper>
    </StyleChatComponent>
)

export default DumbChatComponent