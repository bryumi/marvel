import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { Home } from './components/pages/Home'

export function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
       
        <Home/>
        <GlobalStyle />
    </ThemeProvider>
    
  )
}

