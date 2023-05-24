import CharCardsMapper from './components/CharCardsMapper'
import InputField from './components/InputField'
import ChangeLog from './components/ChangeLog'
import AllChars from './components/AllChars'

import { InputFieldContext } from './Contexts/InputFieldContext'
import classes from './App.module.css'
import React from 'react'

function App() {
  
  const [actionOrder, setActionOrder] = React.useState([])
  const [defaultValues, setDefaultValues,] = React.useState([])
  const [actionHistory, setActionHistory] = React.useState([])
  const [teamSelect, setTeamSelect] = React.useState([])

  const [formType, setFormType] = React.useState(1)

  React.useEffect(()=>{setActionOrder(teamSelect)}, [teamSelect])
  
  
  return (
    <InputFieldContext.Provider value = {{teamSelect, setTeamSelect, defaultValues, setDefaultValues, actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory}}>
                <div>
              <AllChars/>
            </div>
    <div>
      <ChangeLog/>
    </div>
    <div className={classes.container}>

            <div>
              <CharCardsMapper
                TurnOrder = {actionOrder}/>
            </div>
            <div className={classes.flexitem}>
              <InputField/>
            </div>

    </div>
    </InputFieldContext.Provider>
  );
}

export default App;
