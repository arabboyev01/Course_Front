import { SingleRoute, StyleNavigator, Title } from '@/components/Navigator/style.navigator'
import { MainNavigator } from '@/Static'
import { MainNavigatorTypes } from '@/globalTypes'
import { FC } from 'react'

const DumbNavigatorComponent: FC<any> = ({pathname, handleRoute}) => (
    <StyleNavigator>
        {MainNavigator.map(({id, name, icon, route}: MainNavigatorTypes) =>
            <SingleRoute key={id} onClick={() => handleRoute(route)}>
                {icon}
                <Title active={pathname === route}>{name}</Title>
            </SingleRoute>
        )}
    </StyleNavigator>
)

export default DumbNavigatorComponent