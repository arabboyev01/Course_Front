export const removePrevActive = (inputValue: string, setValue: any) => {
    if (inputValue === 'name') {
        setValue((prevState: any) => ({...prevState, 'username': ''}))
    }
    if (inputValue === 'username') {
        setValue((prevState: any) => ({...prevState, 'name': ''}))
    }
}