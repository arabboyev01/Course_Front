import {  Navigator } from '@/Static'
import { MainNavigatorTypes, NavigatorComponentProp } from '@/globalTypes'
import { FC } from 'react'
import {
    IconImage,
    NavigateWrapper,
    NewPostButton,
    SingleRoute,
    StyleNavigator,
    Title
} from '@/components/Navigator/style.navigator'

const DumbNavigatorComponent: FC<NavigatorComponentProp> = ({pathname, handleRoute, singleUser}) => (
    <StyleNavigator>
        <NavigateWrapper>
            {Navigator(singleUser?.username).map(({id, name, icon, route}: MainNavigatorTypes) =>
                <SingleRoute key={id} onClick={() => handleRoute(route)}>
                    <IconImage src={icon.src} alt={icon} />
                    <Title active={pathname === route}>{name}</Title>
                </SingleRoute>
            )}
            {!singleUser?.error && <NewPostButton onClick={() => handleRoute('/review-creation/1')}>+ New Post</NewPostButton>}
        </NavigateWrapper>
    </StyleNavigator>
)

export default DumbNavigatorComponent