import CharCardsMapper from './components/CharCardsMapper'
import InputField from './components/InputField'
import ChangeLog from './components/ChangeLog'

import { InputFieldContext } from './Contexts/InputFieldContext'
import classes from './App.module.css'
import React from 'react'

function App() {
  
  const [actionOrder, setActionOrder] = React.useState([])
  const [actionHistory, setActionHistory] = React.useState([])
  const [teamSelect, setTeamSelect] = React.useState([])
  const [turn, setTurn] = React.useState(1)

  React.useEffect(()=>{console.log('re-render')})

  return (
    <InputFieldContext.Provider value = {{turn, setTurn, teamSelect, setTeamSelect, actionOrder, setActionOrder, actionHistory, setActionHistory}}>
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
