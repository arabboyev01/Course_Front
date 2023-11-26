import { motion } from 'framer-motion'
import { FC } from 'react'
import { ChildrenProps } from '@/globalTypes'

const TransitionPage: FC<ChildrenProps> = ({children}) => {

    return (
        <motion.div className="switch-container" layout layoutRoot>
            {children}
        </motion.div>
    )
}

export default TransitionPage