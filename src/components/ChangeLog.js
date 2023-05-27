import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'
import classes from './ChangeLog.module.css'

export default function ChangeLog(){
    const {actionHistory} = useContext(InputFieldContext)
    console.log(actionHistory)
    return(
        <div className={classes.container}>
            {actionHistory.map((innerArray)=>{
                return innerArray.map((action)=>
                    <div>{action}</div>
                )
            })}
        </div>
    )
}