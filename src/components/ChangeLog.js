import React from 'react'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import {useContext} from 'react'
import classes from './ChangeLog.module.css'

export default function ChangeLog(){

    const {actionHistory} = useContext(InputFieldContext)
    return(
        <div className={classes.container}>
            {/* {actionHistory.map(newEntry=><div>{newEntry}</div>)} */}
            {actionHistory.map((newAction)=>{
                return newAction.map(e=>{
                return <div>{e}</div>})})}
        </div>
    )
}

