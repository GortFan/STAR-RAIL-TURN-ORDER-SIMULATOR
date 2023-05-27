import CharCardsMapper from './components/CharCardsMapper'
import ChangeLog from './components/ChangeLog'
import AllChars from './components/AllChars'
import ActionController from './components/ActionController'
// import InputFormMapper from './components/InputFormMapper'

import { InputFieldContext } from './Contexts/InputFieldContext'
import classes from './App.module.css'
import React from 'react'

function App() {
  
  const [actionOrder, setActionOrder] = React.useState([])
  const [actionHistory, setActionHistory] = React.useState([])
  const [teamSelect, setTeamSelect] = React.useState([])
  const [turn, setTurn] = React.useState(1)

  React.useEffect(()=>{setActionOrder(teamSelect)}, [teamSelect])
  
  
  return (
    <InputFieldContext.Provider value = {{turn, setTurn, teamSelect, setTeamSelect, actionOrder, setActionOrder, actionHistory, setActionHistory}}>
      <div>

      </div>
      <div>
        <ChangeLog/>
      </div>
      <div className={classes.container}>
      <AllChars/>
        <CharCardsMapper/>
      </div>
      <div>
        <ActionController/>
      </div>
    </InputFieldContext.Provider>
  );
}

export default App;
