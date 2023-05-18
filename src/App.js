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
      id: 5,
      path: Id5Img,
      speed: 125,
      AV: 80,
      Gauge: 10000
    },
    {
      id: 1,
      path: Id1Img,
      speed: 110,
      AV: 91,
      Gauge: 10000
    },
    {
      id: 2,
      path: Id2Img,
      speed: 100,
      AV: 100,
      Gauge: 10000
    },
    {
      id: 3,
      path: Id3Img,
      speed: 98,
      AV: 103,
      Gauge: 10000
    },
    {
      id: 4,
      path: Id4Img,
      speed: 92,
      AV: 109,
      Gauge: 10000
    },
  ]


  const [actionOrder, setActionOrder] = React.useState(ActionOrder)
  const [formType, setFormType] = React.useState(1)

  function handleReset(){
    setActionOrder(ActionOrder)
  }

  function handleAdvance(){
    let editArray = [...actionOrder]
    let multiplier = editArray[0].AV
    //1st element
    editArray[0].Gauge = 10000
    editArray[0].AV = Math.ceil(editArray[0].Gauge/editArray[0].speed)
    //2nd element
    editArray[1].Gauge = editArray[1].Gauge - (editArray[1].speed*multiplier)
    editArray[1].AV = Math.ceil(editArray[1].Gauge/editArray[1].speed)
    //3rd element
    editArray[2].Gauge = editArray[2].Gauge - (editArray[2].speed*multiplier)
    editArray[2].AV = Math.ceil(editArray[2].Gauge/editArray[2].speed)
    //4th element
    editArray[3].Gauge = editArray[3].Gauge - (editArray[3].speed*multiplier)
    editArray[3].AV = Math.ceil(editArray[3].Gauge/editArray[3].speed)
    //5th element
    editArray[4].Gauge = editArray[4].Gauge - (editArray[4].speed*multiplier)
    editArray[4].AV = Math.ceil(editArray[4].Gauge/editArray[4].speed)

    bubbleSort(editArray)
  }

                //Sorting array by AV
                function bubbleSort(turnOrder) {
                  let i, j;
                  let len = turnOrder.length;
                
                  let isSwapped = false;
                
                   for (i = 0; i < len; i++) {
                
                      isSwapped = false;
                
                      for (j = 0; j < len-1; j++) {
                          if (turnOrder[j].AV > turnOrder[j + 1].AV) {
                              let temp = turnOrder[j]
                              turnOrder[j] = turnOrder[j + 1];
                              turnOrder[j + 1] = temp;
                             isSwapped = true;
                          }
                      }
        
                      if (!isSwapped) {
                          break;
                      }
                  }
                  setActionOrder(turnOrder)
                }

  React.useEffect(()=>{console.log('re-render')})

  return (
    <InputFieldContext.Provider value = {{actionOrder, setActionOrder, formType, setFormType}}>
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
