import { MainNavigator } from '@/Static'
import { MainNavigatorTypes } from '@/globalTypes'
import { FC } from 'react'
import {
    IconImage,
    NavigateWrapper,
    NewPostButton,
    SingleRoute,
    StyleNavigator,
    Title
} from '@/components/Navigator/style.navigator'

const DumbNavigatorComponent: FC<any> = ({pathname, handleRoute, singleUser}) => (
    <StyleNavigator>
        <NavigateWrapper>
            {MainNavigator.map(({id, name, icon, route}: MainNavigatorTypes) =>
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