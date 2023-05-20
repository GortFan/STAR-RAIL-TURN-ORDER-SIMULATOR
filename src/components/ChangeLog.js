import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'
import classes from './ChangeLog.module.css'

export default function ChangeLog(){

    const {actionHistory} = useContext(InputFieldContext)
    return(
        <div className={classes.container}>
            <select className={classes.select} multiple>
            {actionHistory.map(e=><option className={classes.option}>{e}</option>)}
            </select>
        </div>
    )
}