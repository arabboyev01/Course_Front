import { Navigator } from '@/Static'
import { MainNavigatorTypes, NavigatorComponentProp } from '@/globalTypes'
import { FC } from 'react'
import * as S from '@/components/Navigator/style.navigator'
import TooltipComponent from '@/re-usible/Tooltip'

const DumbNavigatorComponent: FC<NavigatorComponentProp> = ({pathname, handleRoute, singleUser}) => (
    <S.StyleNavigator>
        <S.NavigateWrapper>
            {Navigator(singleUser?.username).map(({id, name, icon, route}: MainNavigatorTypes) =>
                <TooltipComponent title={name} key={id}>
                    <S.SingleRoute onClick={() => handleRoute(route)}>
                        <S.IconImage src={icon.src} alt={icon}/>
                        <S.Title active={pathname === route}>{name}</S.Title>
                    </S.SingleRoute>
                </TooltipComponent>
            )}
        </S.NavigateWrapper>
    </S.StyleNavigator>
)

export default DumbNavigatorComponent