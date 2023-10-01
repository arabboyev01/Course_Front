import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
const DumbEmojiPicker = () => (
    <Picker data={data} onEmojiSelect={console.log} />
)

export default DumbEmojiPicker