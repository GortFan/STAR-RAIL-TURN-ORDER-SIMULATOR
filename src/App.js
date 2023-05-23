import CharCardsMapper from './components/CharCardsMapper'
import InputField from './components/InputField'
import ChangeLog from './components/ChangeLog'
import AllChars from './components/AllChars'

import { InputFieldContext } from './Contexts/InputFieldContext'
import classes from './App.module.css'
import React from 'react'

import Id1Img from './resources/1101.png'
import Id2Img from './resources/1013.png'
import Id3Img from './resources/1009.png'
import Id4Img from './resources/1104.png'
import Id5Img from './resources/Monster_1013020.png'

function App() {
  
  const [actionOrder, setActionOrder] = React.useState([])
  const [defaultValues, setDefaultValues,] = React.useState([])
  const [actionHistory, setActionHistory] = React.useState([])
  const [teamSelect, setTeamSelect] = React.useState([])

  const [formType, setFormType] = React.useState(1)

  React.useEffect(()=>{console.log('re-render')})

  return (
    <InputFieldContext.Provider value = {{teamSelect, setTeamSelect, defaultValues, setDefaultValues, actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory}}>
    <div className={classes.container}>
            <div>
              <AllChars/>
            </div>
            <div>
              <CharCardsMapper
                TurnOrder = {actionOrder}/>
            </div>
            <div className={classes.flexitem}>
              <InputField/>
            </div>

    </div>
    <div>
      <ChangeLog/>
    </div>
    </InputFieldContext.Provider>
  );
}

export default App;
