import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import { theme } from './styles/Theme'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Home />
    </ThemeProvider>
  )
}

export default App
