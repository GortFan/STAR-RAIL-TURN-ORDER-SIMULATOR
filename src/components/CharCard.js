import classes from './CharCards.module.css'
import InputField from './InputField'
import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'

export default function CharCards(props){

    const {form, setForm} = useContext(InputFieldContext)

    function handleClick(){
        let temp = form
        temp.formType = props.id
        setForm(temp)
        console.log(form)
    }
    
    React.useEffect(()=>{console.log('re-render')},[form])
    
    return(
        <div className={classes.container} onClick={handleClick}>
            <div className={classes.card}>
            <img src={props.path} alt=''/>
            </div>
            <div className={classes.valcontainer}>
                <div className={classes.values}>Speed: {props.speed}</div>
                <div className={classes.values}>AV: {props.AV}</div>
                <div className={classes.values}>Gauge: {props.gauge}</div>
                <div>{form.formType}</div>
            </div>
        </div>
    )
}
