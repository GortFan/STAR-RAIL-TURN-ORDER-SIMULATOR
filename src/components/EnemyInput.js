import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'

export default function EnemyInput(){

    const {form, setForm} = useContext(InputFieldContext)

    const [selected, setSelected] = useState(false);
    const [val, setVal] = useState();
    const [checkBreak, setCheckBreak] = useState(false);
    const [checkImprison, setCheckImprison] = useState(false);
    const [checkEntangle, setCheckEntangle] = useState(false);
            //Logic for disabling and re-enabling checkboxes 
            function handleChange(e){
                setSelected(!selected)
                setVal(e.target.value)
                //calcEnemy(e.target.value)
              }

            // function calcEnemy(debuff){
            // let editArray = [...array]
            // let enemyIndex = editArray.findIndex(object => object.id === 5)
            // if(debuff === 'Break'){
            //     editArray[enemyIndex].Gauge = 10000+(10000*(0.25))
            //     editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
            //     setCheckBreak(true)
            // }
            // if(debuff === 'Imprisonment'){
            //     editArray[enemyIndex].speed = Math.ceil((editArray[enemyIndex].speed)*(1-0.1))
            //     editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
            //     editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
            //     setCheckImprison(true)
            // }
            // if(debuff === 'Entanglement'){
            //     editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
            //     editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
            //     setCheckEntangle(true)
            // }
            // if(selected === true){
            //     editArray[enemyIndex].AV = 80
            //     editArray[enemyIndex].Gauge = 10000
            //     editArray[enemyIndex].speed = 125
            //     setCheckBreak(false)
            //     setCheckImprison(false)
            //     setCheckEntangle(false)
            // }
            // // bubbleSort(editArray)
            // }
      
    return(
        <div>
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
        </div>
    )
}
