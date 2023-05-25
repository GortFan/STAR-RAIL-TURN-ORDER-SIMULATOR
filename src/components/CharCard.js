import classes from './CharCards.module.css'
import React from 'react'

export default function CharCards(props){

    return(
        <div>
        <div className={classes.container}>
            <div className={classes.card}>
            <img src={props.path} alt=''/>
            </div>
            <div className={classes.valcontainer}>
                <div className={classes.values}>Speed: {Math.floor(props.speed)}</div>
                <div className={classes.values}>AV: {Math.ceil(props.AV)}</div>
                <div className={classes.values}>Gauge: {Math.floor(props.gauge)}</div>
            </div>
        </div>
        </div>
    )
}
