import DumbChatSystem from '@/re-usible/ChatSystem/DumbChatSystem'
import { useSelector } from 'react-redux'
import { mode } from '@/store/Selector'
import { Themes } from '@pubnub/react-chat-components'
const ChatSystem = () => {

    const theme: Themes | undefined = useSelector(mode) as Themes | undefined

    return <DumbChatSystem theme={theme}/>
}

export default ChatSystem