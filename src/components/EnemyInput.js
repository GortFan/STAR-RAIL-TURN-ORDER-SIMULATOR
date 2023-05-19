import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'

export default function EnemyInput(){

    const {actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory} = useContext(InputFieldContext)

    function editSpeed(e){
        
      e.preventDefault()

      const form = e.target
      const formData = new FormData(form)

      const formJson = Object.fromEntries(formData.entries())

      //Character Math
      let editArray = [...actionOrder]
      editArray[editArray.findIndex(object => object.id ===formType)].speed = Number(formJson.Speed)
      editArray[editArray.findIndex(object => object.id ===formType)].AV = Math.ceil(10000/editArray[editArray.findIndex(object => object.id ===formType)].speed)
      bubbleSort(editArray)
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

            function calcEnemy(debuff){
            let editArray = [...actionOrder]
            let enemyIndex = editArray.findIndex(object => object.id === 5)
            if(debuff === 'Break'){
                editArray[enemyIndex].Gauge = 10000+(10000*(0.25))
                editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
                setCheckBreak(true)
            }
            if(debuff === 'Imprisonment'){
                editArray[enemyIndex].speed = Math.ceil((editArray[enemyIndex].speed)*(1-0.1))
                editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
                editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
                setCheckImprison(true)
            }
            if(debuff === 'Entanglement'){
                editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
                editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
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
            }
             bubbleSort(editArray)
            }

            function handleActionAdvance(){
                let editArray = [...actionOrder]
                editArray[editArray.findIndex(object => object.id ===formType)].Gauge=0
                editArray[editArray.findIndex(object => object.id ===formType)].AV=editArray[editArray.findIndex(object => object.id ===formType)].Gauge/editArray[editArray.findIndex(object => object.id ===formType)].speed
                bubbleSort(editArray)
                let temp = actionHistory
                temp.push(actionOrder)
                setActionHistory(temp)
              }

              function handleReset(){
                console.log('under development (will be creating a default that can be set by user and reset will set to that default)')
              }
            
              function handleAdvance(){
                let editArray = [...actionOrder]
                let multiplier = editArray[0].AV
                setSelected(false)
                setCheckBreak(false)
                setCheckEntangle(false)
                setCheckImprison(false)
                //1st element
                //for any unit who is about to go to the back of the order, the speed must be set back to the default value therefore a check must be made on this line
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
                let temp = actionHistory
                temp.push(actionOrder)
                setActionHistory(temp)
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
          <input type='number' name="Speed"/>
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
        </div>
        </div>
    )
}
