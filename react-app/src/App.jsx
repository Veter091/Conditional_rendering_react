import { useState } from 'react'
import './App.css'
import AccessMessage from './Components/AccessMessage/AccessMessage.jsx'
import Entry from './Components/Entry/Entry.jsx'
import Greeting from './Components/Greeting/Greeting.jsx'

function App() {

  const [searchText, setSearchText] = useState('')


  return (
    <>
    <Entry onTextChange={setSearchText} />
    <AccessMessage age={Number(searchText)} />
    <Greeting/>
    </>
  )
}

export default App
