import { CenterDiv, StyleSingle } from '@/components/SingleReview/style.single'
import React from 'react'
import MainLoader from '@/re-usible/Loaders/MainLoader'

const DumbSingle = ({single}: any) => (
    <StyleSingle>
        {single === null ?
            <CenterDiv>
                <MainLoader/>
            </CenterDiv> :
            <h1>This is single user</h1>}
    </StyleSingle>
)

export default DumbSingle;