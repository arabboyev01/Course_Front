import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/Theme/GlobalStyle'
import React from 'react'
import { ChildrenProps } from '@/globalTypes'
import { lightTheme, darkTheme } from '@/Theme/theme'
import { useSelector } from 'react-redux'
import { mode } from '@/store/Selector'

const ThemeProviderValue: React.FC<ChildrenProps> = ({children}) => {

  const theme = useSelector(mode)
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        {children}
    </ThemeProvider>
  );
};

export default ThemeProviderValue