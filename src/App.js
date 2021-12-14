import Header from './components/Header'
import Body from './components/Body'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme ={darkTheme}>
      <CssBaseline/>
      <div className="container">
        <Header />
        <Body />
      </div>
    </ThemeProvider>
    
  );
}

export default App;