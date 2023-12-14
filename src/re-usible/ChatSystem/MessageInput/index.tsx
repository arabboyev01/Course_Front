import { Chat, MessageInput } from '@pubnub/react-chat-components'
import { FC } from 'react'
import { ChannelListProp } from '@/re-usible/ChatSystem/Type.ChatSystem'
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
const MessageInputComponent: FC<ChannelListProp> = ({theme}) => {

    return (
        <Chat currentChannel="test-channel" theme={theme}>
            <MessageInput typingIndicator emojiPicker={<Picker data={emojiData} />} />
        </Chat>
    )
}

export default MessageInputComponent