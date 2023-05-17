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
  
  console.log('render')
  let sequenceData = {turnOrder: [
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
  ],
  formType: 1}

  const [form, setForm] = React.useState(sequenceData)

  function handleReset(){
    let editArray = [...sequenceData.turnOrder]
    //1st element
    editArray[0].Gauge = 10000
    editArray[0].AV = Math.ceil(editArray[0].Gauge/editArray[0].speed)
    //2nd element
    editArray[1].Gauge = 10000
    editArray[1].AV = Math.ceil(editArray[1].Gauge/editArray[1].speed)
    //3rd element
    editArray[2].Gauge = 10000
    editArray[2].AV = Math.ceil(editArray[2].Gauge/editArray[2].speed)
    //4th element
    editArray[3].Gauge = 10000
    editArray[3].AV = Math.ceil(editArray[3].Gauge/editArray[3].speed)
    //5th element
    editArray[4].Gauge = 10000
    editArray[4].AV = Math.ceil(editArray[4].Gauge/editArray[4].speed)
    //enemy speed
    editArray[editArray.findIndex(object => object.id === 5)].speed=125
  }

  function handleAdvance(){
    let editArray = [...sequenceData.turnOrder]
    let multiplier = editArray[0].AV
    //1st element
    if(editArray[0].id===5){
      editArray[0].speed=125
    }
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
  }

  React.useEffect(()=>{console.log('re-render')},[form])

  return (
    <InputFieldContext.Provider value = {{form, setForm}}>
    <div className={classes.container}>
            <div>
              <CharCardsMapper
                TurnOrder = {sequenceData}/>
            </div>
            <div className={classes.flexitem}>
              <InputField/>
              <button onClick={handleAdvance}>Advance Turn</button>
              <button onClick={handleReset}>Reset</button>
            </div>

    </div>
    </InputFieldContext.Provider>
  );
}

export default App;
