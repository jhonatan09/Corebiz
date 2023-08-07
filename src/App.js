import React, { useState } from 'react';
import Navbar from './componentes/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Main from "./componentes/Main"
import Footer from './componentes/Footer'
import { DataContextProvider } from './store'

const App = () => {

  const [language, setLanguage] = useState('PT')

  function languages(language) {
    setLanguage(language)
  }

  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar language={languages} active_language={language} />
          <Main />
          <Footer active_language={language} />

        </BrowserRouter>
      </DataContextProvider>
    </div>
  )
}

export default App;
