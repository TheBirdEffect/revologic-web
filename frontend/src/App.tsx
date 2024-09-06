import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import { theme } from './styles/Theme'
import { StackLayout } from './styles/core/Wrappers'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    
    </ThemeProvider>
  )
}

export default App
