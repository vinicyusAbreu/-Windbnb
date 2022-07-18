import { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import Locals from './components/Locals'
import WindbnbProvider from './context/windbnb'
function App() {


  return (
    <WindbnbProvider>
      <div className='app'>
        <GlobalStyle />
        <Header />
        <Locals />
      </div>
    </WindbnbProvider>
  )
}

export default App;
