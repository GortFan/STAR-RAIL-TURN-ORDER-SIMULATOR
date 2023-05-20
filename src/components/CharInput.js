import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import { act } from 'react-dom/test-utils'

export default function CharInput(){
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
      }

      function applySpeedBoost(e){

        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())

        let editArray = [...actionOrder]
        editArray[editArray.findIndex(object => object.id ===formType)].speed = editArray[editArray.findIndex(object => object.id ===formType)].speed+Number(formJson.SpeedBoost)
        editArray[editArray.findIndex(object => object.id ===formType)].AV = editArray[editArray.findIndex(object => object.id ===formType)].Gauge/editArray[editArray.findIndex(object => object.id ===formType)].speed
        bubbleSort(editArray)
      }

      function handleGaugeChange(e){
        // Prevent the browser from reloading the page
        e.preventDefault()

        // Read the form data
        const form = e.target
        const formData = new FormData(form)

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries())

        let editArray = [...actionOrder]
        editArray[editArray.findIndex(object => object.id ===formType)].Gauge = editArray[editArray.findIndex(object => object.id ===formType)].Gauge+Number(formJson.GaugeDelay)
        editArray[editArray.findIndex(object => object.id ===formType)].AV = editArray[editArray.findIndex(object => object.id ===formType)].Gauge/editArray[editArray.findIndex(object => object.id ===formType)].speed
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
        bubbleSort(defaultValues)
      }
    
      function handleAdvance(){  
        let editArray = [...actionOrder]
        let multiplier = editArray[1].AV

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
      <div>
          <div className={classes.label}>{charName}</div>          

      <div className={classes.speedflex}>
        <form method='post' onSubmit={editSpeed}>
          <p className={classes.parameters}>Change Speed</p>
          <input type='float' name="Speed"/>
          <button type='submit'>Apply Changes</button>
        </form>
      </div>
      
      <div className={classes.speedflex}>
        <form method='post' onSubmit={applySpeedBoost}>
          <p className={classes.parameters}>Modify Speed (Flat)</p>
          <input type='float' name="SpeedBoost"/>
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
      
      <div className={classes.speedflex}>
          <button onClick={handleActionAdvance}>Action Advance</button>
          <button onClick={handleAdvance}>Advance Turn</button>
          <button onClick={handleReset}>Reset to Defaults</button>
      </div>

      </div>
      )
}