import { useState } from "react";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar';
import SidebarComponent from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
// import Fardamentos from './scenes/fardamentos';
// import Cantinas from './scenes/cantina';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SidebarComponent isSidebar={isSidebar} />
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/*<Route path="/fardamentos" element={<Fardamentos />} />*/}
              {/*<Route path="/cantina" element={<Cantina />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
