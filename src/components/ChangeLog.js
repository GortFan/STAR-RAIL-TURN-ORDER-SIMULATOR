import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'
import classes from './ChangeLog.module.css'

export default function ChangeLog(){

    const {actionOrder, setActionOrder, formType, setFormType, actionHistory, setActionHistory} = useContext(InputFieldContext)
    let log = JSON.stringify(actionHistory)
    return(
        <div className={classes.container}>
            <p className={classes.text}>{log}</p>
        </div>
    )
}