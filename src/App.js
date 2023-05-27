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
  const [moves, setMoves] = React.useState([])

  React.useEffect(()=>{setActionOrder(teamSelect)}, [teamSelect])
  
  
  return (
    <InputFieldContext.Provider value = {{turn, setTurn, teamSelect, setTeamSelect, actionOrder, setActionOrder, actionHistory, setActionHistory, moves, setMoves}}>
      <div>

      </div>
      <div>
        <ChangeLog/>
      </div>
      <div className={classes.container}>
        <ActionController/>
        <AllChars/>
        <CharCardsMapper/>
      </div>
      <div>

      </div>
    </InputFieldContext.Provider>
  );
}

export default App;
