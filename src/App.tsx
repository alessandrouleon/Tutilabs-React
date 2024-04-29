import { LightTheme } from './themes'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { GlobalStyle } from './themes/global'
import { ItemProvider } from './context/ItemContext'

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <ItemProvider>
            <AppRoutes />
          </ItemProvider>
        </BrowserRouter>
      </>
    </ThemeProvider>

  )
}

export default App
