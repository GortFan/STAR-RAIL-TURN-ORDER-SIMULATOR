import CharCardsMapper from './components/CharCardsMapper'
import InputField from './components/InputField'
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
      id: 5,
      path: Id5Img,
    },
    {
      speed: 110,
      AV: 91,
      Gauge: 10000,
      id: 1,
      path: Id1Img,
    },
    {
      speed: 100,
      AV: 100,
      Gauge: 10000,
      id: 2,
      path: Id2Img,
    },
    {
      speed: 98,
      AV: 103,
      Gauge: 10000,
      id: 3,
      path: Id3Img,
    },
    {
      speed: 92,
      AV: 109,
      Gauge: 10000,
      id: 4,
      path: Id4Img,
    },
  ]


  const [actionOrder, setActionOrder] = React.useState(ActionOrder)
  const [formType, setFormType] = React.useState(1)
  const [actionHistory, setActionHistory] = React.useState([])

  React.useEffect(()=>{console.log('re-render')})

  function exportActionHistory() {
    const fileData = JSON.stringify(actionHistory);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "action-history.json";
    link.href = url;
    link.click();
  }

  return (
    <InputFieldContext.Provider value = {{actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory}}>
    <div className={classes.container}>
            <div>
              <CharCardsMapper
                TurnOrder = {actionOrder}/>
            </div>
            <div className={classes.flexitem}>
              <InputField/>

            </div>
            <div>
              <button onClick = {exportActionHistory}>Generate Action History</button>
            </div>
    </div>
    </InputFieldContext.Provider>
  );
}

export default App;
