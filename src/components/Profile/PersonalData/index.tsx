import Dumb from './Dumb'
import { useState } from "react"
const PersonalData = () => {

    const onSubmit = (values: any) => {
        console.log(values)
    }

    return <Dumb onSubmit={onSubmit} />
}

export default PersonalData