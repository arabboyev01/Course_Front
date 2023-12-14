import { ChatSystemWrapper, MessageListStyle, StyleChatSystem, Title } from '@/re-usible/ChatSystem/style.chatSystem'
import { FC } from 'react'
import { ChatSystemProp } from '@/re-usible/ChatSystem/Type.ChatSystem'
import MessagesList from '@/re-usible/ChatSystem/MessagesList'
import MemberListComponent from '@/re-usible/ChatSystem/MemberList'
import MessageInputComponent from '@/re-usible/ChatSystem/MessageInput'

const DumbChatSystem: FC<ChatSystemProp> = ({theme}) => (
    <StyleChatSystem>
        <Title>Messages</Title>
        <ChatSystemWrapper>
            <MemberListComponent/>
            <MessageListStyle>
                <MessagesList theme={theme}/>
                <MessageInputComponent theme={theme}/>
            </MessageListStyle>
        </ChatSystemWrapper>
    </StyleChatSystem>
)

export default DumbChatSystem