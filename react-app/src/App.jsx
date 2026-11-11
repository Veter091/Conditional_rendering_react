import { useState } from 'react'
import './App.css'
import AccessMessage from './Components/AccessMessage/AccessMessage.jsx'
import Entry from './Components/Entry/Entry.jsx'
import Greeting from './Components/Greeting/Greeting.jsx'
import Modal from './Components/Modal/Modal.jsx'
import LogButton from './Components/LogButton/LogButton.jsx'
import CustomButton from './Components/CustomButton/CustomButton.jsx'
import Counter from './Components/Counter/Counter.jsx'
import TextToggle from './Components/TextToggle/TextToggle.jsx'
import ColorSwitcher from './Components/ColorSwitcher/ColorSwitcher.jsx'
import ButtonTimeout from './Components/ButtonTimeout/ButtonTimeout.jsx'
import ButtonCountLog from './Components/ButtonCountLog/ButtonCountLog.jsx'
import FormName from './Components/FormName/FormName.jsx'
import FormEntry from './Components/FormEntry/FormEntry.jsx'
import FormColor from './Components/FormColor/FormColor.jsx'
import FormRegistration from './Components/FormRegistration/FormRegistration.jsx'
import FormPost from './Components/FormPost/FormPost.jsx'
import MovementMouse from './Components/MovementMouse/MovementMouse.jsx'
import Notes from './Components/Notes/Notes.jsx'
import TaskList from './Components/TaskList/TaskList.jsx'
import UserList from './Components/UserList/UserList.jsx'

function App() {

  const [searchText, setSearchText] = useState('')


  return (
    <>
    <Entry onTextChange={setSearchText} />
    <AccessMessage age={Number(searchText)} />
    <Greeting/>
    {/* <Modal title="Подтверждение действия">
      <p>Вы уверены, что хотите удалить файл?</p>
      <button>Да</button>
      <button>Нет</button>
    </Modal> */}
    <LogButton/>
    <CustomButton label='Сохранить'
    onPress={() => console.log('Сохраняем...')}
    />
    <Counter/>
    <TextToggle/>
    <ColorSwitcher/>
    <ButtonTimeout/>
    <ButtonCountLog/>
    <FormName/>
    <FormEntry/>
    <FormColor/>
    <FormRegistration/>
    <FormPost/>
    <MovementMouse/>
    <Notes/>
    <TaskList/>
    <UserList/>

    {/* <div className="overlay"></div> */}
    </>
  )
}

export default App
