import DumbLists from '@/re-usible/InputLists/GroupList/DumbLists'
import { useState } from 'react'
import { handleGroupName } from '@/store/reducerSlice'
import { useDispatch } from 'react-redux'

const InputLists = () => {

    const [open, setOpen] = useState(false)
    const [groupVal, setValue] = useState("")
    const dispatch = useDispatch()
    const handleInputFocus = (): void => setOpen(true);
    const handleInputBlur = () => setOpen(false)
    const handleTagSelect = (value: string) => {
        setValue(value)//@ts-ignore
        dispatch(handleGroupName(value))
    }

    return <DumbLists
        open={open}
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        groupVal={groupVal}
        handleTagSelect={handleTagSelect}
    />
}

export default InputLists