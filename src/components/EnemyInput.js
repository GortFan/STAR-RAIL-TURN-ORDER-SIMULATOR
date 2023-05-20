import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'

export default function EnemyInput(){

    const {defaultValues, setDefaultValues, actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory} = useContext(InputFieldContext)

    let charName = actionOrder[actionOrder.findIndex(object => object.id ===formType)].name

    function editSpeed(e){
        
      e.preventDefault()

      const form = e.target
      const formData = new FormData(form)

      const formJson = Object.fromEntries(formData.entries())

      //Character Math
      let editArray = [...actionOrder]
      editArray[editArray.findIndex(object => object.id ===formType)].speed = Number(formJson.Speed)
      editArray[editArray.findIndex(object => object.id ===formType)].AV = 10000/editArray[editArray.findIndex(object => object.id ===formType)].speed
      bubbleSort(editArray)
      
      let temp = actionHistory
      let action = 'Changed ' + charName +  "'s SPEED to " + formJson.Speed
      temp.push(action)
      setActionHistory(temp)
    }

    const [selected, setSelected] = useState(false);
    const [val, setVal] = useState();
    const [checkBreak, setCheckBreak] = useState(false);
    const [checkImprison, setCheckImprison] = useState(false);
    const [checkEntangle, setCheckEntangle] = useState(false);
            //Logic for disabling and re-enabling checkboxes 
            function handleChange(e){
                setSelected(!selected)
                setVal(e.target.value)
                calcEnemy(e.target.value)
              }

              function handleGaugeChange(e){
                // Prevent the browser from reloading the page
                e.preventDefault()
        
                const form = e.target
                const formData = new FormData(form)
        
                const formJson = Object.fromEntries(formData.entries())
        
                let editArray = [...actionOrder]
                editArray[editArray.findIndex(object => object.id ===formType)].Gauge = editArray[editArray.findIndex(object => object.id ===formType)].Gauge+Number(formJson.GaugeDelay)
                editArray[editArray.findIndex(object => object.id ===formType)].AV = editArray[editArray.findIndex(object => object.id ===formType)].Gauge/editArray[editArray.findIndex(object => object.id ===formType)].speed
                bubbleSort(editArray)

                let temp = actionHistory
                let action = 'Applied ACTION ADVANCE to ' + charName
                temp.push(action)
                setActionHistory(temp)
              }
            

            function calcEnemy(debuff){
            let editArray = [...actionOrder]
            let enemyIndex = editArray.findIndex(object => object.id === 5)
            if(debuff === 'Break'){
                editArray[enemyIndex].Gauge = 10000+(10000*(0.25))
                editArray[enemyIndex].AV = editArray[enemyIndex].Gauge/editArray[enemyIndex].speed
                setCheckBreak(true)
            }
            if(debuff === 'Imprisonment'){
                editArray[enemyIndex].speed = (editArray[enemyIndex].speed)*(1-0.1)
                editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
                editArray[enemyIndex].AV = editArray[enemyIndex].Gauge/editArray[enemyIndex].speed
                setCheckImprison(true)
            }
            if(debuff === 'Entanglement'){
                editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
                editArray[enemyIndex].AV = editArray[enemyIndex].Gauge/editArray[enemyIndex].speed
                setCheckEntangle(true)
            }
            if(selected === true){
                editArray[enemyIndex].AV = 80
                editArray[enemyIndex].Gauge = 10000
                //the speed value that it sets it to must be a default (currently manually set to 125 but user can decide what the default is on their own later)
                editArray[enemyIndex].speed = 125
                setCheckBreak(false)
                setCheckImprison(false)
                setCheckEntangle(false)
                let temp = actionHistory
                let action = 'Removed debuff from ' + charName
                temp.push(action)
                setActionHistory(temp)
            }
            if(selected !== true){
              let temp = actionHistory
              let action = 'Applied ' + debuff + ' to ' + charName

              temp.push(action)
              setActionHistory(temp)
            }
             bubbleSort(editArray)
            }

            function handleActionAdvance(){
                let editArray = [...actionOrder]
                editArray[editArray.findIndex(object => object.id ===formType)].Gauge=0
                editArray[editArray.findIndex(object => object.id ===formType)].AV=editArray[editArray.findIndex(object => object.id ===formType)].Gauge/editArray[editArray.findIndex(object => object.id ===formType)].speed
                bubbleSort(editArray)
                let temp = actionHistory
                let action = 'Applied ACTION ADVANCE to ' + charName
                temp.push(action)
                setActionHistory(temp)
              }

              function handleReset(){
                bubbleSort(defaultValues)
                let temp = actionHistory
                let action = 'RESET to default values'
                temp.push(action)
                setActionHistory(temp)
              }
            
              function handleAdvance(){
                let editArray = [...actionOrder]
                setSelected(false)
                setCheckBreak(false)
                setCheckEntangle(false)
                setCheckImprison(false)
          
                  if(editArray[0].AV !== 0){
                    let multiplier = editArray[0].AV
                    let a = editArray[1].AV - multiplier 
                    let temp = actionHistory
                    let action = "Starting simulation " + editArray[0].name + "'s gauge to 0." + editArray[1].name + " to move next, using AV of " + a
                    temp.push(action)
                    setActionHistory(temp)
                    //1st element
                    editArray[0].AV = 0
                    editArray[0].Gauge = 0
                    //2nd element
                    editArray[1].Gauge = editArray[1].Gauge - (editArray[1].speed*multiplier)
                    editArray[1].AV = editArray[1].Gauge/editArray[1].speed
                    //3rd element
                    editArray[2].Gauge = editArray[2].Gauge - (editArray[2].speed*multiplier)
                    editArray[2].AV = editArray[2].Gauge/editArray[2].speed
                    //4th element
                    editArray[3].Gauge = editArray[3].Gauge - (editArray[3].speed*multiplier)
                    editArray[3].AV = editArray[3].Gauge/editArray[3].speed
                    //5th element
                    editArray[4].Gauge = editArray[4].Gauge - (editArray[4].speed*multiplier)
                    editArray[4].AV = editArray[4].Gauge/editArray[4].speed
                  }
                  else{
                    let multiplier = editArray[1].AV
                    let temp = actionHistory
                    let action = "Reset " + editArray[0].name + "'s gauge to 10000. " + editArray[1].name + " moves next, using AV of " + multiplier
                    temp.push(action)
                    setActionHistory(temp)
                    //1st element
                    editArray[0].Gauge = 10000
                    editArray[0].AV = editArray[0].Gauge/editArray[0].speed
                    //2nd element
                    editArray[1].Gauge = 0
                    editArray[1].AV = 0
                    //3rd element
                    editArray[2].Gauge = editArray[2].Gauge - (editArray[2].speed*multiplier)
                    editArray[2].AV = editArray[2].Gauge/editArray[2].speed
                    //4th element
                    editArray[3].Gauge = editArray[3].Gauge - (editArray[3].speed*multiplier)
                    editArray[3].AV = editArray[3].Gauge/editArray[3].speed
                    //5th element
                    editArray[4].Gauge = editArray[4].Gauge - (editArray[4].speed*multiplier)
                    editArray[4].AV = editArray[4].Gauge/editArray[4].speed
                  }
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
              
      
    return(
        <div><div className={classes.label}>Enemy</div>
         <div className={classes.speedflex}>
         <form method='post' onSubmit={editSpeed}>
          <p className={classes.parameters}>Change Speed</p>
          <input type='float' name="Speed"/>
          <button type='submit'>Apply Changes</button>
          </form>
          </div>
          <div className={classes.speedflex}>
        <form method='post' onSubmit={handleGaugeChange}>
          <p className={classes.parameters}>Add to Gauge</p>
          <input type='float' name="GaugeDelay"/>
          <button type='submit'>Apply Changes</button>
        </form>
      </div>

        <div className={classes.delayflex}>
            <input className={classes.checkbox} type='checkbox' name ='Break' value='Break' onChange={handleChange} checked={checkBreak} disabled={selected === true && val !== 'Break'}></input>
            <p className={classes.parameters}>Break</p>
        </div>

        <div className={classes.delayflex}>
            <input className={classes.checkbox} type='checkbox' name ='Imprisonment' value='Imprisonment' onChange={handleChange} checked={checkImprison} disabled={selected === true && val !== 'Imprisonment'}></input>
            <p className={classes.parameters}>Imprisonment</p>
        </div>

        <div className={classes.delayflex}>
            <input className={classes.checkbox} type='checkbox' name ='Entanglement' value='Entanglement' onChange={handleChange} checked={checkEntangle} disabled={selected === true && val !== 'Entanglement'}></input>
            <p className={classes.parameters}>Entanglement</p>
        </div>
        
        <div className={classes.speedflex}>
            <button onClick={handleActionAdvance}>Action Advance</button>
            <button onClick={handleAdvance}>Advance Turn</button>
            <button onClick={handleReset}>Reset to Defaults</button>
        </div>
        </div>
    )
}
