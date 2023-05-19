import classes from './CharCards.module.css'
import InputField from './InputField'
import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'

export default function CharCards(props){

    const {actionOrder, setActionOrder, formType, setFormType} = useContext(InputFieldContext)

    function handleClick(){
        let temp = formType
        temp = props.id
        setFormType(temp)
    }
    

    return(
        <div className={classes.container}>
            <div className={classes.card} onClick={handleClick}>
            <img src={props.path} alt=''/>
            </div>
            <div className={classes.valcontainer}>
                <div className={classes.values}>Speed: {props.speed}</div>
                <div className={classes.values}>AV: {props.AV}</div>
                <div className={classes.values}>Gauge: {props.gauge}</div>
            </div>
        </div>
    )
}
