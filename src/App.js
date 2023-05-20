import CharCardsMapper from './components/CharCardsMapper'
import InputField from './components/InputField'
import ChangeLog from './components/ChangeLog'

import { InputFieldContext } from './Contexts/InputFieldContext'
import classes from './App.module.css'
import React from 'react'

import Id1Img from './resources/1101.png'
import Id2Img from './resources/1013.png'
import Id3Img from './resources/1009.png'
import Id4Img from './resources/1104.png'
import Id5Img from './resources/Monster_1013020.png'

function App() {
  
  let ActionOrder = [
    {
      speed: 125,
      AV: 80,
      Gauge: 10000,
      id: Number(5),
      name: 'Enemy',
      path: Id5Img,
    },
    {
      speed: 110,
      AV: 91,
      Gauge: 10000,
      id: Number(1),
      name: 'Bronya',
      path: Id1Img,
    },
    {
      speed: 100,
      AV: 100,
      Gauge: 10000,
      id: Number(2),
      name: 'Herta',
      path: Id2Img,
    },
    {
      speed: 98,
      AV: 103,
      Gauge: 10000,
      id: Number(3),
      name: 'Asta',
      path: Id3Img,
    },
    {
      speed: 92,
      AV: 109,
      Gauge: 10000,
      id: Number(4),
      name: 'Gepardge',
      path: Id4Img,
    },
  ]

  let defaultActionOrder = [
    {
      speed: 125,
      AV: 80,
      Gauge: 10000,
      id: Number(5),
      path: Id5Img,
    },
    {
      speed: 110,
      AV: 91,
      Gauge: 10000,
      id: Number(1),
      name: 'Bronya',
      path: Id1Img,
    },
    {
      speed: 100,
      AV: 100,
      Gauge: 10000,
      id: Number(2),
      name: 'Herta',
      path: Id2Img,
    },
    {
      speed: 98,
      AV: 103,
      Gauge: 10000,
      id: Number(3),
      name: 'Asta',
      path: Id3Img,
    },
    {
      speed: 92,
      AV: 109,
      Gauge: 10000,
      id: Number(4),
      name: 'Gepardge',
      path: Id4Img,
    },
  ]

  const [actionOrder, setActionOrder] = React.useState(ActionOrder)
  const [defaultValues, setDefaultValues,] = React.useState(defaultActionOrder)
  const [actionHistory, setActionHistory] = React.useState([])

  const [formType, setFormType] = React.useState(1)

  React.useEffect(()=>{console.log('re-render')})

  return (
    <InputFieldContext.Provider value = {{defaultValues, setDefaultValues, actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory}}>
    <div className={classes.container}>
            <div>
              <CharCardsMapper
                TurnOrder = {actionOrder}/>
            </div>
            <div className={classes.flexitem}>
              <InputField/>
            </div>
            <div>

            </div>
    </div>
    <div>
      <ChangeLog/>
    </div>
    </InputFieldContext.Provider>
  );
}

export default App;
