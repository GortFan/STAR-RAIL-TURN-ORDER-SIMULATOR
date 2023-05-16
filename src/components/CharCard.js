import classes from './CharCards.module.css'
import InputField from './InputField'
import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'

export default function CharCards(props){

    const {form, setForm} = useContext(InputFieldContext)
    // console.log({form})

    function handleClick(){
        setForm(props)
    }
    return(
        <div className={classes.container} onClick={handleClick}>
            <div className={classes.card}>
            <img src={props.path} alt=''/>
            </div>
            <div className={classes.valcontainer}>
                <div className={classes.values}>Speed: {props.speed}</div>
                <div className={classes.values}>AV: {props.AV}</div>
                <div className={classes.values}>Gauge: {props.gauge}</div>
            </div>
        </div>
            //   <InputField 
            //   TurnOrder = {turnOrder}
            //   />
        //this will have a form in it (as in inputfield that generates each time a render occurs)
    )
}
