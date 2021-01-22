import React from 'react';
import { ThemeProvider } from "react-jss";
import themes from "./themes/main";
import Gallery from './components/Gallery';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Gallery />
    </ThemeProvider>
  );
}

export default App;
