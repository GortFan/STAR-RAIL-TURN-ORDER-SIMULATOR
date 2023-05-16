import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'

export default function CharInput(){
    const {form, setForm} = useContext(InputFieldContext)
    console.log(form)
    function changeSpeed(e) {
        //validation
        if(e.target.value <= 0 || isNaN(e.target.value) || e.target.value > 999){
          alert('invalid input');
        }
        else{
          //calcChar(e.target.value)
        }
      }

    //   function calcChar(speed){
    //     //Character Math
    //     let editArray = [...array]
    //     let charIndex = editArray.findIndex(object => object.id === 1)
    //     editArray[charIndex].speed = speed
    //     editArray[charIndex].AV = Math.ceil(10000/editArray[charIndex].speed)
    //     bubbleSort(editArray)
    //   }
      return(
        <div className={classes.container}>
        <div className={classes.formflex}>
          <div>
          
          <div className={classes.speedflex}>
          <p className={classes.parameters}>Change Speed</p>
          <input type='number' name="Speed" onChange={changeSpeed}/>
          </div>
          
          </div>

        </div>
      </div>
      )
}