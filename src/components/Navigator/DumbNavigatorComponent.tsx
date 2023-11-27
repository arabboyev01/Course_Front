import { Navigator } from '@/Static'
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
import TooltipComponent from '@/re-usible/Tooltip'

const DumbNavigatorComponent: FC<NavigatorComponentProp> = ({pathname, handleRoute, singleUser}) => (
    <StyleNavigator>
        <NavigateWrapper>
            {Navigator(singleUser?.username).map(({id, name, icon, route}: MainNavigatorTypes) =>
                <TooltipComponent title={name} key={id}>
                    <SingleRoute onClick={() => handleRoute(route)}>
                        <IconImage src={icon.src} alt={icon}/>
                        <Title active={pathname === route}>{name}</Title>
                    </SingleRoute>
                </TooltipComponent>
            )}
            {!singleUser?.error &&
                <NewPostButton onClick={() => handleRoute('/review-creation/1')}>+ New Post</NewPostButton>}
        </NavigateWrapper>
    </StyleNavigator>
)

export default DumbNavigatorComponent