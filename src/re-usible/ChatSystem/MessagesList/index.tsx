import { MessageList, Chat } from '@pubnub/react-chat-components'
import { FC } from 'react'
import { ChannelListProp } from '@/re-usible/ChatSystem/Type.ChatSystem'

import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
const MessagesList: FC<ChannelListProp> = ({theme}) => {

    return (
        <Chat currentChannel="test-channel" theme={theme}>
            <MessageList fetchMessages={5} enableReactions reactionsPicker={<Picker data={emojiData} />} />
        </Chat>
    )
}

export default MessagesList