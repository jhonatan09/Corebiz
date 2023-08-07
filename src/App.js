import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Main from "./page/Home"
import Footer from './components/Footer'
import { DataContextProvider } from './store'

const App = () => {

  const [language, setLanguage] = useState('PT')

  function languages(language) {
    setLanguage(language)
  }

  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Navbar language={languages} active_language={language} />
          <Main active_language={language} />
          <Footer active_language={language} />

        </BrowserRouter>
      </DataContextProvider>
    </div>
  )
}

export default App;
