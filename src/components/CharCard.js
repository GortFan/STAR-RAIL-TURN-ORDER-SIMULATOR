import classes from './CharCards.module.css'
import InputField from './InputField'
import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'

export default function CharCards(props){

    const {defaultValues, setDefaultValues, formType, setFormType} = useContext(InputFieldContext)

    function handleClick(){
        let temp = formType
        temp = props.id
        setFormType(temp)
    }
    
    function setDefaultSpeed(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        let defaultSpeed = Number(formJson.DefaultSpeed)

        let editDefaultArray = [...defaultValues]
        editDefaultArray[editDefaultArray.findIndex(object => object.id ===props.id)].speed = defaultSpeed
        editDefaultArray[editDefaultArray.findIndex(object => object.id ===props.id)].AV = 10000/editDefaultArray[editDefaultArray.findIndex(object => object.id ===props.id)].speed
        setDefaultValues(editDefaultArray)
        console.log(defaultValues)
        // let editDefaultArray = [...defaultActionOrder]
        // editDefaultArray[editDefaultArray.findIndex(object => object.id ===props.id)].speed = Number(e.target.value)
        // editDefaultArray[editDefaultArray.findIndex(object => object.id ===props.id)].AV = 10000/editDefaultArray[editDefaultArray.findIndex(object => object.id ===props.id)].speed
        // setDefaultActionOrder(editDefaultArray)
        // console.log(defaultActionOrder)
        // console.log(actionOrder)
    }

    return(
        <div className={classes.container}>
            <form method='post' onSubmit={setDefaultSpeed}>
            <div className={classes.inputTxt}>Set Default Speed</div>
            <input type='float' name='DefaultSpeed'></input>
            <button type='submit'>Apply</button>
            </form>
            <div className={classes.card} onClick={handleClick}>
            <img src={props.path} alt=''/>
            </div>
            <div className={classes.valcontainer}>
                <div className={classes.values}>Speed: {Math.floor(props.speed)}</div>
                <div className={classes.values}>AV: {Math.ceil(props.AV)}</div>
                <div className={classes.values}>Gauge: {Math.floor(props.gauge)}</div>
            </div>
        </div>
    )
}
