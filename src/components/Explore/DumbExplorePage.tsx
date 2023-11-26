import React, { FC } from 'react'
import Navigator from '@/components/Navigator'
import { ExploreProp } from '@/globalTypes'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import {
    ExploreBody,
    StyleExplore,
    ExploreContent,
    ExploreItem,
    LoaderContent
} from '@/components/Explore/style.explore'

const DumbExplorePage: FC<ExploreProp> = ({reviews}) => (
    <StyleExplore>
        <ExploreBody>
            <Navigator/>
            <ExploreContent>
                {reviews === null ?
                    <LoaderContent> <MainLoader/> </LoaderContent> :
                    reviews?.map(({imageUrl, id}) => <ExploreItem src={imageUrl} key={id} alt={imageUrl}/>)
                }
            </ExploreContent>
        </ExploreBody>
    </StyleExplore>
)

export default DumbExplorePage