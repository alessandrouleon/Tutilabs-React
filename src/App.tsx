 import { LightTheme } from './themes'
 import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { GlobalStyle } from './themes/global'

function App() {

  return (
     <ThemeProvider theme={LightTheme}>
     <>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
     </>
    </ThemeProvider>

  )
}

export default App
